import { BrowserRouter, Routes, Route } from "react-router-dom";
import PaymentConfirmation from "./components/PaymentConfirmation";
import HomePage from "./pages/HomePage";
import IntakePage from "./pages/IntakePage";
import ScrollReveal from "./components/ScrollReveal";

export default function App() {
  if (window.location.hash === "#payment-confirmation") {
    return <PaymentConfirmation />;
  }

  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <ScrollReveal />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/intake" element={<IntakePage />} />
        <Route path="/payment-confirmation" element={<PaymentConfirmation />} />
      </Routes>
    </BrowserRouter>
  );
}
