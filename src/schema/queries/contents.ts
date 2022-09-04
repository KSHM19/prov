import { GraphQLList } from "graphql"
import { ContentType } from "../typeDefs/contents"
import { Contents } from "../../entities/contents"
 

export const GET_ALL_CONTENTS = {
    type: new GraphQLList(ContentType),
    resolve() {
        return Contents.find()
    }
}