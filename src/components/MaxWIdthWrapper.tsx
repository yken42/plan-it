import { ReactNode } from "react";
import { cn } from "@/lib/utils";

const MaxWidthWrapper = ({className, children}: {className?: string, children: ReactNode}) => {
    return (
    <div className={cn("mx-auto w-full px-2.5 bg-[#F0F0FE]", className)}>
        {children}
    </div>
    )
}

export default MaxWidthWrapper;