import React, { useState } from "react";
import { Menu } from "lucide-react";
import SidebarMenu from "./SidebarMenu";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full h-16 bg-zinc-950/90 backdrop-blur-md border-b border-zinc-800 z-50">
        <div className="max-w-7xl mx-auto h-full px-4 flex justify-between items-center">
          
          {/* Logo */}
<h1 className=" logo-font text-xs md:text-sm  text-cyan-400 ">            Chetana Mahajan
          </h1>

          {/* Menu Button */}
          <button
            onClick={() => setOpen(true)}
            className="text-white hover:text-cyan-400 transition"
          >
            <Menu size={22} />
          </button>
        </div>
      </nav>

      {/* Sidebar */}
      <SidebarMenu open={open} setOpen={setOpen} />
    </>
  );
}

export default Navbar;