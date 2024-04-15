import cors from 'cors'
import express from 'express'
import {SETTINGS} from "./settings";
import {blogsRouter} from "./routers/blogs-router";

export const app = express()
app.use(express.json())
app.use(cors())

app.use(SETTINGS.PATH.BLOGS, blogsRouter)