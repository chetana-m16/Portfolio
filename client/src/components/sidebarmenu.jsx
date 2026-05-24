import { X } from "lucide-react";
import { Link } from "react-router-dom";

function SidebarMenu({ open, setOpen }) {
  return (
    <>
      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-zinc-900 shadow-lg transform transition-transform duration-300 z-50 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close button */}
        <div className="flex justify-end p-5">
          <button onClick={() => setOpen(false)}>
            <X size={28} className="text-white hover:text-cyan-400" />
          </button>
        </div>

        {/* Links */}
        <ul className="flex flex-col items-center gap-8 mt-10 text-lg text-white">
          <li className=" hover:text-cyan-400">
            <Link to="/" onClick={() => setOpen(false)}>
              Home
            </Link>
          </li>

          <li className=" hover:text-cyan-400">
            <Link to="/about" onClick={() => setOpen(false)}>
              About
            </Link>
          </li>

          <li className=" hover:text-cyan-400">
            <Link to="/skills" onClick={() => setOpen(false)}>
              Skills
            </Link>
          </li>

          <li className=" hover:text-cyan-400">
            <Link to="/projects" onClick={() => setOpen(false)}>
              Projects
            </Link>
          </li>
          <li className=" hover:text-cyan-400">
            <Link to="/experience" onClick={() => setOpen(false)}>
            Experience
            </Link>
          </li>
          <li className=" hover:text-cyan-400">
            <Link to="/achievements" onClick={() => setOpen(false)}>
              Achievements
            </Link>
          </li>

          <li className=" hover:text-cyan-400">
            <Link to="/contact" onClick={() => setOpen(false)}>
              Contact
            </Link>
          </li>
        </ul>
      </div>

      {/* Overlay */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/50 z-40"
        />
      )}
    </>
  );
}

export default SidebarMenu;