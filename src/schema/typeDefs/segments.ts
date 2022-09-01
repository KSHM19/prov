import { GraphQLObjectType, GraphQLID, GraphQLString } from "graphql";

export const segmentType = new GraphQLObjectType({
  name: "Segment",
  fields: ()=> ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    url: { type: GraphQLString },
    other: { type: GraphQLString }
  })
})