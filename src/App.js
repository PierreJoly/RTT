import React, {Component} from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./scripts/Views/Home";
import { useNavigate } from "react-router-dom";
import mainStyle from "./styles/main.css";


class App extends Component {


  render() {
    return (
        <div className="App">
          <div className="main_content">
            <Routes>
                <Route path="/" element={<Home navigate={this.props.navigation} />} />
            </Routes>
          </div>
        </div>
    );
  }
}

export function RootFunction(props){
    const navigation = useNavigate();
    return(<App navigation={navigation}> </App>)
}

export default App;

