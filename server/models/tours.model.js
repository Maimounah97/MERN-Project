const mongoose = require("mongoose");

const ToursSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "name is required"],
        minlength: [2, "name must be at least 2 characters long"]
    },
    desc: {
        type: String,
        required: [true, "description is required"],
        minlength: [4, "description must be at least 2 characters long"]
    },

    startDate: {
        type: Date,
        required: [true, "start date is required"],
        minlength: [4, "start date must be at least 2 characters long"]
    },

    endDate: {
        type: Date,
        required: [true, "end date is required"],
        minlength: [4, "end date must be at least 2 characters long"]
    },

  
},

    { timestamps: true }
);

const Tours = mongoose.model("Tours", ToursSchema);

module.exports = Tours;