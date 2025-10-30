import Link from "next/link"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
} from "@/components/ui/navigation-menu"


export default function Topnav() {
    return (
        <div className="bg-blue-800">
        <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem className="text-xs text-white flex justify-end">
                    <NavigationMenuTrigger className="bg-blue-800">Activities</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <NavigationMenuLink >Link</NavigationMenuLink>
                    </NavigationMenuContent>
                    <NavigationMenuTrigger className="bg-blue-800">Notice</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <NavigationMenuLink>Link</NavigationMenuLink>
                    </NavigationMenuContent>
                    <NavigationMenuTrigger className="bg-blue-800">Alumni</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <NavigationMenuLink>Link</NavigationMenuLink>
                    </NavigationMenuContent>
                    <NavigationMenuTrigger className="bg-blue-800">Approval/Accreditation</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <NavigationMenuLink>Link</NavigationMenuLink>
                    </NavigationMenuContent>
                    <NavigationMenuTrigger className="bg-blue-800">IQAC</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <NavigationMenuLink>Link</NavigationMenuLink>
                    </NavigationMenuContent>
                    <NavigationMenuTrigger className="bg-blue-800">Feedback</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <NavigationMenuLink>Link</NavigationMenuLink>
                    </NavigationMenuContent>
                    <NavigationMenuTrigger className="bg-blue-800">Gallery</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <NavigationMenuLink>Link</NavigationMenuLink>
                    </NavigationMenuContent>
                    <NavigationMenuTrigger className="bg-blue-800">Disclosure</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <NavigationMenuLink>Link</NavigationMenuLink>
                    </NavigationMenuContent>
                    <NavigationMenuTrigger className="bg-blue-800">Collaboration</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <NavigationMenuLink>Link</NavigationMenuLink>
                    </NavigationMenuContent>
                    <NavigationMenuTrigger className="bg-blue-800">Downloads</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <NavigationMenuLink>Link</NavigationMenuLink>
                    </NavigationMenuContent>
                    <NavigationMenuTrigger className="bg-blue-800">Employee Corner</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <NavigationMenuLink>Link</NavigationMenuLink>
                    </NavigationMenuContent>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
        </div>
    );
}