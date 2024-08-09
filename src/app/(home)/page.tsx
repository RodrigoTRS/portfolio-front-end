import { TechStackGrid } from "@/components/tech-stack/tech-stack-grid";
import { Heading } from "../../components/heading";
import { ProjectsCarousel } from "../../components/project-carousel/projects-carousel";
import { SwipeAnnotation } from "../../components/swipe-annotation";
import { Separator } from "@/components/ui/separator";


export default function Home() {
	return (
		<section className="flex flex-col items-center justify-center w-full gap-16 py-16">
						
			<Heading
				title="Welcome to my portfolio!"
				paragraph="Hi! 👋🏻 I am Rodrigo Teixeira, a full stack developer from Brazil."
			/>

			<ProjectsCarousel />

			<SwipeAnnotation />

			<Separator />

			<TechStackGrid />
			
		</section>
	);
}
