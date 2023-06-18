import FinalDashboardItem from "./FinalDashboardItem";

const FinalDashboardList = (props) => {
  return (
    <div>
      <ul className="list-none">
        {Object.keys(props.finalSplit).map((name) => (
          <li key={name}>
            <FinalDashboardItem
              name={props.finalSplit[name].name}
              items={props.finalSplit[name].items}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FinalDashboardList;
