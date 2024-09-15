import logo from '../../assets/images/logo.png'
import { NavLink } from "../unit/Link"
import { PrimaryButton } from '../unit/PrimaryButton'
import { Nav } from "./Nav"


export const Header = () => {

    const links = [
        <NavLink href="" text="Accueil"></NavLink>,
        <NavLink href="" text="Documentation"></NavLink>,
        <NavLink href="" text="Tarification"></NavLink>,
        <NavLink href="" text="Contact"></NavLink>,
        <PrimaryButton text='Créer un compte' ></PrimaryButton>
      ]

    return (
        <header
            className="flex shadow-xl px-20 justify-between py-6 items-center"
        >
            <img height={40} width={100} src={logo} alt="Logo app" />
            <Nav links={links}/>
        </header>
    )
}