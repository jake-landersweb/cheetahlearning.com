import CheetahClass from "../../lib/data/cheetahClass";
import Link from "../link";

export default function ClassCell({ cc }: { cc: CheetahClass }) {
    return <div className="p-4 border-b border-b-gray-200 grid grid-cols-4 text-center">
        <h4>{cc.location[0]}</h4>
        <p>{cc.date[0]}</p>
        <p>{cc.seats[0]}</p>
        <Link props={{
            href: cc.url[0],
            child: <p>REGISTER</p>,
            isExternal: true,
            className: "text-red-400 underline font-medium md:hover:opacity-50 transition-all"
        }} />
    </div>
}