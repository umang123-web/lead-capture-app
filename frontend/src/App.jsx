
import {Routes,Route,Link} from "react-router-dom";
import LeadForm from "./pages/LeadForm";
import Leads from "./pages/Leads";
import Detail from "./pages/Detail";

export default function App(){
return(
<div className="container">
<nav>
<h2>Lead Dashboard</h2>
<div>
<Link to="/">Create Lead</Link>
<Link to="/leads">Leads</Link>
</div>
</nav>

<Routes>
<Route path="/" element={<LeadForm/>}/>
<Route path="/leads" element={<Leads/>}/>
<Route path="/leads/:id" element={<Detail/>}/>
</Routes>
</div>
)}
