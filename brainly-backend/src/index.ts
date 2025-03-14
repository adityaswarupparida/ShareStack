import express from "express";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";
import { contentModel, linkModel, userModel } from "./db";
import { userMiddleware } from "./middleware";
import { generateRandomString } from "./utils";
import cors from "cors";
import { JWT_SECRET_KEY, MONGODB_URL } from "./config";

const app = express();
app.use(express.json());
app.use(cors());
const JWT_SECRET = JWT_SECRET_KEY!;
const MONGO_URL = MONGODB_URL!;

// console.log(process.cwd());
// console.log(JWT_SECRET);
// console.log(MONGO_URL);
// mongoose.connect(MONGO_URL);

app.post("/api/v1/signup", async (req, res) => {
    // TODO: zod validation and hash the password
    const username = req.body.username;
    const password = req.body.password;

    console.log(username);
    console.log(password);
    try { 
        await userModel.create({
            userName: username,
            password: password,
        })

        res.json({
            message: "User signed up..!!"
        })
    } catch(e) {
        console.error("console.error: "+e);
        res.status(411).json({
            e,
            message: "User alraedy exists"
        })
    }
});

app.post("/api/v1/signin", async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    console.log(username);
    console.log(password);

    const user = await userModel.findOne({
        userName: username,
        password: password,
    });
    
    console.log(user);

    if(user) {
        const token = jwt.sign({
            id: user._id,
        }, JWT_SECRET);

        res.json({
            token: token,
        })
    } else {
        res.status(403).json({
            message: "Incorrect Credentials"
        })
    }

});

app.post("/api/v1/content", userMiddleware, async (req, res) => {
    const link = req.body.link;
    const title = req.body.title;
    const type = req.body.type;

    // @ts-ignore
    const userId = req.userId;

    try {
        await contentModel.create({
            link: link,
            title: title,
            type: type,
            userId: userId,
            tags: []
        })

        res.status(200).json({
            message: "Content added.. !!",
        })
    } catch(e) {
        console.error("console.error: "+e);
        res.status(411).json({
            e,
            message: "Error happened."
        })    
    }
    
});

app.get("/api/v1/contents", userMiddleware, async (req, res) => {
    //@ts-ignore
    const userId = req.userId;
    const contents = await contentModel.find({
        userId
    }).populate("userId", "userName");
    if(contents) {
        res.json({
            contents
        })
    } else {
        res.json({
            message: "oops! No contents found"
        })
    }
});

app.delete("/api/v1/content", userMiddleware, async (req, res) => {
    const contentId = req.body.contentId;

    await contentModel.deleteMany({
        _id: contentId,
        //@ts-ignore
        userId: req.userId,
    })

    res.json({
        message: "Content deleted..:)"
    })
});

app.post("/api/v1/brain/share", userMiddleware, async (req, res) => {
    const share = req.body.share;
    if(share) {
        const doLinkExists = await linkModel.findOne({
            //@ts-ignore
            userId: req.userId,         
        })
        if(doLinkExists) {
            res.json({
                message: "Shareable link already exists",
                link: "brain/" + doLinkExists.hash
            })
            return;
        }
        const hash = generateRandomString(16);
        await linkModel.create({
            //@ts-ignore
            userId: req.userId,
            hash: hash
        })

        res.json({
            message: "Shareable link is created",
            link: "brain/" + hash
        })
    } else {

        await linkModel.deleteOne({
            //@ts-ignore
            userId: req.userId
        })

        res.json({
            message: "Share link is removed"
        })
    }
});

app.get("/api/v1/brain/:sharelink", async (req, res) => {
    const hash = req.params.sharelink;

    const link = await linkModel.findOne({
        hash
    })
    if(!link) {
        res.status(411).json({
            message: "Oops! link not found"
        })
        return;
    }

    const content = await contentModel.find({
        userId: link.userId,
    })
    // if(!content) {
    //     res.status(404).json({
    //         message: "Oops! content not found"
    //     })
    //     return;
    // }

    const user = await userModel.findOne({
        _id: link.userId
    })
    if(!user) {
        res.status(404).json({
            message: "Oops! user not found"
        })
        return;
    }

    res.json({
        username: user?.userName,
        content: content
    })
});

app.listen(3000, () => {
    console.log(`Server is listening at Port ${3000}`);
});