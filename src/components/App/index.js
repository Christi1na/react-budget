import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { open } from "../../utils/indexdb";
import Home from "../Home";
import About from "../About";
import Statistics from "../Statistics";
import Header from "../Header";
// import More from "../More"

import { Wrapper, GlobalStyle } from "./styles";

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state= {
            loading: true
        }
    }

    componentDidMount() {
        console.log("open");
        open().then(() => {
            this.setState({
                loading: false
            })
        }).catch((error) => {
            console.log(error);
        })

    }
    
    render() {

        if(this.state.loading) {
            return "Loading..."
        }

        return (
            <Router>
                 <Wrapper>
                    <GlobalStyle/>
                   
                    <Header/>
                    {/* <Home/> */}

                    <Routes>
                        <Route exact path='/' element={<Home/>}/>
                        <Route path='/about' element={<About/>}/>
                        <Route path='/statistics' element={<Statistics/>}/>
                    </Routes>
                </Wrapper>
            </Router>
            
        )
    }

        
    
}
  
export default App;
  