import "./App.css";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import StartD from "./components/Sections/Startingdistribution";
import PaymentI from "./components/Sections/PaymentInvoices";
import DistributionO from "./components/Sections/Distributionobjects";
import DistributionM from "./components/Sections/Distributionmanagement";
import DistributionI from "./components/Sections/Distributedinvoicesforpayment";
import CostE from "./components/Sections/CostEstimatingandControl";
import { Route, Routes } from "react-router-dom";
import Index from "./components";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/StartD" element={<StartD />} />
        <Route path="/PaymentI" element={<PaymentI />} />
        <Route path="/DistributionO" element={<DistributionO />} />
        <Route path="/DistributionM" element={<DistributionM />} />
        <Route path="/DistributionI" element={<DistributionI />} />
        <Route path="/CostE" element={<CostE />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
