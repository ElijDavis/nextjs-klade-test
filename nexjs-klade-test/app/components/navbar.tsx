import Link from "next/link";
import Image from "next/image";
import {Home, Shirt, User} from "lucide-react";
import NavbarItem from "./navbarItems";

const items = [
  {title: "Home", href: "/", icon: Home},
  {title: "Men", href: "/men", icon: Shirt},
  {title: "Women", href: "/women", icon: User},
]

const Navbar = () => {
  return (
    <div className="flex flex-row mx-auto sticky top-5 space-x-4 p-2 bg-black/10 rounded-full">
      {items.map((item) => (
        <Link key={item.title} href={item.href} className="text-white font-medium text-lg">
          <NavbarItem Icon={item.icon} title={item.title} />
        </Link>
      ))}
      <div className="relative shrink-0 w-10 h-10 aspect-square rounded-full">
        <Image src="/User.jpg" alt="Logo" fill sizes="(orientation: portrait) 50px, 60px" className="object-cover rounded-full" />
      </div>
    </div>
  )
}

export default Navbar;