"use client"

import { File, Github, Linkedin, Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { DropdownMenu as DropdownRoot, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem } from "./ui/dropdown-menu";
import { config } from "@/config";
import { useState } from "react";
import Link from "next/link";
import { handleDownload } from "@/utils/download-resume";

export function DropdownMenu() {
    const [isOpen, setIsOpen] = useState(false)

    function toggleOpen() {
        if (isOpen) {
            setIsOpen(false);
        } else {
            setIsOpen(true);
        }
    }

    return (
        <DropdownRoot onOpenChange={toggleOpen}>
            <Trigger isOpen={isOpen} />
            <Content />
        </DropdownRoot>
    )
}

interface TriggerProps {
    isOpen: boolean
}

function Trigger({isOpen}: TriggerProps) {
    return (
        <DropdownMenuTrigger asChild>
            <Button
                variant="outline"
                size="icon"
            >
                {isOpen ? <X /> : <Menu />}
            </Button>
        </DropdownMenuTrigger>
    )
}

function Content() {

    return (
        <DropdownMenuContent
            align="end"
            className="w-[200px]"
        >
            <DropdownMenuLabel>
                Options menu
            </DropdownMenuLabel>

            <DropdownMenuItem
                className="flex items-center gap-4"
                onClick={handleDownload}
            >
                <File className="w-5 h-5 text-muted-foreground" />
                My resume
            </DropdownMenuItem>

            <DropdownMenuSeparator /> 

            <DropdownMenuLabel>
                Social media
            </DropdownMenuLabel>

            <GithubMenuItem />
            <LinkedinMenuItem />

        </DropdownMenuContent>
    )
}

function LinkedinMenuItem() {
    return (
        <DropdownMenuItem>
            <Link
                href={config.linkedinUrl}
                className="flex items-center gap-4"
                target="_blank"
            >
                <Linkedin className="w-5 h-5 text-muted-foreground" />
                Linkedin profile
            </Link>
        </DropdownMenuItem>
    )
}

function GithubMenuItem() {
    return (
        <DropdownMenuItem>
            <Link
                href={config.githubUrl}
                className="flex items-center gap-4"
                target="_blank"
            >
                <Github className="w-5 h-5 text-muted-foreground" />
                Github profile
            </Link>
        </DropdownMenuItem>
    )
}