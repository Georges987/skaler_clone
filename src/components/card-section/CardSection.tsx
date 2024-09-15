import { CreditCard, Link, Smartphone } from "lucide-react"
import momo from '../../assets/icons/network/mtn.png'
import moov from '../../assets/icons/network/moov.png'
import celtis from '../../assets/icons/network/celtis.png'
import { Card } from "../unit/Card"

export const CardSection = () => {
    const cards = [
        {
            title: <div>Collecte de paiements <br /> Mobile Money</div>,
            content: "Collectez en toute sécurité vos paiements et accédez à vos rapports d’activité.",
            icon: <Smartphone></Smartphone>,
        },
        {
            title: "Paiement de masse",
            content: "Payez des milliers de personnes en 1 clic sur leurs Mobile Money ou comptes bancaires.",
            icon: <CreditCard></CreditCard>,
        },
        {
            title: "Lien de paiement",
            content: "Générez facilement des liens de paiement sécurisé pour permettre à vos client de vous payer rapidement par whatsapp, par mail et autres.",
            icon: <Link></Link>,
        },
        {
            title: "Mobile Money",
            content: "Bénéficiez de tous les paiements mobiles existants quelque soit le réseau GSM. Gardez le contrôle en temps réel des transactions effectuées dans votre entreprise.",
            traillings: [
                <img className="w-12 h-12" src={momo} alt="Mobile money" />,
                <img className="w-12 h-12" src={moov} alt="Moov money" />,
                <img className="w-12 h-12" src={celtis} alt="Celtis money" />
            ]
        },
        {
            title: "USSD (*654#)",
            content: "Intégrer le paiement de vos solutions plus facilement par USSD.",
        },
        {
            title: "Cartes bancaires (Coming soon ...)",
            content: "Acceptez en toute sécurité, les paiements par cartes bancaire. Le service n'est pas encore disponible, mais vous pourrez bientôt gérer le paiement de vos solutions via tous types de carte bancaire.",
        },

        
    ]
    return (
        <section
            className="py-24 px-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900 via-blue-100 to-white"
        >
            <div
                className="font-extrabold my-10 text-4xl text-center"
            >
                Vos encaissements en mieux
            </div>
            <div
                className="grid sm:grid-cols-3 gap-4 my-8 grid-cols-1"
            >
                {cards.map((card) =>
                    <Card
                        title={card.title}
                        content={card.content}
                        icon={card.icon}
                        traillings={card.traillings}
                    ></Card>
                )}
            </div>
        </section>
    )
}