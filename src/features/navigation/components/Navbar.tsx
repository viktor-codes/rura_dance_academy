import { headers } from "next/headers";
import { NavbarClient } from "./NavbarClient";

export async function Navbar() {
  await headers();
  return <NavbarClient />;
}
