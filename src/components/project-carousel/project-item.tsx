"use client"

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { CarouselItem } from "@/components/ui/carousel";
import { useRouter } from "next/navigation";
import { Project } from "@/models/Project";
import Link from "next/link";

interface ProjectItemProps {
    project: Project
}

export function ProjectItem({
    project
}: ProjectItemProps) {

    const router = useRouter()

    const {
        title,
        description,
        demoUrl,
        repositoryUrl,
        imageUrl
    } = project

    return (
        <CarouselItem className="basis:1 lg:basis-1/2 cursor-grab active:cursor-grabbing">
            <article className="flex flex-col items-center justify-end w-full bg-muted rounded-md border">
                <Link href={demoUrl!} target="_blank">
                    <Image
                        src={imageUrl}
                        width={600}
                        height={400}
                        alt="Background image"
                        className="rounded-tl-md rounded-tr-md select-none active:cursor-grabbing"
                        priority
                    />
                </Link>

                <div className="flex w-full min-h-[240px] flex-col items-start justify-between p-4 md:p-6 lg:p-8 rounded-bl-md rounded-br-md bg-card border border-muted gap-2">
                    <div className="flex flex-col gap-2">
                        <h2 className="text-xl font-semibold">
                            {title}
                        </h2>
                        <p className="text-md font-medium text-muted-foreground">
                            {description}
                        </p>
                    </div>
                    <div className="flex items-center justify-start gap-2">
                        {demoUrl &&
                            <Button asChild>
                                <Link href={demoUrl} target="_blank">
                                    Access demo
                                </Link>
                            </Button>
                        }
                        {repositoryUrl &&
                            <Button variant="outline" asChild>
                                <Link href={repositoryUrl} target="_blank">
                                    Repository
                                </Link>
                            </Button>
                        }
                    </div>
                </div>
            </article>
        </CarouselItem>
    )
}