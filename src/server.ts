import cookieParser from "cookie-parser";
import express, { NextFunction, Request } from "express";
import morgan from "morgan";
import CityRouter from './routes/city';
import { dbCreateConnection } from "./orm/data-source";

/** Express app configs **/
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(morgan("dev"));

(async () => {
    await dbCreateConnection();
  })();


// Add APIs
app.use('/api/v1/', CityRouter);

/// Print API errors
// eslint-disable-next-line @typescript-eslint/no-unused-vars
// app.use(err, req, res) => {
//     // logger.error(err.message, err);
//     return new res.status(400).json({a: "check"})
// });

// Export express instance
const port = 4000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
export default app;
