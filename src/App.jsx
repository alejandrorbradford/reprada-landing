import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
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

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/for-sales-reps" element={<ForSalesReps />} />
        <Route path="/for-teams-leaders" element={<ForTeamsLeaders />} />
        <Route path="/enterprise" element={<Enterprise />} />
        <Route path="/help" element={<Help />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
      </Routes>
    </Layout>
  );
}
