export function Heading() {
	return (
		<div
			className="w-full max-w-[640px] flex flex-col items-center justify-center gap-2"
		>
			<h1 className="text-2xl lg:text-3xl font-bold text-center">
                Rodrigo Teixeira's Personal Portfolio
			</h1>
			<p
				className="text-md font-medium text-muted-foreground text-center"
			>
                Hi! 👋🏻 My name is Rodrigo Teixeira and I'm a full stack
                developer from Brazil. Here you can find my portfolio
                projects and my resume, if you're intereseted in
                anything, feel free to get in touch!
			</p>
		</div>
	);
}