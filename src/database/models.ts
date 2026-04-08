import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        name: {
            first: { type: String, required: true },
            middle: { type: String, default: "" },
            last: { type: String, required: true },
        },
        phone: { type: String, required: true },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: { type: String, required: true },
        image: {
            url: { type: String, default: "" },
            alt: { type: String, default: "" },
        },
        address: {
            state: { type: String, default: "" },
            country: { type: String, required: true },
            city: { type: String, required: true },
            street: { type: String, required: true },
            houseNumber: { type: Number, required: true },
            zip: { type: Number, default: 0 },
        },
        isBusiness: {
            type: Boolean,
            default: false,
        },
        isAdmin: {
            type: Boolean,
            default: false,
        },
    },
    { timestamps: true }
);

const cardSchema = new mongoose.Schema(
    {
        title: { type: String, required: true },
        subtitle: { type: String, required: true },
        description: { type: String, required: true },
        phone: { type: String, required: true },
        email: { type: String, required: true },
        web: { type: String, default: "" },
        image: {
            url: { type: String, default: "" },
            alt: { type: String, default: "" },
        },
        address: {
            state: { type: String, default: "" },
            country: { type: String, required: true },
            city: { type: String, required: true },
            street: { type: String, required: true },
            houseNumber: { type: Number, required: true },
            zip: { type: Number, default: 0 },
        },
        bizNumber: {
            type: Number,
            unique: true,
            required: true,
        },
        likes: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "User",
            },
        ],
        user_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
    },
    { timestamps: true }
);

export const User = mongoose.model("User", userSchema);
export const Card = mongoose.model("Card", cardSchema);