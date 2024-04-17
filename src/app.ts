import "reflect-metadata"
import "express-async-errors"
import express, {Express} from "express";
// ROUTES
import cors from "cors"
import carsRoutes from "./routes/cars.routes";


const app: Express = express();
app.use(cors())
app.use(express.json())

app.use("/car", carsRoutes)

app.get("/", (req, res) => {
    return res.json("init")
})

export default app