import React, { useEffect, useState } from "react";

const ReceiptContext = React.createContext({
  setItemsHandler: () => {},
  setFinalOutputHandler: () => {},
  items: [],
  finalOutput: {},
});

export const ReceiptContextProvider = ({ children, props }) => {
  // Initialising empty array for items fetched from API
  const [items, setItems] = useState([]);

  const setItemsHandler = (loadedItems) => {
    setItems(loadedItems);
  };

  // Initialing Final Output
  const [finalOutput, setFinalOutput] = useState();

  const setFinalOutputHandler = (finalOutput) => {
    setFinalOutput(finalOutput);
  };

  useEffect(() => {
    console.log("Updated items:", items);
  }, [items]);

  return (
    <ReceiptContext.Provider
      value={{
        setItemsHandler,
        setFinalOutputHandler,
        items: items,
        finalOutput: finalOutput,
      }}
      {...props}
    >
      {children}
    </ReceiptContext.Provider>
  );
};

export default ReceiptContext;
