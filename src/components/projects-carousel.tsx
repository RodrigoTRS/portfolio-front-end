import { Carousel, CarouselContent, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { ProjectItem } from "./project-item";
import { listProjects } from "@/actions/fetch-projects";
import { Project } from "@/models/Project";

export async function ProjectsCarousel() {

  const { projects } = await listProjects()

  return (
    <Carousel
    className="w-[280px] md:w-[640px] lg:w-[920px] relative"
      opts={{
        align: "start",
        loop: true
      }}
    >
      <CarouselContent>
        {projects.map((project: Project) => {
          return (
            <ProjectItem
              key={project._id}
              project={project}
            />
          )
        })}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
