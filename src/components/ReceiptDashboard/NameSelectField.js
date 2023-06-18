import { useContext, useState } from "react";
import ReceiptContext from "../../context/receipt-context";

import classes from "./NameSelectField.module.css";
import NameSelectItem from "./NameSelectItem";

export default function NameSelectField(props) {
  const ctx = useContext(ReceiptContext);

  const [selectedNames, setSelectedNames] = useState([]);

  const selectHandler = (name) => {
    if (selectedNames.includes(name)) {
      setSelectedNames(selectedNames.filter((item) => item !== name));
    } else {
      setSelectedNames([...selectedNames, name]);
    }
  };

  const onSaveHandler = () => {
    const currentItemObj = ctx.finalOutput[props.itemName];

    currentItemObj.people = selectedNames;

    props.onClose();
  };

  return (
    <div className={classes.namelist}>
      <div>
        <ul className={classes.namelistitems}>
          {props.nameList.map((name) => (
            <li key={name} onClick={() => selectHandler(name)}>
              <NameSelectItem name={name} />
            </li>
          ))}
        </ul>
      </div>
      <div className="flex justify-center">
        <button onClick={onSaveHandler} className={classes.button}>
          Save
        </button>
      </div>
    </div>
  );
}
