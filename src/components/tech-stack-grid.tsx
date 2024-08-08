import { TechItem } from "./tech-item";

import { SiNodedotjs, SiRedux, SiExpress, SiFastify, SiTypescript, SiPostgresql, SiMongodb, SiJavascript } from "react-icons/si";
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
		icon: SiRedux,
		description: "Redux.js"
	},
	{ 
		icon: SiExpress,
		description: "Express.js"
	},
	{ 
		icon: SiFastify,
		description: "Fastify"
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
	{ 
		icon: SiMongodb,
		description: "MongoDB"
	},

]

export function TechStackGrid() {

	return (
		<section id="scroll-container" className="flex flex-col w-full items-center gap-8">
			<h2 className="text-3xl font-bold">My main tech stack</h2>
			<div className="grid grid-cols-4 gap-4 w-full">
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
		</section>
	);
}
