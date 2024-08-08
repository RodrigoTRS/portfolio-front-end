"use client"

import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";
import { DialogDescription } from "@radix-ui/react-dialog";
import { Separator } from "../ui/separator";
import { ContactForm } from "./contact-form";
import { useState } from "react";


export function ContactModal() {
    const [isOpen, setIsOpen] = useState(false)

    function toggleOpen() {
        setIsOpen((state) => !state)
    }

    function closeModal() {
        if (isOpen) {
            setIsOpen(false)
        }
    }

    return (
        <Dialog
            open={isOpen}
            onOpenChange={toggleOpen}
        >

            <DialogTrigger asChild>
                <Button>Get in touch</Button>
            </DialogTrigger>

            <DialogContent className="max-w-[400px] border border-muted">

                <DialogHeader>
                    <DialogTitle>Let's chat?</DialogTitle>
                    <DialogDescription>Fill in this form to get in touch with me</DialogDescription>
                </DialogHeader>

                <Separator />

                <ContactForm closeModalFn={closeModal}/>

            </DialogContent>

        </Dialog>
    )
}

