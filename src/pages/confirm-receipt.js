import { useContext, useEffect, useState } from "react";
import UpdateModal from "../components/ReceiptDashboard/UpdateModal";
import { ActionBar } from "../components/UI/ActionBar";
import Container from "../components/UI/Container";
import * as ROUTES from "../constants/routes";
import ReceiptContext from "../context/receipt-context";
import ReceiptItemConfirm from "../components/ConfirmReceipt/ReceiptItemConfirm";
import { updateItemToApi } from "../services/backend";

export default function ConfirmReceipt() {
  const ctx = useContext(ReceiptContext);

  const [items, setItems] = useState(null);
  const [selectedReceipt, setSelectedReceipt] = useState();

  const loadedItems = [];
  const finalOutput = {};

  // Get Items
  useEffect(() => {
    setItems(ctx.finalOutput);
  }, [ctx.finalOutput]);

  // Update Modal
  const [updateModalShow, setUpdateModalShow] = useState(false);

  const updateModalHandler = (event, key) => {
    event.stopPropagation();
    console.log(key);
    setSelectedReceipt([key, ctx.finalOutput[key]]);

    setUpdateModalShow(true);
  };

  const updateModalCloseHandler = () => {
    setUpdateModalShow(false);
  };

  // Delete Item Handler
  const deleteHandler = async (event, key) => {
    event.stopPropagation();
    console.log(key);
    const dataObject = {};

    dataObject[key] = { name: null };

    const data = await updateItemToApi(dataObject);

    for (const key in data) {
      loadedItems.push({
        item: key,
        price: data[key],
      });
    }
    console.log(loadedItems);

    ctx.setItemsHandler(loadedItems);

    loadedItems.forEach((obj) => {
      finalOutput[obj.item] = { price: obj.price, people: [] };
    });

    ctx.setFinalOutputHandler(finalOutput);
  };

  return (
    <Container>
      <h1 className="text-3xl font-bold pt-6 pb-8 text-brand-secondary">
        Confirm your Items and Taxes
      </h1>
      <div className="container mx-auto">
        <ul>
          {items &&
            Object.entries(items).map(([key, value]) => (
              <li key={key}>
                <ReceiptItemConfirm
                  name={key}
                  price={value.price}
                  selectedNames={value.people}
                  updateModalHandler={(event) => updateModalHandler(event, key)}
                  deleteHandler={(event) => deleteHandler(event, key)}
                />
              </li>
            ))}
        </ul>
        {updateModalShow && (
          <UpdateModal
            updateModalShow={updateModalShow}
            selectedReceipt={selectedReceipt}
            updateModalCloseHandler={updateModalCloseHandler}
          />
        )}
      </div>
      <ActionBar
        // display={imageUploaded}
        nextPage={ROUTES.NAME_INPUTS}
        prevPage={ROUTES.IMAGE_UPLOAD}
      />
    </Container>
  );
}
