
function NavBar({ menuitems, minstock }) {

  let stock = menuitems.filter(item => item.instock >= minstock);
  let cart = stock.map((item, index) => {
    return <li key={index.toString()}>{item.name}</li>;
  }
  );

  return <ul style={{ listStyleType: "none" }}>{cart}</ul>;
}

const menuItems = [
  { name: "apple", instock: 2 },
  { name: "pineapple", instock: 3 },
  { name: "pear", instock: 0 },
  { name: "peach", instock: 3 },
  { name: "orange", instock: 1 }
];
ReactDOM.render(
  <NavBar menuitems={menuItems} minstock={2} />,
  document.getElementById("root")
);

