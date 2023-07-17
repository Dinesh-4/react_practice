import { useState } from "react";


// { items: [], heading: string }
interface Props{
  items: string[];
  heading: string;
};

function ListGroup({items, heading}: Props) {
  
  
  //Hook - data that will change over time
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li 
            className={
              selectedIndex === index
                ? "list-group-item active" 
                : "list-group-item"
            }
            key={item}
            // onClick={(event) => console.log(event)}
            onClick={() => { setSelectedIndex (index ); }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
