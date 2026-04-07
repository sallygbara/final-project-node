import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        first: String,
        middle: String,
        last: String,
    },
    phone: String,
    email: String,
    password: String,
    isBusiness: Boolean,
    isAdmin: Boolean,
});

const cardSchema = new mongoose.Schema({
    title: String,
    subtitle: String,
    description: String,
    phone: String,
    email: String,
    web: String,
    image: {
        url: String,
        alt: String,
    },
    address: {
        state: String,
        country: String,
        city: String,
        street: String,
        houseNumber: Number,
        zip: Number,
    },
    bizNumber: Number,
    likes: [String],
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
});

export const User = mongoose.model("User", userSchema);
export const Card = mongoose.model("Card", cardSchema);