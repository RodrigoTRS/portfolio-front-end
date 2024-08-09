import { Heading } from "@/components/heading";
import { LoadingProjectsCarousel } from "../../components/project-carousel/projects-carousel";
import { SwipeAnnotation } from "@/components/swipe-annotation";

export default function Loading() {
    return (
        <section className="flex flex-col items-center justify-center w-full max-w-[1120px] gap-16 px-4 py-16">

			<Heading
				title="Welcome to my portfolio!"
				paragraph="Hi! 👋🏻 I am Rodrigo Teixeira, a full stack developer from Brazil."
			/>

            <LoadingProjectsCarousel />

            <SwipeAnnotation />


        </section>
    )
}