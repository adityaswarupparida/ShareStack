import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
    userName: { type: String, unique: true },
    password: String,
});

export const userModel = mongoose.model("User", userSchema);

enum ContentType {
    Youtube = "Youtube",
    Twitter = "Twitter",
    Notes = "Notes"
}  

const contentSchema = new Schema({
    title: String,
    link: String,
    type: Object.values(ContentType),
    tags: [{ type: mongoose.Types.ObjectId, ref: 'Tag' }],
    userId: { type: mongoose.Types.ObjectId, ref: 'User', required: true }
});

export const contentModel = mongoose.model("Content", contentSchema);

const linkSchema = new Schema({
    hash: String,
    userId: { type: mongoose.Types.ObjectId, ref: 'User', required: true, unique: true },
})

export const linkModel = mongoose.model("Link", linkSchema);