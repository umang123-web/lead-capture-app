
import {useEffect,useState} from "react";
import {useParams} from "react-router-dom";
import api from "../api";

export default function Detail(){
const {id}=useParams();
const [lead,setLead]=useState(null);

useEffect(()=>{api.get("/leads/"+id).then(r=>setLead(r.data))},[id]);

if(!lead) return <p>Loading...</p>;

return(
<div style={{background:"white",padding:20,borderRadius:8}}>
<h3>{lead.name}</h3>
<p>Email: {lead.email}</p>
<p>Phone: {lead.phone}</p>
<p>Company: {lead.company}</p>
<p>Source: {lead.source}</p>
<p>Message: {lead.message}</p>
<p>Date: {new Date(lead.created_at).toLocaleString()}</p>
</div>
)}
