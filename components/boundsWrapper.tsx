import React from "react"

const BoundsWrapper = ({ children, className }: { children: React.ReactNode, className?: string }) => {
    return <div className={`flex items-center justify-center ${className}`}>
        <div className="max-w-[1200px] mx-4 lg:mx-20 md:mx-10 w-screen">
            {children}
        </div>
    </div>
}

export default BoundsWrapper