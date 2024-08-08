import { IconType } from "react-icons/lib";
import { Card } from "./ui/card";

interface TechItemProps {
    icon: IconType,
    description: string
}

export function TechItem({ icon: Icon, description }: TechItemProps) {
    return (
        <Card className="flex flex-col items-center justify-center pt-8 pb-6 gap-2 cursor-pointer duration-500 ease-in-out hover:scale-105 hover:animate-pulse">
            <Icon className="w-10 h-10 text-primary"/>
            <span className="text-lg font-medium">
                {description}
            </span>
        </Card>
    )
}