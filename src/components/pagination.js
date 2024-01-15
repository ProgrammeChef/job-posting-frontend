import Button from "./button";
import { NavArrowLeft, NavArrowRight } from "iconoir-react";

const Pagination = ({ page = 0, totalCount, onPage = () => { }, pageSize = 8 }) => {
    let pageCount = Number(Math.ceil(totalCount / pageSize));
    return (
        <div className="w-full h-8 justify-center items-center gap-4 inline-flex transition-all">
            <div onClick={() => page > 0 && onPage(page - 1)} className="w-9 p-2 bg-white rounded-lg border border-indigo-900 justify-center items-center gap-2.5 flex hover:cursor-pointer hover:shadow-lg transition-all">
                <NavArrowLeft width={20} height={20} />
            </div>
            {(() => {
                let tempArray = [];
                for (let i = 0; i < pageCount; i += 1) {
                    tempArray.push(<Button key={i} onClick={() => onPage(i)} text={(i + 1).toString()} padding={"px-4 py-2 " + (page === i ? "bg-gray-300" : "text-neutral-600")} height="2" variant="text" width="[38px]" color={page === i ? "primary" : "none"} />);
                }
                return tempArray;
            })()}
            <div onClick={() => (page + 1) < pageCount && onPage(page + 1)} className="w-9 p-2 bg-white rounded-lg border border-indigo-900 justify-center items-center gap-2.5 flex hover:cursor-pointer hover:shadow-lg transition-all">
                <NavArrowRight width={20} height={20} />
            </div>
        </div>
    )
}

export default Pagination;