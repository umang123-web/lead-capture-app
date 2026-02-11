
# Lead Capture Dashboard

## Tech Stack
React + Vite  
Node + Express  
Axios  

## Setup

### Backend
cd backend  
npm install  
npm run dev  

### Frontend
cd frontend  
npm install  
npm run dev  

## API
POST /leads  
GET /leads  
GET /leads/:id  

## Webhook
After lead creation backend sends POST request to webhook.site URL.

Replace WEBHOOK_URL in server.js with your own.

## Features
Form validation  
Loading state  
Success/Error message  
Responsive UI  
✔ Webhook trigger  
✔ Detail page  
✔ Clean architecture  

Production Notes:
Use environment variables, database, auth, logging, rate limit for real deployment.
