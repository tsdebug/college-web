import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarShortcut,
    MenubarTrigger,
} from "@/components/ui/menubar"
import { Button } from "@/components/ui/button"
import { Facebook, Twitter, Youtube, Instagram, ChevronDown } from "lucide-react";

export default function Topbar() {
    return (
        <div>
            <Menubar className="bg-blue-900 text-white gap-2">
                <MenubarMenu>
                    <MenubarTrigger></MenubarTrigger>
                </MenubarMenu>
                
                <MenubarMenu>
                    <MenubarTrigger className="cursor-pointer">Activities<ChevronDown className="h3 w-3 gap-0.2 ml-2" /></MenubarTrigger>
                    <MenubarContent>
                        <MenubarItem className="cursor-pointer">News</MenubarItem>
                        <MenubarSeparator />
                        <MenubarItem className="cursor-pointer">Events</MenubarItem>
                        <MenubarSeparator />
                        <MenubarItem className="cursor-pointer">NSS Activities</MenubarItem>
                    </MenubarContent>
                </MenubarMenu>


                <MenubarMenu>
                    <MenubarTrigger className="cursor-pointer">Notice</MenubarTrigger>
                </MenubarMenu>

                <MenubarMenu>
                    <MenubarTrigger className="cursor-pointer">Alumni<ChevronDown className="h3 w-3 gap-0.2 ml-2" /></MenubarTrigger>
                    <MenubarContent>
                        <MenubarItem className="cursor-pointer">Alumni</MenubarItem>
                        <MenubarSeparator />
                        <MenubarItem className="cursor-pointer">Alumni Membership Registration</MenubarItem>
                        <MenubarSeparator />
                        <MenubarItem className="cursor-pointer">Alumni Event Registration 2024</MenubarItem>
                    </MenubarContent>
                </MenubarMenu>

                <MenubarMenu>
                    <MenubarTrigger className="cursor-pointer">Approval/Accreditation<ChevronDown className="h3 w-3 gap-0.2 ml-2" /></MenubarTrigger>
                    <MenubarContent>
                        <MenubarItem className="cursor-pointer">AICTE</MenubarItem>
                        <MenubarSeparator />
                        <MenubarItem className="cursor-pointer">MAKAUT</MenubarItem>
                        <MenubarSeparator />
                        <MenubarItem className="cursor-pointer">NBA</MenubarItem>
                        <MenubarSeparator />
                        <MenubarItem className="cursor-pointer">NAAC</MenubarItem>
                        <MenubarSeparator />
                        <MenubarItem className="cursor-pointer">NIRF(Engineering)</MenubarItem>
                    </MenubarContent>
                </MenubarMenu>

                <MenubarMenu>
                    <MenubarTrigger className="cursor-pointer">IQAC<ChevronDown className="h3 w-3 gap-0.2 ml-2" /></MenubarTrigger>
                    <MenubarContent>
                        <MenubarItem className="cursor-pointer">About IQAC</MenubarItem>
                        <MenubarSeparator />
                        <MenubarItem className="cursor-pointer">Composition</MenubarItem>
                        <MenubarSeparator />
                        <MenubarItem className="cursor-pointer">Meetings</MenubarItem>
                        <MenubarSeparator />
                        <MenubarItem className="cursor-pointer">Reports</MenubarItem>
                    </MenubarContent>
                </MenubarMenu>

                <MenubarMenu>
                    <MenubarTrigger className="cursor-pointer">Feedback<ChevronDown className="h3 w-3 gap-0.2 ml-2" /></MenubarTrigger>
                    <MenubarContent>
                        <MenubarItem className="cursor-pointer">Current(2024 Onwards)</MenubarItem>
                        <MenubarSeparator />
                        <MenubarItem className="cursor-pointer">Previous</MenubarItem>
                    </MenubarContent>
                </MenubarMenu>

                <MenubarMenu>
                    <MenubarTrigger className="cursor-pointer">Gallery<ChevronDown className="h3 w-3 gap-0.2 ml-2" /></MenubarTrigger>
                    <MenubarContent>
                        <MenubarItem className="cursor-pointer">Images</MenubarItem>
                        <MenubarSeparator />
                        <MenubarItem className="cursor-pointer">Videos</MenubarItem>
                    </MenubarContent>
                </MenubarMenu>

                <MenubarMenu>
                    <MenubarTrigger className="cursor-pointer">Disclosure</MenubarTrigger>
                </MenubarMenu>

                <MenubarMenu>
                    <MenubarTrigger className="cursor-pointer">Collaborations<ChevronDown className="h3 w-3 gap-0.2 ml-2" /></MenubarTrigger>
                    <MenubarContent>
                        <MenubarItem className="cursor-pointer">Foreign Collaboration</MenubarItem>
                        <MenubarSeparator />
                        <MenubarItem className="cursor-pointer">Corporate Collaboration</MenubarItem>
                    </MenubarContent>
                </MenubarMenu>

                <MenubarMenu>
                    <MenubarTrigger className="cursor-pointer">Downloads<ChevronDown className="h3 w-3 gap-0.2 ml-2" /></MenubarTrigger>
                    <MenubarContent>
                        <MenubarItem className="cursor-pointer">AICTE Approvals</MenubarItem>
                        <MenubarSeparator />
                        <MenubarItem className="cursor-pointer">Other Approvals</MenubarItem>
                    </MenubarContent>
                </MenubarMenu>

                <MenubarMenu>
                    <MenubarTrigger className="cursor-pointer">Employee Corner<ChevronDown className="h3 w-3 gap-0.2 ml-2" /></MenubarTrigger>
                    <MenubarContent>
                        <MenubarItem className="cursor-pointer">Sign Up</MenubarItem>
                        <MenubarSeparator />
                        <MenubarItem className="cursor-pointer">Links/Resources</MenubarItem>
                    </MenubarContent>
                </MenubarMenu>

                {/* Social Icons */}
                <div className="flex space-x-3 ml-11">
                    {[Facebook, Twitter, Youtube, Instagram].map((Icon, index) => (
                        <Button
                            key={index}
                            variant="ghost"
                            size="icon"
                            className="text-white hover:size-7 h-6 w-6 opacity-80  ml-1 transition-all cursor-pointer"
                        >
                            <Icon className="h-7 w-7 opacity-70" />
                        </Button>
                    ))}
                </div>
            </Menubar>
            
        </div>
    );
}