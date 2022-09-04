import { GraphQLString } from "graphql";
import { ContentType } from "../typeDefs/contents";
import { Contents } from "../../entities/contents";

export const CREATE_CONTENT = {
    type: ContentType,
    args: {
        NAME: { type: GraphQLString },
        DESCRIPTION: { type: GraphQLString },
        FLOW: { type: GraphQLString }
    },
    async resolve(parent: any, args: any) {
        const { NAME, DESCRIPTION, FLOW } = args;
        await Contents.insert({NAME, DESCRIPTION, FLOW})
        return args;
    }
}