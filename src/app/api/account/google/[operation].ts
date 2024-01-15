import type { NextApiRequest, NextApiResponse } from "next";
import { createRouter } from "next-connect";
import passport from "passport";
import Google, {
  IOAuth2StrategyOption,
  Profile,
  VerifyFunction,
} from "passport-google-oauth";
import { findUser, sendWelcomeEmail } from "@/app/account/actions";
import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
import { createUserFromProvider } from "../lib";
import { get } from "lodash";
import { getSecureCookie } from "@/app/lib/services/cookies";

dayjs.extend(duration);

export const config = {
  api: {
    externalResolver: true,
  },
};

passport.use(
  new Google.OAuth2Strategy(
    {
      clientID: "167169154007-8p8kg3rcs7klqb2div8d0l9c8bjnj4k3.apps.googleusercontent.com",
      clientSecret: "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",
      callbackURL: "http://localhost:3000/api/account/google/callback",
    } as IOAuth2StrategyOption,
    (
      accessToken: string,
      refreshToken: string,
      profile: Profile,
      done: VerifyFunction
    ) => {
      done(null, profile);
    }
  )
);

const router = createRouter<NextApiRequest, NextApiResponse>();

router.get((req, res, next) => {
  if (req.query.operation === "auth") {
    return passport.authenticate("google", { scope: ["profile", "email"] })(
      req,
      res,
      next
    );
  } else if (req.query.operation === "callback") {
    return passport.authenticate(
      "google",
      async (err: any, profile: any, info: any) => {
        if (err) {
          res.status(500).end();
          return;
        }
        let user = await findUser({
          email: profile.emails[0].value,
        });
        if (!user) {
          user = await createUserFromProvider({
            profile,
            identityProvider: "GOOGLE",
          });
          setTimeout(async () => {
            await sendWelcomeEmail({ email: user!.email });
          }, 0);
        } else if (user.identityProvider !== "GOOGLE") {
          res.redirect("/?error=exists_with_different_identity");
          return;
        }
        const cookie = await getSecureCookie({
          name: "user",
          value: {
            email: user!.email,
            id: user!.id,
            photo: get(profile, "photos[0].value", ""),
            name: get(profile, "displayName", ""),
            username: user!.username,
          },
        });
        res.setHeader("Set-Cookie", cookie);
        res.redirect("/profile");
      }
    )(req, res, next);
  } else {
    res.status(400).json({ error: "Unknown operation." });
  }
});

export default router.handler({
  onError: (err: any, req: any, res: any) => {
    console.error(err.stack);
    res.status(err.statusCode || 500).end(err.message);
  },
});