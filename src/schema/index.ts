import { GraphQLObjectType, GraphQLSchema } from "graphql";
import { GET_ALL_SEGMENTS } from "./queries/segments";
import { CREATE_SEGMENT, DELETE_SEGMENT, UPDATE_SEGMENT } from "./mutations/segments";


const RootQuery = new GraphQLObjectType({
  name: "RootQuery",
  fields: {
    getAllSegments: GET_ALL_SEGMENTS,
  }
})

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    createSegment: CREATE_SEGMENT,
    deleteSegment: DELETE_SEGMENT,
    updateUrl: UPDATE_SEGMENT
  }
})

export const schema = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation
})