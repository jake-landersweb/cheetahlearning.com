'use client';

import { useState } from "react";
import CheetahClass from "../../lib/data/cheetahClass";
import ClassCell from "./classCell";

export default function ClassView({ classes }: { classes: CheetahClass[] }) {

    const [selected, setSelected] = useState(0)

    const selectionCell = (title: string, index: number) => {
        return <button onClick={() => setSelected(index)}>
            <p className={`${selected == index ? "bg-main md:hover:bg-main-300" : "bg-acc md:hover:bg-acc-400"} text-white p-4 transition-all font-medium text-lg`}>{title}</p>
        </button>
    }

    const getClasses = () => {
        const cells = []
        if (selected == 0) {
            for (var i = 0; i < classes.length; i++) {
                cells.push(<ClassCell cc={classes[i]} />)
            }
        } else if (selected == 1) {
            for (var i = 0; i < classes.length; i++) {
                const idx = i
                if (classes[idx].virtual[0] == "0") {
                    cells.push(<ClassCell cc={classes[i]} />)
                }
            }
        } else {
            for (var i = 0; i < classes.length; i++) {
                const idx = i
                if (classes[idx].virtual[0] == "1") {
                    cells.push(<ClassCell cc={classes[i]} />)
                }
            }
        }
        return cells
    }

    return <div className="overflow-clip rounded-md">
        <div className="grid md:grid-cols-3 text-center">
            {selectionCell("All Cheetah Exam Prep Programs", 0)}
            {selectionCell("4 Day Virtual PMP Exam Prep", 1)}
            {selectionCell("4 Week Online PMP Exam Prep", 2)}
        </div>
        <div className="bg-acc-600 p-4 grid grid-cols-4 text-center text-bg text-lg font-medium">
            <p>Type</p>
            <p>Dates</p>
            <p>Price</p>
        </div>
        <div className="bg-gray-100 md:max-h-[70vh] md:overflow-y-scroll">
            {getClasses()}
        </div>
        <div className="bg-acc p-4 text-bg space-y-4 grid place-items-center">
            <p className="italic text-medium max-w-4xl text-center">You earn the Certified Accelerated Learner credential by completing the Cheetah Exam Prep with the PMP program. Students who attach this credential on their Linked In account can trigger recruiting for positions requiring their skills starting at $120,000.</p>
            <div className="h-[1px] bg-acc-700 w-full"></div>
            <p className="text-medium max-w-4xl text-center">Cheetah Learning is the worldwide gold standard in Project Manager Education. For Corporate Discounts, and Installment Plans, call (844)800-4PMP or email info@cheetahlearning.com.</p>
        </div>
    </div>
}