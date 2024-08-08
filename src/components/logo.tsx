import { Layers } from "lucide-react";
import Link from "next/link";

export function Logo() {
    return (
        <Link href="/"
            className="text-lg font-medium hover:opacity-70"
        >
            <span className="flex items-center gap-2">
                <Layers className="text-primary"/>
                <span>RT Portfolio</span>
            </span>
        </Link>
    )
}