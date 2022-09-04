import { GraphQLObjectType, GraphQLID, GraphQLString } from "graphql";

export const segmentType = new GraphQLObjectType({
  name: "Segment",
  fields: ()=> ({
    ID: { type: GraphQLID },
    NAME: { type: GraphQLString },
    SEGMENT_TYPE: { type: GraphQLString },
    START: { type: GraphQLString },
    END: { type: GraphQLString },
    ORDER: { type: GraphQLString },
    FILE: { type: GraphQLString },
    SEGMENT_PARENT: { type: GraphQLString },
  })
})