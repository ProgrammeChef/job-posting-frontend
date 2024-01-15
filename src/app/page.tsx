import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <div className="bg-white w-[100%] h-[100%]">
      <div>
        <Link href={"/login"}>login</Link>
        <Link href={"register"}>register</Link>
      </div>
    </div>
  );
}
