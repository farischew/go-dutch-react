import { useContext, useEffect, useState } from "react";
import ReactPortal from "./ReactPortal";

import classes from "./UpdateModal.module.css";
import { updateItemToApi } from "../../services/backend";
import ReceiptContext from "../../context/receipt-context";

export default function UpdateModal(props) {
  const ctx = useContext(ReceiptContext);
  const prevName = props.selectedReceipt[0];

  // Initialising empty array for items fetched from API
  const loadedItems = [];
  const finalOutput = {};

  // For Form Values
  const [changedName, setChangedName] = useState(props.selectedReceipt[0]);
  const [changedPrice, setPrice] = useState(props.selectedReceipt[1].price);

  const changeNameHandler = (event) => {
    setChangedName(event.target.value);
  };

  const changePriceHandler = (event) => {
    setPrice(event.target.value);
  };

  const onSaveHandler = async () => {
    const dataObject = {};
    // const value = parseFloat(changedPrice).toFixed(2);
    const finalValue = parseFloat(changedPrice);

    dataObject[prevName] = { name: changedName, price: finalValue };

    const data = await updateItemToApi(dataObject);

    for (const key in data) {
      loadedItems.push({
        item: key,
        price: data[key],
      });
    }

    ctx.setItemsHandler(loadedItems);

    loadedItems.forEach((obj) => {
      finalOutput[obj.item] = { price: obj.price, people: [] };
    });

    ctx.setFinalOutputHandler(finalOutput);

    props.updateModalCloseHandler();
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
