import { HashRouter as Router } from "react-router-dom";
import Layout from './components/Layout';
import Home from './pages/Home';
import Pricing from './pages/Pricing';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Faq from './pages/Faq';
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;