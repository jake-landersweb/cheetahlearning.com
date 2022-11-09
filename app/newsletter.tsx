'use client';

import { useState } from "react";
import BoundsWrapper from "../components/boundsWrapper";
import Field from "../components/field";

export default function NewsLetter() {
    const [firstName, setFirstName] = useState("")
    const [email, setEmail] = useState("")

    return <div className="bg-acc p-8">
        <BoundsWrapper>
            <div className="grid md:grid-cols-2 gap-4">
                <div className="text-center md:text-left">
                    <h3 className="text-3xl md:text-4xl text-bg font-semibold tracking-tight">Cheetah PMP Newsletter</h3>
                    <p className="text-gray-400 md:text-lg leading-6 max-w-2xl">Sign up to our newsletter to receive daily project management tips to aid with your professional development.</p>
                </div>
                <div className="space-y-2">
                    <Field props={{
                        value: firstName,
                        label: "First Name",
                        onChanged: (val: string) => setFirstName(val),
                        initText: firstName,
                        showLabelText: true,
                        isTextArea: false,
                        inputType: "name",
                        className: "",
                    }} />
                    <Field props={{
                        value: email,
                        label: "Email",
                        onChanged: (val: string) => setEmail(val),
                        initText: email,
                        showLabelText: true,
                        isTextArea: false,
                        inputType: "email",
                        className: "",
                    }} />
                    <div className="grid place-items-center pt-2">
                        <button className="bg-main text-bg rounded-md md:hover:bg-main-300 transtion-all"><p className="px-6 py-2">Sign Up</p></button>
                    </div>
                </div>
            </div>
        </BoundsWrapper>
    </div>
}