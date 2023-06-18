import classes from "./ReceiptItem.module.css";

const ReceiptItem = (props) => {
  return (
    <div className={classes.receipt_wrapper}>
      <div className={classes.receipt_item}>
        <div className={classes.receipt_item_details}>
          <h3>{props.name}</h3>
          <p>${props.price}</p>
        </div>
        <div className={classes.receipt_item_action}></div>
      </div>
      <div>
        <h3 className="pb-1 text-white">Selected Names:</h3>
        <ul className="flex gap-3 pb-4">
          {props.selectedNames !== undefined &&
            props.selectedNames.map((name) => (
              <li
                key={name}
                className="border border-white px-4 py-2 bg-brand-primary text-white rounded-lg"
              >
                {name}
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default ReceiptItem;
