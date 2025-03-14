import express from "express";
import dotenv from "dotenv";
import userRouter from "./routes/user.route.js";
import postRouter from "./routes/post.route.js";
import commentRouter from "./routes/comment.route.js";
import connectDB from "./lib/connectDB.js";
import webHookRouter from "./routes/webhook.route.js";
import {clerkMiddleware} from "@clerk/express"
import cors from "cors"

dotenv.config();

const app = express();

app.use(cors(process.env.VITE_API_URL));
app.use(clerkMiddleware())
app.use("/webhooks", webHookRouter);

app.use(express.json());


// app.get("/auth-state", (req,res) =>{
//   const authState = req.auth;
//   res.json(authState);
// });

// app.get("/protect", (req,res) =>{
//   const {userId} = req.auth;
//   if(!userId){
//   res.status(401).json("Not authenticated");    
//   }
//   res.status(200).json('content')
// });


app.use("/users", userRouter);
app.use("/posts", postRouter);
app.use("/comments", commentRouter);


app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    message: error.message || "Something went wrong!",
    status: error.status,
    stack: error.stack,
  });
});

app.listen(4000, () => {
  connectDB();
  console.log("Listening on port 4000");
});
