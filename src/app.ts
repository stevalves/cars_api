import "reflect-metadata"
import "express-async-errors"
import express, {Express} from "express";
// ROUTES
import cors from "cors"
import carsRoutes from "./routes/cars.routes";
import { handleErrorMiddleware } from "./middlewares/handleError.middleware";


const app: Express = express();
app.use(cors())
app.use(express.json())

app.use("/cars", carsRoutes)

app.get("/", (req, res) => {
    return res.json("Obrigado pela oportunidade!")
})

app.use(handleErrorMiddleware);

export default app