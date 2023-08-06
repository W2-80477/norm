import React,{useState} from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

import { FaBars } from "react-icons/fa"
import { AiOutlineSearch } from "react-icons/ai"


function Navbar() {

  const [open, setOpen] = useState(0);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);
  return (
    <>
      <div className="fixed overflow-hidden p-3 bg-[#f7f4ed] w-full z-20">
        <Accordion className="p-4" open={open === 1} icon={<FaBars onClick={() => handleOpen(1)} className="" size={30} />}>
          <AccordionHeader className="flex w-full">
            <div className="uppercase font-medium justify-center w-full text-xl">
              norm architects
            </div>
          </AccordionHeader>
          <AccordionBody>
            <div className=" mt-4 px-40 w-full flex items-center justify-center">
              <div className="w-full border-t border-[#cec8bd]">
                <div className="flex relative p-2">
                  <div className="justify-center w-full text-center flex gap-3 items-center">
                    <div className="cursor-pointer">Architecture</div>
                    <div className="cursor-pointer">Design</div>
                    <div className="cursor-pointer">Creative</div>
                    <div className="cursor-pointer">Journal</div>
                    <div className="cursor-pointer">Contact</div>
                    <div className="cursor-pointer">Pressroom</div>
                    <div className="cursor-pointer"></div>
                  </div>
                  <div className="absolute right-3">
                    <AiOutlineSearch size={28} fill="" />
                  </div>
                </div>
              </div>
            </div>
          </AccordionBody>
        </Accordion>
      </div>
    </>
  );
}

export default Navbar;
