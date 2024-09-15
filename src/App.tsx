import { BannerSection } from "./components/banner-section/Banner"
import { Dashboard } from "./components/board/Dashboard"
import { CardSection } from "./components/card-section/CardSection"
import { Header } from "./components/header/Header"
import { PayementWay } from "./components/payement-ways/PayementWay"
import { TransfertSection } from "./components/transfert-section/TransfertSection"

function App() {
  return (
    <>
      <Header/>
      <BannerSection />
      <CardSection />
      <TransfertSection />
      <Dashboard />
      <PayementWay />
    </>
  )
}

export default App
