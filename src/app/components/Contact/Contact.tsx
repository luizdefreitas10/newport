import { Button, Input, Spinner, Textarea } from "@nextui-org/react";
import { BsFillTelephoneInboundFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { FaAddressCard } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";
import { FaHandshake } from "react-icons/fa";
import { FormEvent, useEffect, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useTheme } from "next-themes";

export default function Contact() {
  const [userName, setUserName] = useState<string>("");
  const [userEmail, setUserEmail] = useState<string>("");
  const [userMessage, setUserMessage] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { theme, setTheme } = useTheme();

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null;

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const goofleFormObject = {
      userName,
      userEmail,
      userMessage,
    };

    setIsLoading(true);

    const rawResponse = await fetch("http://localhost:3000/api/submit", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(goofleFormObject),
    });

    try {
      const content = await rawResponse.json();
      toast.success("Sua mensagem foi enviada com sucesso!", {
        className: "bg-black",
      });
      setUserName("");
      setUserEmail("");
      setUserMessage("");
      setIsLoading(false);
    } catch (error) {
      toast.error("Erro ao processar a resposta do servidor.");
      setUserName("");
      setUserEmail("");
      setUserMessage("");
      setIsLoading(false);
    }
  };

  return (
    <div className="w-[81%] bg-[#f8f8f8] dark:bg-[#181819] flex flex-col my-8">
      <h1 className="flex mx-auto z-40 relative text-[31px] text-[#6c82f2] dark:text-[#f8f8f8] font-bold text-center mb-8 sm:mb-28">
        Contato
      </h1>
      <div className="flex relative w-full h-auto sm:mb-28">
        <div className="w-full h-full bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl p-4 shadow-xl">
          <div className="hidden 2xl:flex 2xl:flex-col 2xl:justify-between 2xl:w-[700px] 2xl:h-[350px] 2xl:bg-gradient-to-br 2xl:from-blue-500 2xl:to-blue-700 2xl:rounded-xl">
            <div className="mt-8">
              <h1 className="text-[22px] text-[#f8f8f8] dark:text-[#f8f8f8] font-semibold ml-8">
                Tem alguma dúvida?
              </h1>
              <h1 className="text-[22px] text-[#f8f8f8] dark:text-[#f8f8f8] font-semibold ml-8">
                Mande sua mensagem!
              </h1>
            </div>
            <div className="ml-8 text-[#f8f8f8]">
              <FaHandshake size={100} className="dark:text-[#f8f8f8]" />
            </div>
            <div className="mb-8">
              <div className="ml-8 flex items-center space-x-4">
                <MdEmail className="dark:text-[#f8f8f8] text-[#f8f8f8]" />
                <h1 className="dark:text-[#f8f8f8] text-[#f8f8f8]">
                  luizdefreitas10@gmail.com
                </h1>
              </div>
              <div className="ml-8 flex items-center space-x-4">
                <FaAddressCard className="dark:text-[#f8f8f8] text-[#f8f8f8]" />
                <h1 className="dark:text-[#f8f8f8] text-[#f8f8f8]">
                  Boa Viagem - Recife - PE - Brasil
                </h1>
              </div>
            </div>
          </div>
          <form
            className="2xl:absolute 2xl:top-[-50px] 2xl:right-0 flex flex-col justify-between h-[450px] w-full 2xl:w-[75%] bg-white dark:bg-[#222223] p-8 rounded-xl shadow-xl space-y-6"
            onSubmit={handleSubmit}
          >
            <div className="flex flex-col space-y-4 sm:space-y-0 sm:flex-row sm:space-x-8">
              <Input
                className="text-black"
                type="text"
                variant="underlined"
                label="Nome"
                color={theme === "light" ? "primary" : "default"}
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                isRequired
              ></Input>
              <Input
                className="text-black"
                type="email"
                variant="underlined"
                label="Email"
                color={theme === "light" ? "primary" : "default"}
                value={userEmail}
                onChange={(e) => setUserEmail(e.target.value)}
                isRequired
              ></Input>
            </div>
            <Textarea
              className="text-black"
              color={theme === "light" ? "primary" : "default"}
              type="text"
              variant="underlined"
              label="Messagem"
              value={userMessage}
              onChange={(e) => setUserMessage(e.target.value)}
              isRequired
            />
            <Button
              type="submit"
              startContent={
                isLoading ? <Spinner color="white" size="sm" /> : <IoIosSend />
              }
              className="flex justify-center items-center text-white w-[120px] bg-gradient-to-br from-blue-500 to-blue-700"
            >
              Enviar
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
