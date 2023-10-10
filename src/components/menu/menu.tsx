import { Button } from "@/components/ui/button";
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCopyright } from "@fortawesome/free-solid-svg-icons";
// import { faTwitter, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import Link from "next/link";
import { Separator } from "@/components/ui/separator";


import { ThemeButton } from "@/components/theme/theme-button";
import { ScrollArea } from "../ui/scroll-area";

const DesktopMenu = () => {
    return (
        <div className="grid grid-flow-row grid-cols-6 gap-4 items-center justify-items-end">
            <div className="col-span-2">

            </div>
            <div className="col-span-1">

            </div>
            <div className="col-span-1">

            </div>
            <div className="col-span-2">
                <div className="flex justify-center items-center space-x-4">
                    <Link href={"/create-event"}>
                        <Button variant={"default"} className="w-full"><p className="text-bold text-base">Create event now!</p></Button>
                    </Link>
                    <ThemeButton />
                </div>
            </div>
        </div>
    )
}

const MobileMenu = () => {
    //Time
    const currentTime = new Date();
    const currentHour = currentTime.getHours();
    let greeting = "";

    if (currentHour < 12) {
        greeting = "🌞 GM";
    } else if (currentHour < 18) {
        greeting = "🌇 Good afternoon";
    } else {
        greeting = "🌃 Good evening";
    }

    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button variant={"default"} size={"icon"}>
                    <FontAwesomeIcon className="w-[1.2rem] h-[1.2rem]" icon={faBars} />
                </Button>
            </SheetTrigger>
            <SheetContent className="w-11/12 md:w-[540px]">
                <SheetHeader className="text-left">
                    <SheetTitle><p className="text-2xl font-extrabold tracking-tighter lg:text-4xl text-primary underline shadow-transparent drop-shadow-md">SolTix</p></SheetTitle>
                    <SheetDescription >
                        <div className="grid grid-flow-row grid-cols-12">

                            <div className="col-span-9 text-foreground font-normal font-serif text-justify text-base">
                                {greeting}. 👋
                            </div>
                            <Separator orientation="vertical" className="ms-4" />
                            <div className="col-span-2 flex justify-center">
                                <ThemeButton />
                            </div>
                        </div>
                        <Separator className="my-4" />
                    </SheetDescription>
                </SheetHeader>
                <ScrollArea className="h-max w-full">
                    <div className="w-full">
                        <div id="Link-section-1" className="flex flex-col space-y-2">
                            <Link href={"/profile"}>
                                <p className="text-base font-semibold text-foreground">Profile ~ <em className="text-muted-foreground text-xs font-serif">Your wallet profile information</em></p>
                            </Link>
                            <Link href={"/document"}>
                                <p className="text-base font-semibold text-foreground">Document ~ <em className="text-muted-foreground text-xs font-serif">Document about SolTix platform</em></p>
                            </Link>
                            <Link href={"/create-event"}>
                                <p className="text-base font-semibold text-foreground">Create Event ~ <em className="text-muted-foreground text-xs font-serif">You can create event here</em></p>
                            </Link>
                            <Link href={"/manage-event"}>
                                <p className="text-base font-semibold text-foreground">Manage Event ~ <em className="text-muted-foreground text-xs whitespace-nowrap font-serif">Manage your event&apos;s infor</em></p>
                            </Link>

                        </div>
                        <Separator className="my-2 w-9/12" />
                        {/* <ContactDropDownMenu /> */}
                        <Separator className="my-4" />
                        <div className="fixed bottom-5 flex flex-row space-x-2 items-center">
                            <Link href={"https://luvnft.com/"} className="text-muted-foreground whitespace-nowrap" target="_blank">
                                LUV NFT SolTix - <FontAwesomeIcon className="w-[16px] h-[16px] text-foreground" icon={faCopyright} /> - 2023</Link>
                        </div>
                    </div>
                </ScrollArea>

                <SheetFooter>
                    <SheetClose asChild>
                        <p className="text-base text-foreground font-normal font-serif text-left">
                            💕 <em className="italic">I hope you are happy today</em> 😊.
                        </p>
                    </SheetClose>
                </SheetFooter>
            </SheetContent>
        </Sheet>
    )
}

export { DesktopMenu, MobileMenu }