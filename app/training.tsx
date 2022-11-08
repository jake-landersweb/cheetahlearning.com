export default function Training() {

    const cell = (title1: string, title2: string, desc: string) => {
        return <div className="space-y-2">
            <div className="">
                <p className="text-xl font-bold">{title1}</p>
                <h4 className="text-main text-4xl font-bold">{title2}</h4>
            </div>
            <p className="font-medium">{desc}</p>
        </div>
    }

    return <div className="grid md:grid-cols-2 place-items-center gap-4">
        <div className="space-y-4">
            {cell("ACCELERATED LEARNING USING", "RAPID SYNTHESIS TECHNIQUES", "Enhance your ability to synthesize theoretical concepts and practical experience so you can confidently deduce the correct answers to complex questions.")}
            {cell("IMPROVE YOUR CONFIDENCE WITH", "INSTANT RECALL MNEMONICS", "You’ll be surprised at how easily you can memorize a large quantity of Project Management terminology in a short amount of time.")}
            {cell("LINKAGE LEARNING,", "IMPROVE SHORT AND LONG TERM RETENTION", "Discover ways in which you learn best through drawings, mind maps and writing which allow your brain to create linkages for fast retrieval.")}
            {cell("LONG-TERM RETENTION WITH A", "PEAK PERFORMING MIND", "Adopt lifestyle changes, change behaviors and use basic influence strategies.")}
        </div>
        <iframe className="w-full aspect-video" src="https://www.youtube.com/embed/_Oy3X5ZMQdQ" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
    </div>
}