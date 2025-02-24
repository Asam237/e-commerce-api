import axios from "axios";

interface PrayerTimesResponse {
  data: {
    timings: {
      Sunset: string;
    };
  };
}

const getIftarTime = async (city: string, country: string): Promise<string> => {
  const url = `http://api.aladhan.com/v1/timingsByCity?city=${city}&country=${country}&method=2`;

  const response = await axios.get<PrayerTimesResponse>(url);
  const sunsetTime = response.data.data.timings.Sunset;

  return sunsetTime;
};

export default { getIftarTime };
