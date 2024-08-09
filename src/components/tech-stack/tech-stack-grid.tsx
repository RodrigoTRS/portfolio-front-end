import { TechItem } from "./tech-item"
import { SiNodedotjs, SiTypescript, SiPostgresql, SiJavascript } from "react-icons/si";
import { RiReactjsLine, RiNextjsFill } from "react-icons/ri";
import { FaGolang } from "react-icons/fa6";
import { FaAws } from "react-icons/fa";

const iconArray = [
	{ 
		icon: SiJavascript,
		description: "Javascript"
	},
	{ 
		icon: SiNodedotjs,
		description: "Node.js"
	},
	{ 
		icon: RiReactjsLine,
		description: "React.js"
	},
	{ 
		icon: RiNextjsFill,
		description: "Nextjs"
	},
	{ 
		icon: SiTypescript,
		description: "Typescript"
	},
	{ 
		icon: FaGolang,
		description: "Go"
	},
	{ 
		icon: FaAws,
		description: "AWS"
	},
	{ 
		icon: SiPostgresql,
		description: "PostgreSQL"
	},
]


export function TechStackGrid() {

	return (
		<section className="flex flex-col w-full items-center gap-8">

			<h2 className="text-3xl font-bold">My main tech stack</h2>

			<div className="relative overflow-hidden w-[4200px] h-[180px] animate-infinite-left">
				<div className="w-[1400px] absolute top-0 left-[0px]">
					<div className="flex items-center justify-between gap-4 p-2 w-full relative">
						{iconArray.map(({ icon, description }, index) => {
							return (
								<TechItem 
								key={index}
								icon={icon}
								description={description}
								/>
							)
						})}
					</div>
				</div>

				<div className="w-[1400px] absolute top-0 left-[1400px]">
					<div className="flex items-center justify-between gap-4 p-2 w-full relative">
						{iconArray.map(({ icon, description }, index) => {
							return (
								<TechItem 
								key={index}
								icon={icon}
								description={description}
								/>
							)
						})}
					</div>
				</div>

				<div className="w-[1400px] absolute top-0 left-[2800px]">
					<div className="flex items-center justify-between gap-4 p-2 w-full relative">
						{iconArray.map(({ icon, description }, index) => {
							return (
								<TechItem 
								key={index}
								icon={icon}
								description={description}
								/>
							)
						})}
					</div>
				</div>
			</div>
		</section>
	);
}
