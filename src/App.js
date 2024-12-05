// import './App.css';
import React from 'react';

function Food({name, picture}) {
  return (
    <div>
      <h2>I love {name}</h2>
      <img src={picture} width={300} />
    </div>
  )
}
const foodILike = [
  {
     name: "apple",
     image: "https://www.outdoornews.co.kr/news/photo/202009/32077_90504_551.jpg",
    },
    {
      name: "mango",
      image: "https://health.chosun.com/site/data/img_dir/2024/04/09/2024040901881_0.jpg",
    },
];

class App extends React.Component {
  state = {
    count: 0,
  };
  
  add = () => {
    console.log('add');
    this.setState(current => ({
      count: current.count + 1,
    }));
  }
  minus = () => {
    console.log('minus');
    this.setState(current => ({
      count: current.count - 1,
    }));
  }
  
  render() {
    return (
      <div>
        <h1>The number is: {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button><hr></hr>

        <h1>Hello</h1>
        { foodILike.map(dish => (
        <Food name={dish.name} picture={dish.image} />) ) }
      </div>
    );
  }
}

export default App;
