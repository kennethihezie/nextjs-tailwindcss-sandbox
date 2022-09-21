import { Component } from "react"
import Animation from "../../components/animation/animation"
import BreakPoint from "../../components/breakpoint/breakpoint"
import Column from "../../components/column/column"
import DarkMode from "../../components/darkmode/darkmode"
import FlexBox from "../../components/flexbox/flexbox"
import Grid from "../../components/grid/grid"
import Interactivity from "../../components/interactivity/interactivity"
import Transform from "../../components/transform-transition/transform-transition"

class Fundamentals2 extends Component{
    constructor(props){
        super(props)

        this.state = {
            screenSize: 0
        }
    }

    showBroswerWidth = () => {
        this.setState((prevState, prevProp) => {
            return {
                screenSize: window.innerWidth
            }
        }) 
    }

    render(){
        window.onload = this.showBroswerWidth
        window.onresize = this.showBroswerWidth

      return (
        <html className="dark">
         <div lassName="scroll-smooth">
            <DarkMode />
            <Interactivity />
            <BreakPoint screenSize={ this.state.screenSize } />
            <Column />
            <FlexBox />
            <Grid />
            <Transform />
            <Animation />
        </div>
        </html>
      ) 
    }
}

export default Fundamentals2