import { Menu } from 'lucide-react'
import logo from '../../assets/images/logo.png'
import { NavLink } from "../unit/Link"
import { PrimaryButton } from '../unit/PrimaryButton'
import { Nav } from "./Nav"
import React from 'react'


export const Header = () => {

    const links = [
        <NavLink href="" text="Accueil"></NavLink>,
        <NavLink href="" text="Documentation"></NavLink>,
        <NavLink href="" text="Tarification"></NavLink>,
        <NavLink href="" text="Contact"></NavLink>,
        <PrimaryButton text='Créer un compte' ></PrimaryButton>
    ]

    const [show, setShow] = React.useState(false)

    return (
        <>
            <header
                className="flex fixed z-20 w-screen bg-white shadow-xl md:px-20 px-4 justify-between md:py-6 py-2 items-center"
            >
                <img height={40} width={100} className='cursor-pointer' src={logo} alt="Logo app" />
                <div className='md:block hidden'>
                    <Nav links={links} />
                </div>
                <div className='md:hidden block'>
                    <Menu size={30} onClick={() => setShow(!show)} />
                </div>
            </header>
            <div className={`fixed top-0 left-0 w-full h-screen bg-white z-50 ${show ? 'block' : 'hidden'}`}>
                <div
                    className="flex justify-between items-center md:hidden px-4 py-2"
                >
                    <img height={40} width={100} className='cursor-pointer' src={logo} alt="Logo app" />
                    <div>
                        <Menu size={30} onClick={() => setShow(!show)} />
                    </div>
                </div>
                <nav className='flex flex-col'>
                    {links.map((link) => link.props.text !== 'Créer un compte' ? link : <NavLink href={link.props.href} text={link.props.text}></NavLink>)}
                </nav>
            </div>
        </>
    )
}