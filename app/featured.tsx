import styles from './styles.module.css';

export default function Featured() {

    const cell = (title: string, desc: string, link: string, img: string, isLearnMore: boolean = true) => {
        return <div className={`${styles.bgImage} ${img} overflow-clip rounded-md transition-all border border-gray-300`}>
            <div className="bg-white bg-opacity-80 space-y-4 text-center p-4">
                <h4 className="text-xl font-semibold tracking-tight">{title}</h4>
                <p className="text-gray-600">{desc} <a href={link} className="text-main md:hover:opacity-50 transition-all">{isLearnMore ? "Learn More" : "Contact us today."}</a></p>
            </div>
        </div>
    }

    return <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {cell("PROJECT MANAGEMENT PROFESSIONAL (PMP)", "PMPs are critical organizational assets who ensure the success of a project. In a world where 75% of projects fail, the demand for PMPs has seen significant growth. Learn how you can become a PMP in 5 days, 100% Guaranteed.", "https://www.cheetahlearning.com/wp/pmp-exam-prep/", styles.img1)}
        {cell("AGILE CERTIFIED PRACTIONER (PMI-ACP)", "Businesses growth and dynamics are changing faster more now than ever. Improve your skills in versatility and adaptability when you add PMI-ACP to your title.", "https://www.cheetahlearning.com/wp/pmi-acp-agile-certified-practicioner/", styles.img2)}
        {cell("CERTIFIED LEADERSHIP PROGRAM (CLP)", "Have you earned the Project Management Professional or other professional credentials/advanced degrees, but still you’re not getting the recognition, positions, or promotions you deserve?", "https://www.cheetahlearning.com/wp/cheetah-leadership-program/", styles.img3)}
        {cell("CHEETAH CERTIFIED PROJECT MANAGER (CCPM)", "You are unique and the best way for you to learn, complete projects and negotiate is unique as well. When a one size fits all Project Management certification isn’t right for you, become a CCPM and flourish by leveraging your personality.", "https://www.cheetahlearning.com/wp/ccpm-cheetah-certified-project-manager/", styles.img4)}
        {cell("PROFESSIONAL DEVELOPMENT UNITS (PDU)", "Cheetah offers a wide range of PDU courses from personal to professional development. Find a class that fulfills your career and your goals while satisfying PMI®’s new Talent Triangle requirements.", "https://www.cheetahlearning.com/testimonials/TalentTriangle.html", styles.img5)}
        {cell("Questions? WE CAN HELP.", "Call us at (844)800-4767! We can help. Contact a Career Counselor today to discuss the right certification for advancing your career. ", "mailto:info@cheetahlearning.com.", styles.img6, false)}
    </div>
}