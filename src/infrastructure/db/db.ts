import mongoose from "mongoose";


const connectDB=(mongo:string)=>{
    if (mongo) {
        mongoose
          .connect(mongo)
          .then(() => {
            console.log("DB Connected");
          })
          .catch(() => {
            console.log("Error While Connecting DB");
          });
      }
}


export default connectDB