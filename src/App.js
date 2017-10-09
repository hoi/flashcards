import React, { Component } from 'react';
import './App.css';
import CARDS from './cards';
import Card from './card';

class App extends Component {
  constructor() {
    super();
    this.updateGoto = this.updateGoto.bind(this);
    this.go = this.go.bind(this);

    this.state = {
      goto: ""
    }
  }

  updateGoto(event) {
    this.setState({goto: event.target.value});
  }

  go(event) {
    const element = document.getElementById("card-" + this.state.goto);
    element.scrollIntoView(true);
  }

  render() {
    let cards = [];

    CARDS.forEach((card) => {
      const new_card = (<Card card={card} />);
      cards.push(new_card);
    });

    return (
      <div className="App">
        <div className="goto"><input type="text" value={this.state.goto} onChange={this.updateGoto} /><button onClick={this.go}>go</button></div>
        <div className="cards">
          {cards}
        </div>
      </div>
    );
  }
}

export default App;
