interface HeadingProps {
	title: string
	paragraph: string
}

export function Heading({
	title,
	paragraph
}: HeadingProps) {
	return (
		<div
			className="w-full max-w-[640px] flex flex-col items-center justify-center gap-2"
		>
			<h1 className="text-2xl lg:text-3xl font-bold text-center">
                {title}
			</h1>
			<p className="text-md font-medium text-muted-foreground text-center">
				{paragraph}
			</p>
		</div>
	);
}