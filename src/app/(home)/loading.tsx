import { Heading } from "@/components/heading";
import { LoadingProjectsCarousel } from "@/components/projects-carousel";
import { SwipeAnnotation } from "@/components/swipe-annotation";
import { TechStackGrid } from "@/components/tech-stack-grid";
import { Separator } from "@/components/ui/separator";

export default function Loading() {
    return (
        <section className="flex flex-col items-center justify-center w-full max-w-[1120px] gap-16 px-4 py-16">
			<Heading
				title="Rodrigo Teixeira's Personal Portfolio"
				paragraph="Hi! 👋🏻 My name is Rodrigo Teixeira and I'm a full stack developer from Brazil. Here you can find my portfolio projects and my resume, if you're intereseted in anything, feel free to get in touch!"
			/>
            <LoadingProjectsCarousel />
            <SwipeAnnotation />


        </section>
    )
}