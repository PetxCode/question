
import "antd/dist/antd.css"
import Quistion from "./Quistion"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Participate from "./Participate";
import HeaderView from "./HeaderView";

function App() {
  return (
    <div
    style={{
      backgroundColor:"lightgray",
      width:"100%",
      height:"200vh"
    }}
    >
      <Router>
        <HeaderView/>
        <Switch>
          <Route path="/" exact component={Quistion} />
          <Route path="/participate" exact component={Participate} />
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
