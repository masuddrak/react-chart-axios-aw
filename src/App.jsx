import Headers from "./components/Headers"
import "./App.css"
import Navber from "./components/Navber"
import Axios from "./components/Axios"
import Chart from "./components/Chart"
import Slider from "./components/Slider"

function App() {


  return (
    <>
    <Slider></Slider>
    <h1 className="my-28"></h1>
      <Navber></Navber>
      <Headers></Headers>
      <Axios></Axios>
      <Chart></Chart>
    </>
  )
}

export default App
