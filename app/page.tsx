import getClasses from "../lib/apiRoutes/getClasses"

export default async function Index() {
    const result = await getClasses()
    console.log(result)
    return <div className="h-[5000px] bg-red-300 w-8"></div>
}