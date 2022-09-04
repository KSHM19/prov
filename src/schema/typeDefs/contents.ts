import { GraphQLObjectType, GraphQLID, GraphQLString } from "graphql";

export const ContentType = new GraphQLObjectType({
    name: "Contents",
    fields: () => ({
        ID: { type: GraphQLID },
        NAME: { type: GraphQLString },
        DESCRIPTION: { type: GraphQLString },
        FLOW: { type: GraphQLString }
    })
})