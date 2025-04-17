"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { HiOutlineMenu } from "react-icons/hi";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import MyLogo from "@/assets/logo.svg";

const Navbar = () => {
  const { toast } = useToast();

  return (
    <header className="relative z-50 flex w-full justify-center bg-background">
      <div className="fixed top-4 flex justify-center">
        <NavigationMenu className="hidden h-16 items-center justify-between rounded-full p-4 text-primary-foreground backdrop-blur sm:flex">
          <NavigationMenuList className="gap-8">
            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink>
                  <MyLogo className="h-10 w-10 fill-primary-foreground" />
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="#projects" legacyBehavior passHref>
                <NavigationMenuLink className="hover-line text-base font-medium">
                  Projects
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="#experience" legacyBehavior passHref>
                <NavigationMenuLink className="hover-line text-base font-medium">
                  Experience
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            {/* <NavigationMenuItem>
              <Link href="/blog" legacyBehavior passHref>
                <NavigationMenuLink className="hover-line text-base font-medium">
                  Blog
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem> */}

            <NavigationMenuItem>
              <a
                href="https://merch.rahulgajbhiye.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover-line text-base font-medium"
              >
                Merch
              </a>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Button
                onClick={() => {
                  navigator.clipboard.writeText("rahulgajbhiye201@gmail.com");
                  toast({
                    description: "Email copied to clipboard.",
                  });
                }}
                className="rounded-full text-base font-medium text-white"
              >
                Let's Talk
              </Button>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <DropdownMenu>
          <DropdownMenuTrigger className="sm:hidden">
            <HiOutlineMenu className="size-8" />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="flex items-center bg-none p-1 text-primary-foreground backdrop-blur sm:hidden">
            {/* <DropdownMenuItem>
              <Link href="/blog" legacyBehavior passHref>
                Blog
              </Link>
            </DropdownMenuItem> */}
            <DropdownMenuItem>
              <a
                href="https://merch.rahulgajbhiye.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Merch
              </a>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <a
                href="mailto:rahulgajbhiye201@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="rounded-full text-base text-white">
                  Let's Talk
                </Button>
              </a>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};

export default Navbar;
