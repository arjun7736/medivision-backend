import express from "express";
import cookieParser from "cookie-parser"
import morgan from "morgan"
import connectDB from "./infrastructure/db/db";
import billRoute from "./interfaces/routes/BillRoutes"
import authRoute from "./interfaces/routes/AuthRoutes"
import dotenv from "dotenv"
import errorMiddleware from "./middleware/ErrorMiddleware";
import cors from "cors"
dotenv.config()

const app = express();
const mongo: undefined | string = process.env.MONGO_URI;
const port: undefined | string = process.env.PORT;

const corsOptions = {
  origin: 'http://localhost:5173', 
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true, 
};
app.use(cors(corsOptions));
app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({extended: true}));
app.use(morgan("dev"));
app.use("/api/bill",billRoute)
app.use("/api/auth",authRoute)
app.use(errorMiddleware)







if(mongo){
    connectDB(mongo)
}
if (port) {
  app.listen(port, () => {
    console.log("Running On " + port);
  });
} 


