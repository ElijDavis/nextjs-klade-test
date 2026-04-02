import Link from "next/link";

const Navbar = () => {
  return (
    <div className="absolute top-0 left-0 w-full z-50 flex flex-row justify-evenly items-center mt-10 *:p-2">
      <Link className="border-2 rounded-2xl border-orange-600 hover:scale-110" href="/men">men</Link>
      <Link className="border-2 rounded-2xl border-orange-600 hover:scale-110" href="/">Home</Link>
      <Link className="border-2 rounded-2xl border-orange-600 hover:scale-110" href="/women">Women</Link>
    </div>
  )
}

export default Navbar;