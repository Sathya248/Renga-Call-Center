import './App.css';
import Navbar from './Components/Navbar';
import Form from "./Components/Form"
import CallCenter from './Components/CallCenter';
import Icon from './Components/Icon';
import Details from './Components/Details';
import Explain from './Components/Explain';
import Ivr from "./Components/Ivr"
import FiveStar from './Components/FiveStar';
import Benefit from './Components/Benefit';
import Context from './Components/Context';
import Features from './Components/Features';
import Pricing from './Components/Pricing';
import Companies from './Components/Companies';
import Technology from './Components/Technology';



const App = () => {
    return (
        <div >
            <Navbar />

            <div className="app-container" >
                <Form />
                <CallCenter />
            </div>

            <Icon />

            <div className='details-container'>
                <Details />
                <Explain />
            </div>

            <div className="main-container">
                <Ivr className="left" />
                <FiveStar className="right"/>
            </div>
            <Benefit />
            <Context />
            <Features />
            <Pricing />
            <Companies />
            <Technology />

        </div>
    )

}

export default App;
