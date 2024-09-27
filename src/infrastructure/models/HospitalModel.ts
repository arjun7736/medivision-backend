import { Schema } from "mongoose";
import { IHospital } from "../modelInterface/IHospital";
import mongoose from "mongoose";

const HospitalSchema: Schema = new Schema({
  name: {
    type: String,
  },
  place: {
    type: String,
  },
  district: {
    type: String,
  },
  gstNo:{
    type:Number
  }
});


export default mongoose.model<IHospital>("Hospital", HospitalSchema);