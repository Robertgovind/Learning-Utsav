import mongoose from "mongoose";

const teacherSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  subject: {
    type: String,
    required: true,
  },
  age: Number,
  rating: Number,
});

const teacherModel = mongoose.model("teachers", teacherSchema);

export default teacherModel;
