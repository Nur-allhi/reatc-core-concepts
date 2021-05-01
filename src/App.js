import "./App.css";
import React, { useEffect, useState } from "react";

function App() {
  // const nayoks = ["Montu", "Baten", "Rasel", "Salman", "Motaleb", "Filter"];
  // const age = [20, 35, 86, 44];
  // const naiks = ["Moushumi", "Sabina", "Saima", "Kulso"];
  // const products = [
  //   { name: "Photoshop", price: "$99.99" },
  //   { name: "Ilustrator", price: "$190.99" },
  //   { name: "Pdf Reader", price: "$60.98" },
  // ];
  return (
    <div className="App">
      <header className="App-header">
        {/* <h1>Its a react practice</h1> */}
        <Counter></Counter>
        <Users></Users>
        {/* <ul>
          {nayoks.map((nayok) => (
            <li>{nayok}</li>
          ))}
        </ul> */}
      </header>
    </div>
  );
}
function Users() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div>
      <h1>Dynamic User: {users.length}</h1>
      <ul>
        {users.map((user) => (
          <li>{user.name}</li>
        ))}
      </ul>
      <ul>
        {users.map((user) => (
          <li>{user.email}</li>
        ))}
      </ul>
    </div>
  );
}
function Counter() {
  const [count, setCount] = useState(18);

  return (
    <div>
      <h1>Counter State: {count} </h1>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
    </div>
  );
}
// function ProductOfAdobe(props) {
//   const ProductStyle = {
//     border: "1px solid gray",
//     borderRadius: "10px",
//     backgroundColor: "salmon",
//     height: "200px",
//     width: "200px",
//     margin: "10px",
//     float: "left",
//   };
//   const { name, price } = props.products;
//   return (
//     <div style={ProductStyle}>
//       <h2>{name}</h2>
//       <h3>Price: {price}</h3>
//       <button>Buy Now</button>
//     </div>
//   );
// }

// function Person(props) {
//   const styleForPerson = {
//     borderRadius: "40px",
//     border: "2px solid red",
//     margin: "10px",
//     backgroundColor: "gray",
//   };
//   console.log(props);
//   return (
//     <div style={styleForPerson}>
//       <h1>Name: {props.name}</h1>
//       <h3>Age: {props.age}</h3>
//       <h3>Naika: {props.naika}</h3>
//       <p>
//         Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
//         perferendis!
//       </p>
//     </div>
//   );
// }

export default App;
