import Colors from "../components/colors/colors"
import Product from "../components/product/product"
import MessageAlert from "../components/utility-first/message_alert"

const Home = () => {
  return (
    <div>
      <MessageAlert />
      <Colors />
      {/* <Product /> */}
    </div>
  )
}

export default Home