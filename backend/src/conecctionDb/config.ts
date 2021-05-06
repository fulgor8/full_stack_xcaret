import dotenv from "dotenv";
dotenv.config();
export default {
    USERNAMEDB: process.env.USERNAMEDB || "carlos_israel",
    PASSWORDDB: process.env.PASSWORDDB || "carlos_israel123",
    DATABASE: process.env.DATABASE || "xcaret",
};
