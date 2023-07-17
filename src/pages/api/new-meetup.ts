// api/new-meetup
import { Meetup } from "@/components/meetups/model";
import { MongoClient } from "mongodb";

import { mongoDb } from "../../../envConstants";

const handler = async (req: any, res: any) => {
  const { method } = req;

  if (method === "POST") {
    const data: Meetup = req.body;

    console.log(
      `>>> debugLogging: file: new-meetup.ts - line: 11: req.body: `,
      req.body
    );

    const client = await MongoClient.connect(mongoDb);
    const db = client.db();

    const meetupsCollection = db.collection("meetups");

    const result = await meetupsCollection.insertOne(data);

    console.log(
      `>>> debugLogging: file: new-meetup.ts - line: 22: result: `,
      result
    );

    await client.close();

    res.status(201).json({ message: "Meetup inserted!" });
  }
};

export default handler;
