import "./App.css";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import MobileHamburger from "./components/MobileHamburger";
import Invoices from "./components/Invoices";
import Cards from "./components/Cards";

function App() {
  return (
    <div>
      <MobileHamburger></MobileHamburger>
      <Routes>
        <Route path="/" element={<Dashboard></Dashboard>}>
          <Route path="invoices" element={<Invoices></Invoices>}></Route>
          <Route path="cards" element={<Cards></Cards>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
