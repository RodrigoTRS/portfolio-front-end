import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { ProjectItem } from "./project-item";
import { listProjects } from "@/actions/fetch-projects";
import { Project } from "@/models/Project";
import { Skeleton } from "./ui/skeleton";

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

export async function LoadingProjectsCarousel() {

  return (
    <Carousel
    className="w-[280px] md:w-[640px] lg:w-[920px] relative"
      opts={{
        align: "start",
        loop: true
      }}
    >
      <CarouselContent>

      <CarouselItem className="basis:1 lg:basis-1/2 cursor-grab active:cursor-grabbing">
        <Skeleton className="w-full h-[500px]" />
      </CarouselItem>

      <CarouselItem className="basis:1 lg:basis-1/2 cursor-grab active:cursor-grabbing">
        <Skeleton className="w-full h-[500px]" />
      </CarouselItem>
        
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
