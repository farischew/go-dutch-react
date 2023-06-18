import { Suspense, lazy } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import * as ROUTES from "./constants/routes";
import LoadingScreen from "./components/UI/LoadingScreen";

const Homepage = lazy(() => import("./pages/homepage"));
const ImageUpload = lazy(() => import("./pages/image-upload"));
const NameInput = lazy(() => import("./pages/name-input"));
const ReceiptDashboard = lazy(() => import("./pages/receipt-dashboard"));
const FinalDashboard = lazy(() => import("./pages/final-dashboard"));

function App() {
  return (
    <div className="bg-brand-background">
      <Router>
        <Suspense fallback={<LoadingScreen />}>
          <Routes>
            <Route path={ROUTES.HOMEPAGE} element={<Homepage />} />
            <Route path={ROUTES.IMAGE_UPLOAD} element={<ImageUpload />} />
            <Route path={ROUTES.NAME_INPUTS} element={<NameInput />} />
            <Route
              path={ROUTES.RECEIPT_DAHSBOARD}
              element={<ReceiptDashboard />}
            />
            <Route path={ROUTES.FINAL_DASHBOARD} element={<FinalDashboard />} />
          </Routes>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
