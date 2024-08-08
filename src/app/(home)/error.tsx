"use client"

import { Heading } from "@/components/heading"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Error() {

    return (
        <section className="flex flex-col items-center justify-center w-full max-w-[1120px] gap-8 px-4 py-32">
        <Heading
            title="Ooops! Apparently something went wrong..."
            paragraph="Please come again on the next day or try to access homepage again"
        />
        <Button asChild>
            <Link href="/">
                Go to homepage
            </Link>
        </Button>
    </section>
    )
}