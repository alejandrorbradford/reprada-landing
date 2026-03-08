import { Routes, Route } from "react-router-dom";
import { LocaleProvider, LocaleGate } from "./contexts/LocaleContext";
import Layout from "./components/Layout";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import ForSalesReps from "./pages/ForSalesReps";
import ForTeamsLeaders from "./pages/ForTeamsLeaders";
import Enterprise from "./pages/Enterprise";
import Help from "./pages/Help";
import Blog from "./pages/Blog";
import Pricing from "./pages/Pricing";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/es" element={<Home />} />
      <Route path="/for-sales-reps" element={<ForSalesReps />} />
      <Route path="/es/for-sales-reps" element={<ForSalesReps />} />
      <Route path="/for-teams-leaders" element={<ForTeamsLeaders />} />
      <Route path="/es/for-teams-leaders" element={<ForTeamsLeaders />} />
      <Route path="/enterprise" element={<Enterprise />} />
      <Route path="/es/enterprise" element={<Enterprise />} />
      <Route path="/help" element={<Help />} />
      <Route path="/es/help" element={<Help />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/es/blog" element={<Blog />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/es/pricing" element={<Pricing />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/es/contact" element={<Contact />} />
      <Route path="/privacy" element={<Privacy />} />
      <Route path="/es/privacy" element={<Privacy />} />
      <Route path="/terms" element={<Terms />} />
      <Route path="/es/terms" element={<Terms />} />
    </Routes>
  );
}

export default function App() {
  return (
    <LocaleProvider>
      <ScrollToTop />
      <LocaleGate>
        <Layout>
          <AppRoutes />
        </Layout>
      </LocaleGate>
    </LocaleProvider>
  );
}
