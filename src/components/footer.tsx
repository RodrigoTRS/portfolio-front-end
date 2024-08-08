import { SocialMedia } from "./social-media";

export function Footer() {
    return (
        <footer className="w-full flex items-center justify-center bg-background border-t px-4 py-16 mt-8">
            <div className="flex flex-col items-center gap-4 w-full max-w-[1120px]">
                <span className="text-sm font-medium">
                    Made with ❤️ by Rodrigo Teixeira
                </span>
                <SocialMedia />
            </div>
        </footer>
    )
}