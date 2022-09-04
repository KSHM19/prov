import { GraphQLObjectType, GraphQLSchema } from "graphql";
import { GET_ALL_SEGMENTS } from "./queries/segments";
import { GET_ALL_CONTENTS } from "./queries/contents";
import { CREATE_SEGMENT, DELETE_SEGMENT, UPDATE_SEGMENT } from "./mutations/segments";
import { CREATE_CONTENT } from "./mutations/contents";

const RootQuery = new GraphQLObjectType({
  name: "RootQuery",
  fields: {
    getAllSegments: GET_ALL_SEGMENTS,
    getAllContents: GET_ALL_CONTENTS
  }
})

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    createSegment: CREATE_SEGMENT,
    createContent: CREATE_CONTENT,
    deleteSegment: DELETE_SEGMENT,
    updateUrl: UPDATE_SEGMENT
  }
})

export const schema = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation
})