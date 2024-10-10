import mongoose from "mongoose"

const departmentSchema = new mongoose.Schema({
    name: { type: String, required: true }
})


const Department = 
module.exports = mongoose.model("Department", departmentSchema)
export default Department;