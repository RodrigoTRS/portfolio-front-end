import { Pointer } from "lucide-react";

export function SwipeAnnotation() {
    return (
        <span className="flex items-center gap-4">
            <div className="w-10 h-10 flex items-center justify-center rounded-md bg-card border relative">
                <Pointer className="w-5 h-5 text-muted-foreground"/>
                <span className="animate-pulse w-4 h-4 bg-primary/50 rounded-full absolute top-[-4px] right-[-4px]">
                    <span className="w-2 h-2 bg-primary rounded-full absolute top-[4px] right-[4px]" />
                </span>
            </div>
            <p className="text-muted-foreground font-medium">Swipe to view more projects</p>
        </span>
    )
}