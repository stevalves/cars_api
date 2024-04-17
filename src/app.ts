import "reflect-metadata"
import "express-async-errors"
import express, {Express} from "express";
// ROUTES
import cors from "cors"


const app: Express = express();
app.use(cors())
app.use(express.json())

app.get("/", (req, res) => {
    return res.json("init")
})

app.listen(3000, () => {
    console.log("server running...")
})

export default app