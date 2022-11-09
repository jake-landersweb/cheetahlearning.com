import React from "react";

export default function Separator({ children }: { children: React.ReactNode }) {
    return <div className="">
        <div className="bg-acc p-8 font-bold text-2xl md:text-3xl text-bg text-center">
            {children}
        </div>
        <div className="grid place-items-center">
            <div className="w-[30px] h-[30px] bg-acc rotate-45 -m-[20px]"></div>
        </div>
    </div>
}