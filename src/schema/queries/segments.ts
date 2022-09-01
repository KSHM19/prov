import { GraphQLList } from "graphql"
import { segmentType } from "../typeDefs/segments"
import { Segments } from "../../entities/segments"

export const GET_ALL_SEGMENTS = {
    type: new GraphQLList(segmentType),
    resolve() {
        return Segments.find();
    }
}