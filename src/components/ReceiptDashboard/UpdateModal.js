import { useEffect, useState } from "react";
import ReactPortal from "./ReactPortal";

import classes from "./UpdateModal.module.css";

export default function UpdateModal(props) {
  // For Form Values
  const [changedName, setChangedName] = useState(props.selectedReceipt[0]);
  const [changedPrice, setPrice] = useState(props.selectedReceipt[1].price);

  const changeNameHandler = (event) => {
    setChangedName(event.target.value);
  };

  const changePriceHandler = (event) => {
    setPrice(event.target.value);
  };

  const onSaveHandler = () => {
    console.log(changedName);
    console.log(changedPrice);
  };

  // For Modal
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [props.updateModalShow]);

  if (!props.updateModalShow) {
    return null;
  }

  return (
    <ReactPortal wrapperId="react-portal-receipt-modal">
      <div>
        <div className={classes.modal}>
          {props.selectedReceipt && (
            <div className={classes.modal_content}>
              <h1>Edit Item:</h1>
              <label>
                Item Name:
                <input
                  type="text"
                  value={changedName}
                  onChange={changeNameHandler}
                />
              </label>
              <label>
                Price: $
                <input
                  type="text"
                  value={changedPrice}
                  onChange={changePriceHandler}
                />
              </label>
            </div>
          )}
          <button onClick={onSaveHandler} className={classes.buttonSave}>
            Save
          </button>
          <button
            onClick={props.updateModalCloseHandler}
            className={classes.button}
          >
            Close
          </button>
        </div>
      </div>
    </ReactPortal>
  );
}
