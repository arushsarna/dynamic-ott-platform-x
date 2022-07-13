import jwtmain from "jsonwebtoken";
const KEY = "fhdjifhidfijsd";
import adminSchema from "../../models/admin";
import dbConnect from "./db";
export default async function (req, res) {
  const jwt = req.query.cookies;

  if (!jwt) {
    return res.json({ data: false });
  }
  try {
    const verification = jwtmain.verify(jwt, KEY);

    adminSchema.find({ username: verification.username }, (error, data) => {
      if (error) {
        return res.json(error);
      } else {
        if (data.length == 0) {
          return res.json({ data: false });
        }

        return res.json({ data: true, username: verification.username });
      }
    });
  } catch (err) {
    var arr = err;
    arr.data = false;

    return res.status(500).json(arr);
  }
  return;
}
