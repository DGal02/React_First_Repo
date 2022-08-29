import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './node_modules/bootstrap/dist/css/bootstrap.min.css';

class Board extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      line1: {
        color: 'red',
        cards: [{ number: 1, show: true }, { number: 2, show: true }, { number: 3, show: true }, { number: 4, show: true }, { number: 5, show: true }, { number: 6, show: true }, { number: 7, show: true }]
      },
      line2: {
        color: 'blue',
        cards: [{ number: 1, show: true }, { number: 2, show: true }, { number: 3, show: true }, { number: 4, show: true }, { number: 5, show: true }, { number: 6, show: true }, { number: 7, show: true }]
      },
      line3: {
        color: 'yellow',
        cards: [{ number: 1, show: true }, { number: 2, show: true }, { number: 3, show: true }, { number: 4, show: true }, { number: 5, show: true }, { number: 6, show: true }, { number: 7, show: true }]
      }
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleRestartClick = this.handleRestartClick.bind(this);
  }



  handleClick(color, number, show) {
    setTimeout(() => {

      if (color === 'red') {
        let line = { ...this.state.line1 };
        line.cards[number - 1].show = !show;
        this.setState({ line1: line })
      }
      if (color === 'blue') {
        let line = { ...this.state.line2 };
        line.cards[number - 1].show = !show;
        this.setState({ line2: line })
      }
      if (color === 'yellow') {
        let line = { ...this.state.line3 };
        line.cards[number - 1].show = !show;
        this.setState({ line3: line })
      }
    }, 200);

  }
  handleRestartClick() {
    this.setState({
      line1: { color: 'red', cards: [{ number: 1, show: true }, { number: 2, show: true }, { number: 3, show: true }, { number: 4, show: true }, { number: 5, show: true }, { number: 6, show: true }, { number: 7, show: true }] },
      line2: { color: 'blue', cards: [{ number: 1, show: true }, { number: 2, show: true }, { number: 3, show: true }, { number: 4, show: true }, { number: 5, show: true }, { number: 6, show: true }, { number: 7, show: true }] },
      line3: { color: 'yellow', cards: [{ number: 1, show: true }, { number: 2, show: true }, { number: 3, show: true }, { number: 4, show: true }, { number: 5, show: true }, { number: 6, show: true }, { number: 7, show: true }] }
    });
  }
  render() {
    return (
      <div className='mx-auto text-center'>
      <img style={{display:'none'}} alt='placeholder' src={require('./images/back.png')} />
        <LineCards onCardClick={this.handleClick} color={this.state.line1.color} cards={this.state.line1.cards} />
        <LineCards onCardClick={this.handleClick} color={this.state.line2.color} cards={this.state.line2.cards} />
        <LineCards onCardClick={this.handleClick} color={this.state.line3.color} cards={this.state.line3.cards} />
        <button onClick={this.handleRestartClick}>Restart</button>
      </div>
    );
  }
}

class LineCards extends React.Component {

  render() {
    const cards = this.props.cards;
    var color = this.props.color;
    const items = cards.map((value) => {
      return (<Card onCardClick={this.props.onCardClick} key={this.props.color + value.number + value.show} color={color} number={value.number} show={value.show} />);
    });
    return (
      <div className='center-block text-center'>{items}</div>


    );

  }
}

class Card extends React.Component {


  render() {


    return (
      <img  width={'51px'} height={'67px'} onClick={(e) => { this.props.onCardClick(this.props.color, this.props.number, this.props.show); e.target.style.opacity = 0; e.target.style.animation = "fadeOutFromNone 0.2s ease-out" }} alt={this.props.color + this.props.number} className='mycard' src={this.props.show ? require('./images/' + this.props.number.toString() + '_' + this.props.color + '.png') : require('./images/back.png')} />
    );
  }
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Board />);



