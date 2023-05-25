import React, { useState, useEffect } from "react";

// const URL = "http://localhost:4000/items";
const URL = "https://eedw0b-4000.csb.app/items";

const App = (props) => {
  const [hide, setHide] = useState(false);
  const [items, setItems] = useState([]);
  useEffect(() => {
    console.log("effect");

    const fetchItems = async () => {
      try {
        const response = await fetch(URL);
        const newItems = await response.json();
        setItems(newItems);
      } catch (e) {
        console.log(e);
      }
    };
    fetchItems();
  }, []);

  const handleClick = () => {
    console.log("click", { hide });
    setHide(!hide);
  };

  //   const showCond = boolean(hide);
  //   const showCond = true;
  //   const items = props.items

  return (
    <div>
      <h1>Hola mundo!</h1>
      <button onClick={handleClick}>Toggle</button>
      <ul>
        {hide &&
          items
            ?.map((item) => <li key={item.id}>{item.label}</li>)
            ?.slice(0, 10)}
      </ul>
      <pre>
        from ssr
        <code>{JSON.stringify(props, null, 2)}</code>
      </pre>
    </div>
  );
};

App.defaultProps = {
  items: [],
};

export default App;
