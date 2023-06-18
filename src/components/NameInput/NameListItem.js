import classes from "./NameListItem.module.css";

const NameListItem = (props) => {
  return <div className={classes.nameItem}>{props.name.toUpperCase()}</div>;
};

export default NameListItem;
