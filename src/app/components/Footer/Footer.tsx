import { Kalam, Karla } from "next/font/google";

const karla = Karla({ subsets: ["latin"] });

export default function Footer() {
  return (
    <footer className="flex justify-center items-center h-[60px] w-full bg-gradient-to-br from-blue-500 to-blue-700">
      <h1 className={`${karla.className} text-[18px] text-white`}>
        © 2024 Copyright: Luiz de Freitas
      </h1>
    </footer>
  );
}
