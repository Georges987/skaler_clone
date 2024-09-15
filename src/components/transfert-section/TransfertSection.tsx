import bank from '../../assets/images/bank-to-customers.png'

import eco from '../../assets/icons/bank/ecobank.png'
import uba from '../../assets/icons/bank/uba.png'
import boa from '../../assets/icons/bank/boa.png'
import bgfi from '../../assets/icons/bank/bgfi.png'
import horse from '../../assets/icons/bank/horse.png'
import coris from '../../assets/icons/bank/coris.png'
import standart from '../../assets/icons/bank/standard.png'
import gtbank from '../../assets/icons/bank/gtbank.png'
import ora from '../../assets/icons/bank/orabank.png'
import nsia from '../../assets/icons/bank/nsia.png'
import ivoire from '../../assets/icons/bank/ivoire.png'



export const TransfertSection = () => {

    const banks = [
        eco,
        uba,
        boa,
        bgfi,
        horse,
        nsia,
        ora,
        gtbank,
        coris,
        ivoire,
        standart
    ]

    return (
        <section
            className='py-10'
        >
            <div
                className='py-20 px-20 flex items-center'
            >
                <img className='object-contain w-1/2 sm:block hidden' src={bank} alt="Bank to customers illustration" />
                <div
                    className='pl-20'
                >
                    <div
                        className='my-8'
                    >
                        <div
                            className='text-4xl font-extrabold'
                        >
                            Transferts bancaire
                        </div>
                        <div
                            className='text-3xl'
                        >
                            +200 banques de l'UEMOA
                        </div>
                    </div>
                    <div
                        className='flex flex-col space-y-4 h-full text-xl'
                    >
                        <p>
                            Un reporting consolidé de vos <br /> transactions
                        </p>
                        <p>
                            Un suivi en temps réel de toutes les <br /> transactions
                        </p>

                        <p>
                            Une veille et une gestion de fraude pour <br /> sécuriser vos transactions
                        </p>

                        <p>
                            Une réconciliation quotidienne de <br /> toutes vos transactions
                        </p>

                        <p>
                            Un paiement vers plusieurs <br /> bénéficiaires wallets et autres comptes <br /> en un clic
                        </p>

                        <p>
                            Un embasement de la liste de <br /> bénéficiaires pour reconduire les <br /> paiements
                        </p>

                        <p>
                            Un contact support unique, disponible <br /> de 7h à 23h, 7J/7
                        </p>
                    </div>
                </div>
            </div>
            <div
                className='rounded-full flex justify-between py-2 px-20 mx-20 bg-[#F6F6F6]'
            >
                {banks.map((ban) =>
                    <img width={45} src={ban} alt="" />
                )}
            </div>
        </section>
    )
}