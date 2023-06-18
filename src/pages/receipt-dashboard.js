import * as ROUTES from "../constants/routes";

import { useContext, useEffect, useState } from "react";
import ReceiptContext from "../context/receipt-context";

import ReceiptItem from "../components/ReceiptDashboard/ReceiptItem";
import ReceiptModal from "../components/ReceiptDashboard/ReceiptModal";
import { getPeopleFromApi } from "../services/backend";
import { ActionBar } from "../components/UI/ActionBar";
import Container from "../components/UI/Container";

export default function ReceiptDashboard() {
  const ctx = useContext(ReceiptContext);
  const [items, setItems] = useState(null);

  // Get User Names
  const [loadedNames, setLoadedNames] = useState([]);

  const getPeopleHandler = async () => {
    const data = await getPeopleFromApi();

    setLoadedNames(data);
  };

  // Get People
  useEffect(() => {
    getPeopleHandler();
  }, []);

  // Get Items
  useEffect(() => {
    setItems(ctx.finalOutput);
  }, [ctx.finalOutput]);

  // Receipt Modal
  const [showModal, setShowModal] = useState(false);
  const [selectedReceipt, setSelectedReceipt] = useState();

  const modalCloseHandler = () => {
    checkInputsValidation();
    setShowModal(false);
  };

  const openReceiptHandler = (key) => {
    setSelectedReceipt([key, ctx.finalOutput[key]]);

    setShowModal(true);
  };

  // Check if all name fields are completed
  const [namesValid, setNamesValid] = useState(false);

  const checkInputsValidation = () => {
    Object.values(ctx.finalOutput).forEach((item) => {
      const peopleArray = item.people;
      if (peopleArray === undefined || peopleArray.length === 0) {
        setNamesValid(false);
        return;
      } else {
        setNamesValid(true);
      }
    });
  };

  return (
    <Container>
      <h1 className="text-3xl font-bold pt-6 pb-8 text-brand-secondary">
        Receipt Dashboard
      </h1>
      <div className="container mx-auto">
        <ul>
          {Object.entries(ctx.finalOutput).map(([key, value]) => (
            <li key={key} onClick={() => openReceiptHandler(key)}>
              <ReceiptItem
                name={key}
                price={value.price}
                selectedNames={value.people}
              />
            </li>
          ))}
        </ul>
        {showModal && (
          <ReceiptModal
            showModal={showModal}
            onClose={modalCloseHandler}
            selectedReceipt={selectedReceipt}
            loadedNames={loadedNames}
          />
        )}
      </div>
      <ActionBar
        display={namesValid}
        nextPage={ROUTES.FINAL_DASHBOARD}
        prevPage={ROUTES.NAME_INPUTS}
      />
    </Container>
  );
}
