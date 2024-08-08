import { ContactModal } from "./contact-modal";
import { DropdownMenu } from "./dropdown-menu";
import { Logo } from "./logo";
import { ModeToggle } from "./mode-toggle";

export function Header() {
    return (
        <header className="w-full flex align-center justify-center bg-background border-b border-muted p-4">
            <div className="flex justify-between items-center w-full max-w-[1120px]">
                <Logo />
                <nav className="flex items-center gap-2">
                    <ContactModal />
                    <ModeToggle />
                    <DropdownMenu />
                </nav>
            </div>
        </header>
    )
}