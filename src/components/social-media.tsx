"use client"

import { Button } from "./ui/button";
import { Github, Linkedin } from "lucide-react";
import { config } from "@/config";
import Link from "next/link";

export function SocialMedia() {

    return (
        <div className="flex items-center justify-center gap-2">

            <Link href={config.githubUrl} target="_blank" >
                <Button
                    variant="default"
                    size="icon"
                    aria-label="Access my github"
                >
                    <Github className="w-5 h-5" />
                </Button>
            </Link>

            <Link href={config.linkedinUrl} target="_blank" >
                <Button
                    variant="default"
                    size="icon"
                    aria-label="Access my linkedin"
                >
                    <Linkedin className="w-5 h-5" />
                </Button>
            </Link>

        </div>
    )
}