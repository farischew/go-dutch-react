import classes from "./FinalDashboardItem.module.css";

const FinalDashboardItem = (props) => {
  const values = Object.values(props.items);
  const sum = values.reduce((accumulator, value) => {
    return accumulator + value;
  }, 0);

  return (
    <div className={classes.finalDashboardItem}>
      <div className={classes.title}>
        <h3>{props.name}</h3>
      </div>

      <ul>
        {Object.keys(props.items).map((item) => (
          <li key={item}>
            <div className={classes.itemdetails}>
              <div>
                <h4>{item}</h4>
                {/* <p>(Total: $XX.XX / 2)</p> */}
              </div>
              <div>
                <h5>${props.items[item].toFixed(2)}</h5>
              </div>
            </div>
          </li>
        ))}
      </ul>

      <div className={classes.total}>
        <h3>TOTAL: ${sum.toFixed(2)}</h3>
      </div>
    </div>
  );
};

export default FinalDashboardItem;
