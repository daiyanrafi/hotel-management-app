/*this is model page*/

import mongoose from "mongoose";
// const { schema } = mongoose; (no need to use it bcz below we used it)

const RoomSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    maxPeople: {
      type: Number,
      required: true,
    },
    desc: {
      type: Boolean,
      default: false,
    },
    roomNumbers: [{number:Number, unavailableDates: {tpye: [Date]}}],
  },
  { timestamps: true }
);


export default mongoose.model("Room", RoomSchema);
