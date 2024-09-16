import { BannerSection } from "./components/banner-section/Banner"
import { Dashboard } from "./components/board/Dashboard"
import { CardSection } from "./components/card-section/CardSection"
import { ClipRoundedSection } from "./components/clip-section/ClipRoundedSection"
import { Empty } from "./components/empty/Empty"
import { Experience } from "./components/experience/Experience"
import { Footer } from "./components/footer/Footer"
import { Header } from "./components/header/Header"
import { PayementWay } from "./components/payement-ways/PayementWay"
import { Tarification } from "./components/traification/Tarification"
import { TransfertSection } from "./components/transfert-section/TransfertSection"

function App() {
  return (
    <>
      <Header/>
      <div
        className="h-20"
      ></div>
      <BannerSection />
      <CardSection />
      <TransfertSection />
      <Dashboard />
      <PayementWay />
      <ClipRoundedSection />
      <Tarification />
      <Experience />
      <Empty />
      <Footer />
    </>
  )
}

export default App
