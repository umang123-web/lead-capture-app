const express = require("express");
const cors = require("cors");
const { v4: uuid } = require("uuid");
const axios = require("axios");

const app = express();
app.use(cors());
app.use(express.json());

let leads = [];

const WEBHOOK_URL = "https://webhook.site/d40e76b1-31a4-44bd-bb29-5debfd0920cf";

app.post("/leads", async (req,res)=>{
  try{
    const {name,email,phone,company,message,source} = req.body;
    if(!name || !email)
      return res.status(400).json({error:"Name and Email required"});

    const lead = {
      id: uuid(),
      name,email,phone,company,message,source,
      created_at: new Date().toISOString()
    };

    leads.push(lead);

    axios.post(WEBHOOK_URL,{
      name: lead.name,
      email: lead.email,
      source: lead.source,
      created_at: lead.created_at
    }).catch(err=>{
      console.error("Webhook failed:", err.message);
    });

    res.json(lead);

  }catch(err){
    res.status(500).json({error:"Server error"});
  }
});

// GET all leads
app.get("/leads",(req,res)=>{
  res.json(leads);
});

// GET single lead
app.get("/leads/:id",(req,res)=>{
  const lead = leads.find(l=>l.id===req.params.id);
  if(!lead) return res.status(404).json({error:"Lead not found"});
  res.json(lead);
});

app.listen(5000,()=>console.log("Backend running on 5000"));
