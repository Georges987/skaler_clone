import dash from '../../assets/images/banner_board.png'

export const Dashboard = () => {
    return (
        <section
            className="grid px-20"
        >
            <div
                className="text-center my-2"
            >
                Ayez un contrôle sur toutes vos transactions en temps réel.
            </div>
            <div
                className="text-4xl font-extrabold text-primary-text text-center"
            >
                Tableau de bord simple et intuitif.
            </div>
            <img src={dash} alt="Dashboard" />
        </section>
    )
}