import { LinkProps } from "../../shared/models/type"

export const NavLink = ({href, text, className}: LinkProps) =>
{
    return (
        <a className={"text-primary my-auto mx-2 font-bold md:text-xs text-base"+className} href={href}>{text}</a>
    )
}