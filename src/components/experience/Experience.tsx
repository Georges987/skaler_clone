import logo from '../../assets/images/logo.png'
import { PrimaryButton } from '../unit/PrimaryButton'
import { SecondaryButton } from '../unit/SecondaryButton'

export const Experience = () => {
    return (
        <section
            className='flex justify-center flex-col items-center bg-[#F8FAFC] py-20'
        >
            <img className='cursor-pointer' src={logo} alt="Logo" />
            <div
                className='text-4xl font-extrabold text-center my-16'
            >
                Créez l’expérience dont vous rêvez <br /> pour vos paiements.
            </div>
            <div
                className="flex my-2"
            >
                <SecondaryButton text="Se connecter"></SecondaryButton>
                <div className="mx-2"></div>
                <PrimaryButton text="Créer un compte"></PrimaryButton>
            </div>
        </section>
    )
}