import express from "express";
import { ENV } from "./lib/env.js";


const app=express();
console.log(ENV.PORT);
console.log(ENV.DB_URL);


app.get("/",(req,res)=>{
    res.status(200).json({msg:"success from backend"});
});

// For local development
if (process.env.NODE_ENV !== 'production') {
    app.listen(ENV.PORT,()=>console.log("Server is running on port ",ENV.PORT));
}

// Export for Vercel serverless
export default app;