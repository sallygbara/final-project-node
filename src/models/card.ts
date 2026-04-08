import mongoose from "mongoose";

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
        bizNumber: { type: Number, required: true, unique: true },
        likes: [{ type: mongoose.Schema.Types.ObjectId, ref: "users" }],
        user_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "users",
            required: true,
        },
    },
    { timestamps: true }
);

const Card = mongoose.model("cards", cardSchema);

export default Card;