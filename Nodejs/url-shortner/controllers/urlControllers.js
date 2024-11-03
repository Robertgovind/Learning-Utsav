import shortid from "shortid";
import urlModel from "../model/urlModel.js";

async function generateShortURL(req, res) {
  const { url } = req.body;
  if (!url) res.status(400).json({ message: "url is required" });
  const shordId = shortid();
  const response = await urlModel.create({
    shortId: shordId,
    redirectURL: url,
    visitHistory: [],
  });
  res.send({ id: shordId });
}

async function getAnalytics(req, res) {
  const shortId = req.params.shortId;
  const response = await urlModel.findOne({ shortId: shortId });
  res.send({
    totalClicks: response.visitHistory.length,
    analytics: response.visitHistory,
  });
}

export { generateShortURL, getAnalytics };
