import { useCallback, useContext, useEffect, useState } from "react";
import FinalDashboardList from "../components/FinalDashboard/FinalDashboardList";
import ReceiptContext from "../context/receipt-context";
import { getFinalItemsFromApi } from "../services/backend";
import Container from "../components/UI/Container";
import NewReceiptButton from "../components/UI/NewReceiptButton";

export default function FinalDashboard() {
  const ctx = useContext(ReceiptContext);

  const [sendToApi, setSendToApi] = useState(null);

  const [finalOutput, setFinalOutput] = useState({});

  // Fetching Item Split Data
  const getFinalItemsHandler = useCallback(async () => {
    if (sendToApi) {
      const data = await getFinalItemsFromApi(sendToApi);

      setFinalOutput(data);
    }
  }, [sendToApi, setFinalOutput]);

  useEffect(() => {
    if (ctx.finalOutput) {
      const finalObj = ctx.finalOutput;
      setSendToApi(finalObj);
      getFinalItemsHandler();
    }
  }, [ctx.finalOutput, getFinalItemsHandler]);

  return (
    <>
      <Container>
        <h1 className="text-3xl font-bold pt-6 pb-8 text-brand-secondary">
          Confirm your Split
        </h1>
        <div>
          <FinalDashboardList finalSplit={finalOutput} />
        </div>
      </Container>
      <div className="bg-brand-background h-60">
        <div className="flex justify-center">
          <NewReceiptButton
            title={"Add a New Receipt"}
            location={"/image_upload"}
          />
        </div>
      </div>
    </>
  );
}
