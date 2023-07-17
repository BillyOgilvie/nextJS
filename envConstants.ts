const mongoDb = process.env.MONGO_DB || "";
if (!mongoDb) {
  throw new Error("MONGO_DB must be set");
}

export { mongoDb };
