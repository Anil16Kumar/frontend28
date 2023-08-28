import "./App.css";
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AboutUs, OurAim, OurVision } from "./pages/AboutUs";
import {
  InsurancePolicy,
  InsurancePolicyOne,
  InsurancePolicyTwo,
  InsurancePolicyThree,
  InsurancePolicyFour,
  InsurancePolicyFive,
  InsurancePolicySix,
} from "./pages/InsurancePolicy";
import { Events, EventsOne, EventsTwo } from "./pages/Events";
import Contact from "./pages/ContactUs";
import Support from "./pages/Support";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AgentLogin from "./pages/AgentLogin";
import EmployeeLogin from "./pages/EmployeeLogin";
import AdminLogin from "./pages/AdminLogin"; 
import CustomerHome from "./pages/CustomerHome";
import AdminHome from "./pages/AdminHome";
import EmployeeHome from "./pages/EmployeeHome";
import AgentHome from "./pages/AgentHome";
 function App() {
  return (
    <Router>
      <Sidebar /> 
      <Routes> 
        <Route path='/home' element={<Home/>} />
        <Route path="/customerHome" element={<CustomerHome />} />
        <Route path="/adminHome" element={<AdminHome />} />
        <Route path="/employeeHome" element={<EmployeeHome />} />
        <Route path="/agentHome" element={<AgentHome />} />


        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/agentLogin' element={<AgentLogin/>} />
        <Route path='/employeeLogin' element={<EmployeeLogin/>} />
        <Route path='/adminLogin' element={<AdminLogin/>} /> 
        <Route path='/about-us' element={<AboutUs/>} />
        <Route path='/about-us/aim' element={<OurAim/>} />
        <Route path='/about-us/vision' element={<OurVision/>} />
        <Route path='/insurancePolicy' element={<InsurancePolicy/>} />
        <Route path='/insurancePolicy/insurancePolicy1' element={<InsurancePolicyOne/>} />
        <Route path='/insurancePolicy/insurancePolicy2' element={<InsurancePolicyTwo/>} />
        <Route path='/insurancePolicy/insurancePolicy3' element={<InsurancePolicyThree/>} />
        <Route path='/insurancePolicy/insurancePolicy4' element={<InsurancePolicyFour/>} />
        <Route path='/insurancePolicy/insurancePolicy5' element={<InsurancePolicyFive/>} />
        <Route path='/insurancePolicy/insurancePolicy6' element={<InsurancePolicySix/>} /> 
        <Route path='/contact' element={<Contact/>} />
        <Route path='/events' element={<Events/>} />
        <Route path='/events/events1' element={<EventsOne/>} />
        <Route path='/events/events2' element={<EventsTwo/>} />
        <Route path='/support' element={<Support/>} />
      </Routes>
    </Router> 
  );
}
   
export default App;