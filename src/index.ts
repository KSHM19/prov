import express from "express";
import { graphqlHTTP } from "express-graphql";
import { schema } from "./schema";
import cors from "cors";
import { createConnection } from "typeorm";
import { Segments } from "./entities/segments"
import { Contents } from "./entities/contents";

const main = async()=> {

  await createConnection({
    type: "oracle",
    host: "akeportaldev.c7x2zi8g6skj.us-east-1.rds.amazonaws.com",
    port: 1521,
    username: "content_mgt",
    password: "content_mgt",
    database: "CONTENT_MGT",
    logging: true,
    synchronize: false,
    entities: [Segments, Contents],
    sid: "ORCL",
  })

  const app = express();
  app.use(cors());
  app.use(express.json());
   app.use("/graphql", graphqlHTTP({
     schema,
     graphiql: true
   }));
  app.listen(3009, ()=>{
    console.log("Server on port 3009");
  })
}

main().catch((err)=> {
  console.error(err);
})