import React from 'react';
import './App.css';
import axios from "axios";
import Navbar from "./components/Navbar"
import "./App.css";


class App extends React.Component {
constructor(){
  super();
  this.state = {
    myData: {},
    country: []
  }
}

componentDidMount(){

   axios
    .get("http://localhost:5000/api/players")
    .then(res => {
      console.log(res)
      this.setState({
        country: res.data
      })
    })
    .catch(err => console.log(err))

}

render(){

  return (
    <div className="App">
      <Navbar />
      <div className="follower">
        <h2 data-testid="soccer-player-header">Soccer Players</h2>
        {this.state.country.map(follower => (
          <div className="king" key={follower.id}>
            <p>{follower.name}</p>
            <p>{follower.country}</p>
          </div>
        ))}
      </div>
    </div>
  );
  
}
}
export default App;
