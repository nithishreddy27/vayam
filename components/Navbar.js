import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
// import Link from "next/link";
import { Menu, ChevronDown } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Navbar() {
  const router = useRouter();

  // return (
  // <div
  //   className=" flex justify-between px-5 w-[98%] text-white fixed pt-10 z-50 "
  //   style={{
  //     fontFamily: "Futura LT W01 Medium",
  //   }}
  // >
  //   <div className="w-[60%] ">
  //     <img src="/l.png" className="h-[30px] " />
  //   </div>
  //   <div className="flex w-[50%] justify-end">
  //     <Link href={"/"} className={``}>
  //       <span
  //         className={`border mx-1 px-5 py-2  hover:bg-black hover:text-white tracking-widest font-semibold ${
  //           router.pathname == "/"
  //             ? "bg-black text-white"
  //             : "bg-white text-black"
  //         }`}
  //       >
  //         {" "}
  //         Home
  //       </span>
  //     </Link>
  //     <Link href={"/about"}>
  //       <span
  //         className={`border mx-1 px-5 py-2  hover:bg-black hover:text-white  tracking-widest font-semibold ${
  //           router.pathname == "/about"
  //             ? "bg-black text-white"
  //             : "bg-white text-black"
  //         }`}
  //       >
  //         {" "}
  //         About Us
  //       </span>
  //     </Link>
  //     <Link href={"/services"}>
  //       <span
  //         className={`border mx-1 px-5 py-2  hover:bg-black hover:text-white tracking-widest font-semibold ${
  //           router.pathname == "/services"
  //             ? "bg-black text-white"
  //             : "bg-white text-black"
  //         }`}
  //       >
  //         {" "}
  //         Our Services
  //       </span>
  //     </Link>
  //     <Link href={"/works"}>
  //       <span
  //         className={`border mx-1 px-5 py-2  font-semibold hover:bg-black tracking-widest hover:text-white ${
  //           router.pathname == "/works"
  //             ? "bg-black text-white"
  //             : "bg-white text-black"
  //         }`}
  //       >
  //         {" "}
  //         Our Works
  //       </span>
  //     </Link>
  //     <Link href={"/contact"}>
  //       <span
  //         className={`border mx-1 px-5 py-2   hover:bg-black hover:text-white tracking-widest font-semibold ${
  //           router.pathname == "/contact"
  //             ? "bg-black text-white"
  //             : "bg-white text-black"
  //         }`}
  //       >
  //         {" "}
  //         Contact Us
  //       </span>
  //     </Link>
  //   </div>
  //   <style jsx>{``}</style>
  // </div>

  const MenuItems = ({ isMobile = false }) => (
    <>
      <Link
        href="/"
        className={`text-sm border mx-1 px-5 py-2 tracking-widest  font-semibold  ${
          router.pathname == "/"
            ? `bg-black text-white`
            : `bg-white text-black hover:bg-black hover:text-white`
        } `}
      >
        Home
      </Link>
      <Link
        href="/about"
        className={`text-sm border mx-1 px-5 py-2 tracking-widest  font-semibold  ${
          router.pathname == "/about"
            ? `bg-black text-white`
            : `bg-white text-black hover:bg-black hover:text-white`
        } `}
      >
        About Us
      </Link>
      <Link
        href="/services"
        className={`text-sm border mx-1 px-5 py-2 tracking-widest  font-semibold  ${
          router.pathname == "/services"
            ? `bg-black text-white`
            : `bg-white text-black hover:bg-black hover:text-white`
        } `}
      >
        Services
      </Link>
      <Link
        href="/works"
        className={`text-sm border mx-1 px-5 py-2 tracking-widest  font-semibold  ${
          router.pathname == "/works"
            ? `bg-black text-white`
            : `bg-white text-black hover:bg-black hover:text-white`
        } `}
      >
        Works
      </Link>
      <Link
        href="/contact"
        className={`text-sm border  mx-1 px-5 py-2 tracking-widest  font-semibold  ${
          router.pathname == "/contact"
            ? `bg-black text-white`
            : `bg-white text-black hover:bg-black hover:text-white`
        } `}
      >
        Contact
      </Link>
    </>
  );

  return (
    <nav
      className="flex items-center fixed top-0 w-full z-50 justify-between p-4 bg-black"
      style={{
        fontFamily: "Futura LT W01 Medium",
      }}
    >
      <div className="flex items-center">
        <Link href="/" className="text-4xl font-bold">
          <img src="/l.png" className="h-[50px] " />
        </Link>
      </div>
      <div className="hidden md:flex items-center space-x-4">
        <MenuItems />
      </div>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="" size="icon" className="md:hidden">
            <Menu className="h-6 w-6" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-[300px] sm:w-[400px] bg-white">
          <nav className="flex flex-col space-y-4 mt-4">
            <MenuItems isMobile={true} />
          </nav>
        </SheetContent>
      </Sheet>
    </nav>
  );
  // );
}
