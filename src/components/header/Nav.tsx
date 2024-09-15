import { LinksProps } from "../../shared/models/type"

export const Nav = ({ links }: LinksProps) => {
    return (
        <nav
            className="flex h-full my-auto"
        >
            {links.map((link) => link)}
        </nav>
    )
}