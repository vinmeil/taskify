"use client";

import Link from "next/link";
import { links } from "@/constants/nav-links";
import { usePathname, useRouter } from "next/navigation";
import ThemeToggler from "./ThemeToggler";

const NavBar = () => {
  const pathname = usePathname();
  const router = useRouter();

  const handleLogout = () => {
    sessionStorage.removeItem("userId");
    sessionStorage.removeItem("userIsAdmin");
    router.push("/");
  };
  return (
    <>
      {pathname === "/" ? null : (
        <nav className="h-dvh w-1/6 rounded-xl p-5 bg-primary drop-shadow-2xl flex flex-col">
          <div className="h-full flex flex-col gap-4">
            <NavLinks />
            <ThemeToggler />
            <button
              onClick={handleLogout}
              className="bg-button rounded-lg drop-shadow-xl p-2 border-solid bg-yellow text-base font-semibold px-3 flex items-center justify-center gap-2"
            >
              Logout
            </button>
          </div>
        </nav>
      )}
    </>
  );
};
//Navbar Colour:
//Deadpool:#21282F
//Ocean: #223648
//Nature:#0D3537
//Default:#0F101A

export default NavBar;

function NavLinks() {
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => {
        return (
          <Link
            key={link.name}
            href={link.href}
            className={`${
              pathname === link.href
                ? "text-secondary font-semibold text-2xl"
                : "font-semibold text-2xl text-white"
            } flex-grow`}
          >
            <div className="w-56.25 h-full border-2 border-#ccc-300 shadow-lg rounded-lg flex flex-grow flex-col text-center items-center justify-center">
              <link.icon className="text-5xl" />
              <h2>{link.name}</h2>
            </div>
          </Link>
        );
      })}
    </>
  );
}
/*
Active icon colour:
Deadpool:#FFE97F
Ocean:#E1DDC5
Nature:#C6A280
Default:#A7B6B3
*/
