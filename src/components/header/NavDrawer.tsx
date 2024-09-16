import { LinksProps } from "../../shared/models/type"

export const NavDrawer = ({ links }: LinksProps) => {
    return (
        <nav
            className="grid bg-white top-0 fixed md:hidden divide-y h-screen"
        >
            {links.map((link) => link)}
        </nav>
    )
}