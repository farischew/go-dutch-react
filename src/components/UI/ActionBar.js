import classes from "./ActionBar.module.css";
import BackButton from "./BackButton";
import MainButton from "./MainButton";

export const ActionBar = (props) => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.actions}>
        <BackButton prevPage={props.prevPage}>Back</BackButton>
        <MainButton nextPage={props.nextPage} display={props.display}>
          Continue
        </MainButton>
      </div>
    </div>
  );
};
