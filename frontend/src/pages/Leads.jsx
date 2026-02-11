
import {useEffect,useState} from "react";
import api from "../api";
import {Link} from "react-router-dom";

export default function Leads(){
const [data,setData]=useState([]);

useEffect(()=>{
  const load = ()=> api.get("/leads").then(r=>setData(r.data));
  load();
  const interval = setInterval(load,2000);
  return ()=> clearInterval(interval);
},[]);
return(
<table>
<thead>
<tr>
<th>Name</th><th>Email</th><th>Source</th><th>Date</th>
</tr>
</thead>
<tbody>
{data.map(l=>(
<tr key={l.id}>
<td><Link to={"/leads/"+l.id}>{l.name}</Link></td>
<td>{l.email}</td>
<td>{l.source}</td>
<td>{new Date(l.created_at).toLocaleString()}</td>
</tr>
))}
</tbody>
</table>
)}
