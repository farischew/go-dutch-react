import { useState } from "react";

import classes from "./TaxesField.module.css";
import { saveTaxesToApi } from "../../services/backend";

export default function TaxesField(props) {
  // For Tax Form Values
  const [changedGst, setChangedGst] = useState(props.gst);
  const [changedServiceCharge, setServiceCharge] = useState(
    props.serviceCharge
  );

  const changeGstHandler = (event) => {
    setChangedGst(event.target.value);
  };

  const changeServiceChargeHandler = (event) => {
    setServiceCharge(event.target.value);
  };

  // On Save
  const onSaveHandler = async () => {
    const dataObject = {
      gst: changedGst,
      service_charge: changedServiceCharge,
    };

    const data = await saveTaxesToApi(dataObject);

    console.log(data);
  };

  return (
    <div className={classes.form_content}>
      <h1>Edit Taxes:</h1>
      <label>
        GST:
        <input type="text" value={changedGst} onChange={changeGstHandler} />
      </label>
      <label>
        Service Charge
        <input
          type="text"
          value={changedServiceCharge}
          onChange={changeServiceChargeHandler}
        />
      </label>
      <button onClick={onSaveHandler} className={classes.buttonSave}>
        Save
      </button>
    </div>
  );
}
