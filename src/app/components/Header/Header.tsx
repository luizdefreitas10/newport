"use client";

import {
  Link,
  Navbar,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
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

  const menuItems = [
    "início",
    "sobre",
    "tecnologias",
    "projetos",
    "experiência",
    "contato",
  ];

  return (
    <Navbar
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      maxWidth="full"
      className="h-[93px] bg-[#f8f8f8] w-screen flex justify-between shadow-lg shadow-[#eeeeef]"
      position="static"
      classNames={{
        base: "bg-black",
        wrapper: "justify-center md:justify-around",
      }}
    >
      <NavbarMenuToggle
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        className="absolute left-12 md:hidden justify-start bg-transparent text-black mx-2"
      />

      <NavbarMenu className="mt-7">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              color={"primary"}
              href={`#${item}`}
              size="lg"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>

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
          <Link href="#início">início</Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#sobre">sobre</Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#tecnologias">tecnologias</Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#experiência">experiência</Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#projetos">projetos</Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#contato">contato</Link>
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
