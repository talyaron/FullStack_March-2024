import mongoose from "mongoose"

const departmentSchema = new mongoose.Schema({
    name: { type: String, required: true }
})


module.exports = mongoose.model("Department", departmentSchema)