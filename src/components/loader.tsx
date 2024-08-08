import clsx from "clsx"
import { LoaderCircle } from "lucide-react"

interface LoaderProps {
    color: "white" | "primary" | "dark"
}

export function Loader({ color }: LoaderProps) {
    return (
        <LoaderCircle className={clsx(
            "w-5 h-5 animate-spin",
            color === "white" && "text-white",
            color === "primary" && "text-primary",
            color === "dark" && "text-black",
        )}/>
    )
}