import Comp1 from "./Components/Comp1"
import Comp2 from "./Components/Comp2"
import Comp3 from "./Components/Comp3"
import V from "./Components/Virat.jpg"

import "./components/style.css"



function App(){
    return(
        <div>
            <Comp1 data = {V}></Comp1>
            <Comp2 name ={"abc"}></Comp2>
            <Comp3 data = {V}></Comp3>
        </div>
    )
}
export default App;
