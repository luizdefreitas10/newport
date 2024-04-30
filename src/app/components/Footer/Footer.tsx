import { useTheme } from "next-themes";
import { Kalam, Karla } from "next/font/google";
import { useEffect, useState } from "react";

const karla = Karla({ subsets: ["latin"] });

export default function Footer() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null;

  return (
    <footer
      className={`flex justify-center items-center h-[60px] w-full ${theme === "light" ? "bg-gradient-to-br from-blue-500 to-blue-700" : "bg-[#222223]"} `}
    >
      <h1 className={`${karla.className} text-[18px] text-white`}>
        © 2024 Copyright: Luiz de Freitas
      </h1>
    </footer>
  );
}
