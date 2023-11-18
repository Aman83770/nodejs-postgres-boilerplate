import axios from "axios";
import express, { Request, Response } from "express";
import { CitiData } from "../orm/entities/CitiData";
import { CityRepository } from "src/repo/cityRepo";
import { getConnection } from "typeorm";
import { getRepository } from "typeorm";

const WEATHER_API = "https://api.openweathermap.org/geo/1.0/direct?appId=";
const API_KEY = "c87b0dc01668b35a327c2d6d02328b9b";

const CityRouter = express.Router();
const cityRepo = getRepository(CitiData);


async function getCityGeo(name: string) {
  const endPoint = `${WEATHER_API}${API_KEY}&q=${name}`;
  console.log(endPoint);
  const geo =  (await axios.get(endPoint)).data;
  console.info(geo);
  return geo;
}

CityRouter.get("/cities/:name/weather", async (req: Request, res: Response)  => {
  // this request will get weather and store in db itself

  // if this is in DB
  const {name} = req.params;

  const city = await cityRepo.findOne({ where: { name } });

  if (city) {
    return {temp: city.temp, visibility: city.visibility, name: city.name};
  }

  // call 3rd party API
  const geoLocation = await getCityGeo(name);

  console.log(geoLocation);
  // await cityData.save({
  //   name,

  // });


  console.log(req.params);



  return res.json({city: req.params.name});
})

// CityRouter.post("/cities", (req: Request, res: Response)  => {
//   const {body} = res;

//   console.log(req.params);
//   return res.json({city: req.params.name});
// })


export default CityRouter;
