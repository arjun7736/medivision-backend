import express from "express";
import cookieParser from "cookie-parser"
import morgan from "morgan"
import connectDB from "./infrastructure/db/db";
import billRoute from "./interfaces/routes/BillRoutes"
import dotenv from "dotenv"
dotenv.config()

const app = express();
const mongo: undefined | string = process.env.MONGO_URI;
const port: undefined | string = process.env.PORT;

app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({extended: true}));
app.use(morgan("dev"));
app.use("/api",billRoute)
// app.use(errorMiddleware())







if(mongo){
    connectDB(mongo)
}
if (port) {
  app.listen(port, () => {
    console.log("Running On " + port);
  });
} 
