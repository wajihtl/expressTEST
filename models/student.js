const mongoose = require("mongoose");

const schema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        age: { type: Number, required: true },
        classe: { type: String, required: true },
        note: { type: Number, required: true },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Student", schema);
