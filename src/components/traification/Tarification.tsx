import board from '../../assets/images/available_ops.png'

export const Tarification = () => {

    const countries = [
        "CÔTE D'IVOIRE",
        "SENEGAL",
        "MALI",
        "BURKINA-FASO",
        "GUINEE-BISAU",
        "CAMEROON"
    ]

    return (
        <section
            className="py-20 px-20 bg-[#F8FAFC] mb-4"
        >
            <div
                className="text-primary-text text-center font-bold text-4xl"
            >
                Tarification
            </div>
            <div
                className="text-center"
            >
                Plus besoin de jongler entre plusieurs agrégateurs pour avoir une <br /> solution de paiement complète.  se charge de tout.
            </div>
            <div
                className="bg-primary-text my-8 flex justify-between px-6 rounded-full text-white py-2"
            >
                
                <div
                    className="bg-[#06D6A0] py-2 rounded-full px-4"
                >
                    BENIN
                </div>
                {countries.map((tile) =>
                    <div
                        className="py-2 rounded-full px-4" // bg-[#06D6A0]
                    >
                        {tile}
                    </div>
                )}
            </div>
            <img src={board} alt="Avalaible operation" />
        </section>
    )
}