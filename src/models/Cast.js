import { Schema, model } from "mongoose";

const CastSchema = new Schema({
    name: {
        type: String,
        required: [true, "Cast name is required!"],
    },
    age: {
        type: Number,
        required: [true, "Cast age is required!"],
        max: 120,
        min: 0,
    },
    born: {
        type: String,
        required: true,
    },
    imageUrl: String,
});

const Cast = model("Cast", CastSchema);

export default Cast;