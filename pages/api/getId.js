import content from "../../models/content";
import dbConnect from "./db";

export default async function getId(req, res) {
  await dbConnect();

  try {
    const result = content.find({ _id: req.query._id }, (err, data) => {
      if (err) {
        res.json([{ data: false }]);
      } else {
        res.json(data);
      }
    });
  } catch (err) {
    res.status(500).json(err);
  }
}
