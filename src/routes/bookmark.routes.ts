import express, { Router } from "express";
import { getBookmarks, createBookmark, deleteBookmark } from "../controllers";
import catchAsync from "../utils/catchAsync";
import isLoggedIn from "../middleware/isLoggedIn";

const bookmark: Router = express.Router();

bookmark.route("/bookmarks").get(isLoggedIn, catchAsync(getBookmarks));

bookmark.route("/bookmark").post(isLoggedIn, createBookmark);
bookmark.route("/bookmark/:id").delete(isLoggedIn, deleteBookmark);

export default bookmark;
