import {app as RootRoute} from './routes/rootroute';
import express from "express";
import {config} from "dotenv";
import cors from "cors";

const app = express();
const port = process.env.PORT || 8080;
config();

// middlewares

app.use(cors());
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use('/',RootRoute);


app.listen(port,()=>console.log(`app is running on the port ${port}`));