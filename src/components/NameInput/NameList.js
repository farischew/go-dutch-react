import classes from "./NameList.module.css";
import NameListItem from "./NameListItem";

const NameList = (props) => {
  return (
    <div className={classes.namelist}>
      <ul className={classes.namelistitems}>
        {props.nameList.map((name) => (
          <li key={name}>
            <NameListItem name={name} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NameList;
