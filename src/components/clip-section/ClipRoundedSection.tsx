import '../../assets/main.css'
import { PrimaryButton } from '../unit/PrimaryButton'
import code from '../../assets/images/code_secure.png'
import { CheckCircle } from 'lucide-react'
export const ClipRoundedSection = () => {
    return (
        // <section
        //     className="bg-[#bbc7fa] h-max overflow-hidden "
        // >
        //     <div
        //         className="text-white w-[350vh] z-0 h-[300vh] -translate-x-[100vh] translate-y-[200px] rounded-t-full overflow-hidden bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-primary-text to-primary-text"
        //     >
        //         kjdf
        //     </div>

        // </section>
        <section
            className='pb-20'
        >
            <div className='bg h-screen bg-cover bg-no-repeat'>
                <div
                    className='flex justify-center flex-col pt-64 items-center'
                >
                    <div
                        className='bg-clip-text text-[75px] text-white font-extrabold text-center'
                    >
                        SKALER API <br /> DEVELOPPEUR
                    </div>
                    <div
                        className='text-center my-2 text-white'
                    >
                        Les APIs de SESURPay vous permettent d'intégrer <br /> les services SESURPAY dans votre produit pour personnaliser <br /> votre parcours client et accepter <br /> différents moyens de paiement.
                    </div>
                    <div
                        className="flex justify-center my-2"
                    >
                        <div
                            className="text-white w-max rounded-full border px-4 font-bold py-2 text-base"
                        >
                            Se connecter
                        </div>
                        <div className="mx-2"></div>
                        <PrimaryButton text="Créer un compte"></PrimaryButton>
                    </div>
                </div>
            </div>
            
            <div
                className='bg-primary-text px-20 py-20'
            >
                <div
                    className='text-white grid grid-cols-3 gap-4 w-full'
                >
                    <div
                        className='space-y-4 flex flex-col justify-center'
                    >
                        <p>
                            Un contrat unique pour un accès à plusieurs modes de paiement
                        </p>
                        <p>
                            Une seule intégration pour tous les moyens de paiement
                        </p>
                        <p>
                            Une documentation technique détaillée et une équipe support dédiée
                        </p>
                    </div>
                    <img className='mt-20' src={code} alt="Code" />
                    <div
                        className='space-y-4 flex flex-col justify-center'
                    >
                        <p>
                            Une infrastructure robuste hautement disponible et redondante, hébergée en cloud
                        </p>
                        <p>
                            Une Sandbox pour tester les APIs et préparer l'intégration
                        </p>
                        <p>
                            Une réconciliation quotidienne de toutes les transactions de paiement
                        </p>
                    </div>

                </div>
                <div
                    className='flex w-full bg-white rounded-xl overflow-hidden h-[300px]'
                >
                    <div
                        className='w-4/5 p-6 flex flex-col justify-between'
                    >
                        <div
                            className=''
                        >
                            <div
                                className='font-bold text-3xl text-primary-text'
                            >
                                L'inscription est gratuite
                            </div>
                            <div
                                className='text-gray-500'
                            >
                                Des frais de 1,7% à la charge des utilisateurs sur chaque transaction.
                            </div>
                        </div>
                        <div>
                            <div
                                className='font-bold my-4'
                            >
                                Ce qui est inclus
                            </div>
                            <div
                                className='grid grid-cols-2 gap-4'
                            >
                                <div
                                    className='flex space-x-2'
                                >
                                    <CheckCircle />
                                    <div>
                                        Dashboard pour tracker ses transactions
                                    </div>
                                </div>
                                <div
                                    className='flex space-x-2'
                                >
                                    <CheckCircle />
                                    <div>
                                        Exporter ses transactions en un clic
                                    </div>
                                </div>
                                <div
                                    className='flex space-x-2'
                                >
                                    <CheckCircle />
                                    <div>
                                        Faire des paiements de masse
                                    </div>
                                </div>
                                <div
                                    className='flex space-x-2'
                                >
                                    <CheckCircle />
                                    <div>
                                        Collecter des fonds
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className='w-1/5 text-white bg-gradient-to-b flex items-center flex-col justify-center from-primary-text to-white'
                    >
                        <div
                            className='text-center text-4xl font-bold'
                        >
                            1.7%
                        </div>
                        <div
                            className='text-sm'
                        >
                            par transaction
                        </div>
                        <div
                            className='bg-white text-primary-text rounded-lg px-4 py-2 my-2'
                        >
                            Commencez ici
                        </div>
                        <div
                            className='text-sm'
                        >
                            Inscris toi, c'est gratuit
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}