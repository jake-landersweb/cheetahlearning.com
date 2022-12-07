import { useState } from "react"
import Field from "./field"
import Image from "./image"

export default function TrustPilot() {

    const [email, setEmail] = useState("")
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [journey, setJourney] = useState("")
    const [date, setDate] = useState("")

    const errorText = () => {
        if (email === "") {
            return "Email is empty."
        } else if (!emailIsValid()) {
            return "Please enter a valid email."
        } else if (name === "") {
            return "Name is empty."
        } else if (phone === "") {
            return "Phone is empty."
        } else if (journey === "" || date === "") {
            return "Please answer the dropdowns."
        } else {
            return "Your information looks good!"
        }
    }

    const emailIsValid = () => {
        if (email == "") {
            return false
        } else if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,253}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,253}[a-zA-Z0-9])?)*$/.test(email)) {
            return true
        } else {
            return false
        }
    }

    return <div className="bg-gray-300 p-4 rounded-md lg:mr-4 mt-4 lg:mt-0 h-min md:max-w-[350px]">
        <div className="grid place-items-center bg-white overflow-clip rounded-sm">
            <Image props={{
                src: "/images/pass-the-PMP-exam-Cheetah-Fast-1024x720.jpg",
                alt: "Pass the PMP",
                divClass: "",
                imgClass: ""
            }} />
            <div className="p-2 space-y-2">
                <Image props={{
                    src: "/images/a_trust_pilot_banner.jpg",
                    alt: "Trust Pilot",
                    divClass: undefined,
                    imgClass: ""
                }} />
                <h3 className="text-2xl font-black text-center">Free Smart Start Guide</h3>
                <p className="text-2xl leading-6 font-semibold">Learn what it takes to master Accelerated Learning and pass the PMP Exam Cheetah FAST</p>
                <form>
                    <Field props={{
                        value: email,
                        label: "Email*",
                        onChanged: (val: string) => setEmail(val),
                        initText: email,
                        showLabelText: true,
                        isTextArea: false,
                        inputType: "email",
                        className: "bg-gray-200"
                    }} />
                    <Field props={{
                        value: name,
                        label: "Full Name*",
                        onChanged: (val: string) => setName(val),
                        initText: name,
                        showLabelText: true,
                        isTextArea: false,
                        inputType: "text",
                        className: "bg-gray-200"
                    }} />
                    <Field props={{
                        value: phone,
                        label: "Phone*",
                        onChanged: (val: string) => setPhone(val),
                        initText: phone,
                        showLabelText: true,
                        isTextArea: false,
                        inputType: "text",
                        className: "bg-gray-200"
                    }} />
                    <h3 className="font-bold text-md ml-4 text-gray-400">
                        Where are you with your PMP Journey?*
                    </h3>
                    <select name="cars" id="cars" onChange={(e) => setJourney(e.target.value)} className="w-[300px] py-1 rounded-sm">
                        <option value=""></option>
                        <option value="Just learning about what is required.">Just learning about what is required.</option>
                        <option value="On the fence if I should do this.">On the fence if I should do this.</option>
                        <option value="Want / need to become a PMP - just not sure how.">Want / need to become a PMP - just not sure how.</option>
                        <option value="Ready to get started with an effective prep program.">Ready to get started with an effective prep program.</option>
                        <option value="Want to learn more about why Cheetah Learning is the best way to become a PMP.">Want to learn more about why Cheetah Learning is the best way to become a PMP.</option>
                        <option value="Already took the exam and failed so I need a more effective approach.">Already took the exam and failed so I need a more effective approach.</option>
                    </select>
                    <h3 className="font-bold text-md ml-4 text-gray-400">
                        When Are You Planning on Registering for Your Cheetah Class?*
                    </h3>
                    <select name="cars" id="cars" onChange={(e) => setDate(e.target.value)} className="w-[300px] py-1 rounded-sm">
                        <option value=""></option>
                        <option value="Now">Now</option>
                        <option value="This week">This week</option>
                        <option value="This month">This month</option>
                        <option value="Within the next 3 months">Within the next 3 months</option>
                        <option value="Within the next 6 months">Within the next 6 months</option>
                        <option value="Within the next year">Within the next year</option>
                    </select>
                </form>
                <p className="text-2xl leading-6 font-semibold">Most Cheetah Students Earn a 20k Pay Raise.</p>
                <button>
                    <div className="bg-gray-700 p-2 rounded-sm text-sm font-bold text-white hover:bg-gray-500 transition-all">
                        <p>Download Your FREE Guide For Passing the PMP Exam Cheetah FAST</p>
                    </div>
                </button>
                <p className="text-center text-sm font-medium text-gray-400">{errorText()}</p>
            </div>
        </div>
    </div>
}