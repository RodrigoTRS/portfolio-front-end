"use client"

import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { Loader } from "../loader";
import { FormErrorMessage } from "../form-error-message";
import { toast } from "../ui/use-toast";
import { ToastAction } from "../ui/toast";

const contactFormSchema = z.object({
    name: z.string().min(3, { message: "Your name must be at least 3 characters long."}),
    email: z.string().email({ message: "You must provide a valid e-mail address."}),
    message: z.string()
})

type ContactFormData = z.infer<typeof contactFormSchema>

interface ContactFormProps {
    closeModalFn: () => void
}

export function ContactForm({ closeModalFn }: ContactFormProps) {

    const {
        reset,
        register,
        handleSubmit,
        formState: {
            errors,
            isSubmitting
        }
    } = useForm<ContactFormData>({
        resolver: zodResolver(contactFormSchema)
    });

    function handleContact(data: ContactFormData) {
        console.log(data);
        closeModalFn();
        toast({
            title: "I'll get in touch soon...",
            description: "While you wait, why don't you take a look on my projects?",
            action: <ToastAction altText="OK">OK</ToastAction>
        })
        reset()
    }

    function promisifiedHandleContact(data: ContactFormData) {
        return new Promise<void>((resolve, reject) => {
            setTimeout(() => {
                handleContact(data)
                resolve();
            }, 3000)}
        )
    }

    return (
        <form
            onSubmit={handleSubmit(promisifiedHandleContact)}
            className="flex flex-col gap-4"
        >
            <div className="flex flex-col gap-1">
                <Label htmlFor="name">Name</Label>
                <Input
                    id="name"
                    type="text"
                    placeholder="John Doe"
                    {...register("name")}
                />
                {errors.name?.message && <FormErrorMessage error={errors.name.message} />}
            </div>

            <div className="flex flex-col gap-1">
                <Label htmlFor="email">E-mail</Label>
                <Input
                    id="email"
                    type="email"
                    placeholder="john.doe@mail.com"
                    {...register("email")}
                />
                {errors.email?.message && <FormErrorMessage error={errors.email.message} />}

            </div>

            <div className="flex flex-col gap-1">
                <Label htmlFor="message">Message</Label>
                <Textarea
                    id="message"
                    placeholder="Your message.."
                    className="h-[180px] resize-none"
                    {...register("message")}
                />
            </div>

            <Button
                type="submit"
            >
                {isSubmitting ? <Loader color="white"/> : "Submit"}
            </Button>
        </form>
    )
}