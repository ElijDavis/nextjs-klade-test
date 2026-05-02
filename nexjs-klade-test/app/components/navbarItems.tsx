import { LucideIcon } from "lucide-react"

const NavbarItem = ({ Icon, title }: { Icon: LucideIcon; title: string }) => {
  return (
    <div className="rounded-full aspect-square bg-amber-500/20 outline-white outline-offset-2 outline-2 p-1">
      <Icon className="w-8 h-8 text-white" />
      <span className="sr-only">{title}</span>
    </div>
  )
}

export default NavbarItem;
