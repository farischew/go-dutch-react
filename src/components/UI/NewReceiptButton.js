import { clearCache } from "../../services/backend";

import classes from "./MainButton.module.css";

export default function NewReceiptButton({ title, location }) {
  function redirectToNewReceipt() {
    window.location.href = location; // Replace '/' with the desired root page URL
  }

  const onNewReceipt = async () => {
    try {
      await clearCache();
      console.log("All cleared");
      redirectToNewReceipt();
    } catch (error) {
      console.log("Nothing to clear");
      redirectToNewReceipt();
    }
  };

  return (
    <button className={classes.contactButton} onClick={onNewReceipt}>
      {title}
      <div className={classes.iconButton}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
        >
          <path fill="none" d="M0 0h24v24H0z"></path>
          <path
            fill="currentColor"
            d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
          ></path>
        </svg>
      </div>
    </button>
  );
}
