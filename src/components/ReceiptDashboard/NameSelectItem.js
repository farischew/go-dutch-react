import { useState } from "react";
import classes from "./NameSelectItem.module.css";

const NameSelectItem = (props) => {
  const [isSelected, setIsSelected] = useState(false);

  const selectHandler = () => {
    setIsSelected(!isSelected);
  };

  return (
    <div
      className={isSelected ? classes.nameItemSelected : classes.nameItem}
      onClick={selectHandler}
    >
      {props.name.toUpperCase()}
    </div>
  );
};

export default NameSelectItem;
