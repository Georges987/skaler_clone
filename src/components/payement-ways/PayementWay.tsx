import momo from '../../assets/icons/network/mtn.png'
import moov from '../../assets/icons/network/moov.png'
import celtis from '../../assets/icons/network/celtis.png'
import master from '../../assets/icons/network/mastercard.png'
import visa from '../../assets/icons/network/visa.png'
import ora from '../../assets/icons/network/orabank.png'

export const PayementWay = () => {

    const ways = {
        major: [
            momo,
            moov,
            celtis,
            visa,
            master,
            ora
        ],
        minor: [
            momo,
            moov,
            celtis,
            visa,
            master,
        ]
    }

    return (
        <section
            className="py-20"
        >
            <div
                className="text-4xl font-extrabold text-center my-4"
            >
                Tous les moyens de paiement UEMOA
            </div>
            <div
                className="text-center"
            >
                Plus besoin de jongler entre plusieurs agrégateurs pour avoir une
                <br />
                solution de paiement complète. SESURPAY se charge de tout.
            </div>
            <div
                className='grid px-20 my-16'
            >
                <div
                    className='flex justify-between'
                >
                    {ways.major.map((way) =>
                        <img width={75} src={way} alt="" />
                    )}
                </div>
                <div
                    className='flex justify-between px-16 -translate-y-7'
                >
                    {ways.minor.map((way) =>
                        <img width={75} src={way} alt="" />
                    )}
                </div>
            </div>
        </section>
    )
}