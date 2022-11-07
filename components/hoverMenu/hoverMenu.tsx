import HoverMenuItem from "./hoverMenuItem"
import HoverMenuType from "./hoverMenuType"

type HoverMenuProps = {
    title: string
    type: HoverMenuType
    content: JSX.Element
}

const HoverMenu = ({ props }: { props: HoverMenuProps }) => {
    const { title, type, content } = props

    const titleClass = () => {
        switch (type) {
            case HoverMenuType.header: return "headerItemGroup"
            case HoverMenuType.action: return ""
            case HoverMenuType.sub: return ""
        }
    }

    return <>
        <div className="grid place-items-center ">
            <div className="group h-min place-items-center">
                <div className="flex space-x-2 items-center cursor-pointer">
                    <h3 className={titleClass()}>{title}</h3>
                    <svg className={`${titleClass()} h-6 w-6`} aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                </div>
                <ul className="z-50 w-fit max-w-[500px] mx-auto absolute invisible opacity-0 group-hover:opacity-100 scale-[.8] group-hover:scale-100 group-hover:visible transition-all duration-75">
                    <div className="h-1 bg-transparent"></div>
                    <div className="overflow-y-scroll max-h-[75vh] border-t-8 border-t-acc rounded-md bg-bg shadow-xl space-y-4">
                        {content}
                    </div>
                </ul>
            </div>
        </div>

    </>
}

export default HoverMenu