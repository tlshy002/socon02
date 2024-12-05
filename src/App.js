// import './App.css';

function Food({name, picture}) {
  return (
    <div>
      <h1>I love {name}</h1>
      <img src={picture} />
    </div>
  )
}

const foodILike = [
  {
     name: "apple",
     image: "http://www.foodnmed.com/news/photo/201906/18597_4291_812.jpg",
    },
    {
      name: "banana",
      image: "http://www.foodnmed.com/news/photo/201906/18597_4291_812.jpg",
    },
];

function App() {
  return (
    <div>
      <h1>Hello</h1>
      { foodILike.map(dish => (
        <Food name={dish.name} picture={dish.image} />) ) }
    </div>
  );
}

export default App;
