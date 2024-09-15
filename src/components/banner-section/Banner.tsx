import { COUNTRY_FLAG } from "../../shared/constants"
import { PrimaryButton } from "../unit/PrimaryButton"
import { SecondaryButton } from "../unit/SecondaryButton"
import africa from "../../assets/images/africa.png"

export const BannerSection = () => {
    return (
        <section
            className="flex max-h-[70vh] w-screen pl-20"
        >
            <div
                className="flex flex-col justify-center sm:w-1/2 w-full"
            >
                <div className="text-4xl tracking-widest my-4">
                    {COUNTRY_FLAG}
                </div>
                <div className="text-4xl mb-6 text-primary-text font-extrabold">
                    Simplifiez vos paiements
                    <br />
                    Elevez votre expérience.
                </div>
                <div>
                    La solution de paiement en ligne en Afrique, dans <br /> l’espace UEMOA, qui simplifie vos transactions et <br /> stimule vos ventes
                </div>
                <div
                    className="flex my-2"
                >
                    <SecondaryButton text="Se connecter"></SecondaryButton>
                    <div className="mx-2"></div>
                    <PrimaryButton text="Créer un compte"></PrimaryButton>
                </div>
            </div>
            <img className="object-contain sm:w-1/2 hidden sm:block" src={africa} alt="Africa maps" />
        </section>
    )
}