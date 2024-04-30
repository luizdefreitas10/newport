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

import { useEffect, useState } from "react";
import { SunIcon } from "../SunIcon/SunIcon";
import { MoonIcon } from "../MoonIcon/MoonIcon";
import { Karla } from "next/font/google";
import { useTheme } from "next-themes";

const karla = Karla({ subsets: ["latin"] });

export default function Header() {
  const { theme, setTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    console.log(theme);
  }, [theme]);

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
      className="h-[93px] bg-[#f8f8f8] dark:bg-[#222223] w-screen flex justify-between shadow-lg dark:shadow-sm shadow-[#eeeeef] dark:shadow-black"
      position="static"
      classNames={{
        base: "bg-black",
        wrapper: "justify-center md:justify-around",
      }}
    >
      <NavbarMenuToggle
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        className="absolute left-12 md:hidden justify-start bg-transparent text-black dark:text-white mx-2"
      />

      <NavbarMenu className="mt-7">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              color={theme === "light" ? "primary" : "foreground"}
              href={`#${item}`}
              size="lg"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
        <Switch
          className="md:hidden"
          defaultSelected
          size="lg"
          color="primary"
          startContent={<SunIcon />}
          endContent={<MoonIcon />}
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        />
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
          <Link href="#início" className="dark:text-[#e8e8e9]">
            início
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#sobre" className="dark:text-[#e8e8e9]">
            sobre
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#tecnologias" className="dark:text-[#e8e8e9]">
            tecnologias
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#experiência" className="dark:text-[#e8e8e9]">
            experiência
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#projetos" className="dark:text-[#e8e8e9]">
            projetos
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#contato" className="dark:text-[#e8e8e9]">
            contato
          </Link>
        </NavbarItem>
        <Switch
          defaultSelected
          size="lg"
          color="primary"
          startContent={<SunIcon />}
          endContent={<MoonIcon />}
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        />
      </NavbarContent>
    </Navbar>
  );
}
