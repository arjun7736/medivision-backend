import mongoose, { Schema } from "mongoose";
import { IBill } from "../modelInterface/IBill";

const BillSchema: Schema = new Schema({
  hospital: [
    {
      id: {
        type: Schema.Types.ObjectId,
        ref: "Hospital",
      },
      name: {
        type: String,
      },
      place: {
        type: String,
      },
      district: {
        type: String,
      },
    },
  ],
  totalAmount: {
    type: Number,
  },
  totalPercentage: {
    type: Number,
  },
  data: [
    {
      id: {
        type: Number,
      },
      description: {
        type: String,
      },
      amount: {
        type: Number,
      },
      percentage: {
        type: Number,
      },
    },
  ],
  name: {
    type: String,
    default: "medivision pvt ltd",
  },
  email: {
    type: String,
    default: "medivision@gmail.com",
  },
  address: {
    type: String,
    default: "123,abc street,chennai",
  },
  cinNo: {
    type: Number,
    default: 1234567890,
  },
  gstNo: {
    type: Number,
    default: 1234567890,
  },
  bankDetails: {
    type: String,
    default: "HDFC",
  },
  branch: {
    type: String,
    default: "chennai",
  },
  accoundNo: {
    type: Number,
    default: 1234567890,
  },
  ifscCode: {
    type: Number,
    default: 1234567890,
  },
  paymentType: {
    type: String,
    default: "cash",
  },
  invoiceNo: {
    type: Number,
    default: 12345,
  },
  currency: {
    type: String,
    default: "INR",
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});
export default mongoose.model<IBill>("Bill", BillSchema);
