import { useState } from "react";
import { Menu } from "lucide-react";
import SidebarMenu from "./SidebarMenu";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full bg-zinc-950/90 backdrop-blur-md border-b border-zinc-800 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          
          <h1 className="text-xl md:text-2xl font-bold text-cyan-400 tracking-wide">
            Chetana.dev
          </h1>

          <button
            onClick={() => setOpen(true)}
            className="text-white hover:text-cyan-400 transition"
          >
            <Menu size={28} />
          </button>
        </div>
      </nav>

      <SidebarMenu open={open} setOpen={setOpen} />
    </>
  );
}

export default Navbar;