import { TechStackGrid } from "@/components/tech-stack-grid";
import { Heading } from "../../components/heading";
import { ProjectsCarousel } from "../../components/projects-carousel";
import { SwipeAnnotation } from "../../components/swipe-annotation";
import { Separator } from "@/components/ui/separator";


export default function Home() {
	return (
		<section
			className="
				flex flex-col items-center justify-center
				w-full max-w-[1120px] gap-16 px-4 py-16
			"
		>
			<Heading />
			<ProjectsCarousel />
			<SwipeAnnotation />

			<Separator />

			<TechStackGrid />
		</section>
	);
}
