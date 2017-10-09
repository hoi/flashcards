import React, {Component} from 'react';

class Card extends Component {
  constructor() {
    super();
    this.toggle = this.toggle.bind(this);

    this.state = {
      show: false
    }
  }

  toggle() {
    const new_show = !this.state.show;
    this.setState({show: new_show});
  }

  render() {
    const title = "" + this.props.card.no + ". " + this.props.card.english;
    const button_text = this.state.show ? "hide" : "show";
    const details = (
      <div className="details">
        <div className="answer">{this.props.card.japanese}</div>
        <div className="notes">{this.props.card.note}</div>
      </div>
    );

    return (
      <div className="Card" id={"card-" + this.props.card.no}>
        <div className="title">
          {title}
          <button onClick={this.toggle}>{button_text}</button>
        </div>
        {this.state.show && details}
      </div>
    );
  }
}

export default Card;
