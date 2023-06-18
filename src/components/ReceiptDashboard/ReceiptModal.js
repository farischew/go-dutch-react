import { useEffect } from "react";

import SelectList from "./NameSelectField";
import classes from "./ReceiptModal.module.css";
import ReactPortal from "./ReactPortal";
import ReceiptItem from "./ReceiptItem";

const ReceiptModal = (props) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [props.showModal]);

  if (!props.showModal) {
    return null;
  }

  return (
    <ReactPortal wrapperId="react-portal-receipt-modal">
      <div>
        <div className={classes.modal}>
          {props.selectedReceipt && (
            <>
              <ReceiptItem
                name={props.selectedReceipt[0]}
                price={props.selectedReceipt[1].price}
                selectedNames={props.selectedReceipt[1].people}
              />
              <SelectList
                nameList={props.loadedNames}
                itemName={props.selectedReceipt[0]}
                onClose={props.onClose}
              />
            </>
          )}
        </div>
      </div>
    </ReactPortal>
  );
};

export default ReceiptModal;
