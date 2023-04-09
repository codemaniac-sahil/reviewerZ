import mongoose from "mongoose";
const Connection = async () => {
  mongoose.set("strictQuery", false);
  // const URL = `mongodb://user:google123@ac-ivtgluu-shard-00-00.bso9kts.mongodb.net:27017,ac-ivtgluu-shard-00-01.bso9kts.mongodb.net:27017,ac-ivtgluu-shard-00-02.bso9kts.mongodb.net:27017/crud?ssl=true&replicaSet=atlas-bwlp2s-shard-0&authSource=admin&retryWrites=true&w=majority`;
  const URL = `mongodb://user:google123@ac-ivtgluu-shard-00-00.bso9kts.mongodb.net:27017,ac-ivtgluu-shard-00-01.bso9kts.mongodb.net:27017,ac-ivtgluu-shard-00-02.bso9kts.mongodb.net:27017/reviewerz?ssl=true&replicaSet=atlas-bwlp2s-shard-0&authSource=admin&retryWrites=true&w=majority`;
  try {
    await mongoose.connect(URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log("database connected");
  } catch (error) {
    console.log("you got this ", error);
  }
};
export default Connection;
