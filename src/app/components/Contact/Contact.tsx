import { Button, Input, Textarea } from "@nextui-org/react";
import { BsFillTelephoneInboundFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { FaAddressCard } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";
import { FaHandshake } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="w-[81%] bg-[#f8f8f8] flex flex-col my-8 mb-32">
      <h1 className="flex mx-auto z-40 relative text-[31px] text-[#6c82f2] font-bold text-center mb-28">
        Contato
      </h1>
      <div className="flex relative w-full h-auto">
        <div className="w-full h-full bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl p-4 shadow-xl">
          <div className="hidden 2xl:flex 2xl:flex-col 2xl:justify-between 2xl:w-[700px] 2xl:h-[350px] 2xl:bg-gradient-to-br 2xl:from-blue-500 2xl:to-blue-700 2xl:rounded-xl">
            <div className="mt-8">
              <h1 className="text-[22px] font-semibold ml-8">
                Tem alguma dúvida?
              </h1>
              <h1 className="text-[22px] font-semibold ml-8">
                Mande sua mensagem!
              </h1>
            </div>
            <div className="ml-8">
              <FaHandshake size={100} />
            </div>
            <div className="mb-8">
              <div className="ml-8 flex items-center space-x-4">
                <MdEmail />
                <h1>luizdefreitas10@gmail.com</h1>
              </div>
              <div className="ml-8 flex items-center space-x-4">
                <FaAddressCard />
                <h1>Boa Viagem - Recife - PE - Brasil</h1>
              </div>
            </div>
          </div>
          <form className="2xl:absolute 2xl:top-[-50px] 2xl:right-0 flex flex-col justify-between h-[450px] w-full 2xl:w-[75%] bg-white p-8 rounded-xl shadow-xl space-y-6">
            <div className="flex flex-col space-y-4 sm:space-y-0 sm:flex-row sm:space-x-8">
              <Input
                className="text-black"
                type="text"
                variant="underlined"
                label="Nome"
                color="primary"
              ></Input>
              <Input
                className="text-black"
                type="email"
                variant="underlined"
                label="Email"
                color="primary"
              ></Input>
            </div>
            <Textarea
              className="text-black"
              color="primary"
              type="text"
              variant="underlined"
              label="Messagem"
            />
            <Button
              startContent={<IoIosSend />}
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
