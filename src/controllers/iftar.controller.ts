import { Request, Response } from "express";
import iftarService from "../services/iftar.service";

const getIftarTime = async (req: Request, res: Response) => {
  const city = req.query.city as string;
  const country = req.query.country as string;
  try {
    if (!city || !country) {
      return res.status(400).json({ error: "City and country are required" });
    }

    const iftarTime = await iftarService.getIftarTime(city, country);
    res.json({ city, country, iftarTime });
  } catch (error) {
    return res.status(500).json({ error: "Failed to fetch iftar time" });
  }
};

export default { getIftarTime };
