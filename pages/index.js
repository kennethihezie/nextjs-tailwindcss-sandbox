import BackGround from "../components/background/background"
import Border from "../components/border/border"
import Colors from "../components/colors/colors"
import Container from "../components/container/container"
import Filter from "../components/filter/filter"
import Layout from "../components/layout/layout"
import Product from "../components/product/product"
import Sizing from "../components/sizing/sizing"
import Typography from "../components/typography/typography"
import MessageAlert from "../components/utility-first/message_alert"

const Home = () => {
  return (
    <div>
      <MessageAlert />
      <Colors />
      {/* <Product /> */}
      <Container />
      <Typography />
      <Sizing />
      <Layout />
      <BackGround />
      <Border />
      <Filter />
    </div>
  )
}

export default Home