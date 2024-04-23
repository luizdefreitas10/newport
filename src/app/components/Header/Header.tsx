"use client";

import {
  Link,
  Navbar,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  Switch,
} from "@nextui-org/react";
import Image from "next/image";

import { useState } from "react";
import { SunIcon } from "../SunIcon/SunIcon";
import { MoonIcon } from "../MoonIcon/MoonIcon";
import { Karla } from "next/font/google";

const karla = Karla({ subsets: ["latin"] });

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      maxWidth="full"
      className="h-[93px] bg-[#f8f8f8] w-screen flex justify-between shadow-lg shadow-[#eeeeef]"
      position="static"
      classNames={{
        wrapper: "justify-center md:justify-around",
      }}
    >
      <NavbarMenuToggle
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        className="miniMobile:absolute miniMobile:left-12 md:hidden justify-start bg-transparent text-white mx-2"
      />

      <NavbarContent justify="center" className="flex">
        <Link href="/" className="mx-auto ">
          <h1 className={`font-tacOne font-bold text-[38px]`}>{`//`}</h1>
        </Link>
      </NavbarContent>

      <NavbarContent
        className="hidden md:flex gap-8 text-[#a0acf4]"
        justify="center"
      >
        <NavbarItem>
          <Link href="/">início</Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/about">sobre</Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/missions">tecnologias</Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/teams">experiência</Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/ranking">projetos</Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/faq">contato</Link>
        </NavbarItem>
        <Switch
          defaultSelected
          size="lg"
          color="primary"
          startContent={<SunIcon />}
          endContent={<MoonIcon />}
        />
      </NavbarContent>
    </Navbar>
  );
}
