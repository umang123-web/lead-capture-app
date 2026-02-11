
import {useState} from "react";
import api from "../api";

export default function LeadForm(){
const [form,setForm]=useState({name:"",email:"",phone:"",company:"",message:"",source:"Website"});
const [loading,setLoading]=useState(false);
const [msg,setMsg]=useState("");

const change=e=> setForm({...form,[e.target.name]:e.target.value});

const submit=async e=>{
e.preventDefault();
if(!form.name||!form.email) return setMsg("Required fields missing");
setLoading(true);
try{
await api.post("/leads",form);
setMsg("Lead Created Successfully");
setForm({name:"",email:"",phone:"",company:"",message:"",source:"Website"});
}catch{
setMsg("Error creating lead");
}
setLoading(false);
};

return(
<form onSubmit={submit} className={loading?"loader":""}>
<h3>Create Lead</h3>
<input name="name" placeholder="Name*" value={form.name} onChange={change}/>
<input name="email" placeholder="Email*" value={form.email} onChange={change}/>
<input name="phone" placeholder="Phone" value={form.phone} onChange={change}/>
<input name="company" placeholder="Company" value={form.company} onChange={change}/>
<textarea name="message" placeholder="Message" value={form.message} onChange={change}/>
<select name="source" value={form.source} onChange={change}>
<option>Website</option>
<option>Instagram</option>
<option>Referral</option>
<option>Other</option>
</select>
<button disabled={loading}>{loading?"Submitting...":"Submit"}</button>
<p>{msg}</p>
</form>
)}
