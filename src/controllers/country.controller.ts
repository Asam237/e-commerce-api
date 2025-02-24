import { Request, Response } from "express";
import { countries } from "../consts/countries";

const getAllCountries = async (req: Request, res: Response) => {
  try {
    return res.json(countries);
  } catch (error) {
    return res.status(500).json({ error: "Failed to fetch all countries" });
  }
};

export default { getAllCountries };
