import express, { Router } from "express";
import { getBookmarks, createBookmark, deleteBookmark } from "../controllers";
import catchAsync from "../utils/catchAsync";

const bookmark: Router = express.Router();

bookmark.route("/bookmarks").get(catchAsync(getBookmarks));

bookmark.route("/bookmark").post(createBookmark).delete(deleteBookmark);

export default bookmark;
