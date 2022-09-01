import { GraphQLID, GraphQLString } from "graphql";
import { segmentType } from "../typeDefs/segments";
import { MessageType } from "../typeDefs/messages";
import { Segments } from "../../entities/segments";

export const CREATE_SEGMENT = {
    type: segmentType,
    args: {
        name: { type: GraphQLString },
        url: { type: GraphQLString },
        other: { type: GraphQLString }
    },
    async resolve(parent: any, args: any) {
        const { name, url, other } = args;
        await Segments.insert({name, url, other});
        return args;
    }
}

export const UPDATE_SEGMENT = {
    type: MessageType,
    args: {
       id: { type: GraphQLID },
       oldUrl: { type: GraphQLString },
       newUrl: { type: GraphQLString }
    },
    async resolve(parent: any, args: any) {
        const {id, oldUrl, newUrl} = args;
        const segment = await Segments.findOne(id);

        if(!segment) {
            throw new Error("URL DOESNT EXIST")
        }

        const segmentUrl = segment?.url;

        if(oldUrl === segmentUrl) {
            await Segments.update({id}, {url: newUrl})

            return { successful: true, message: "UPDATE CORRECTLY" }
        } else {
            throw new Error('URL DO NOT MATCH')
        }
    }
}

export const DELETE_SEGMENT = {
    type: MessageType,
    args: {
       id: { type: GraphQLID }
    },
    async resolve(parent: any, args: any) {
        const id = args.id;
        await Segments.delete(id);

        return { successful: true, message: "SEGMENT DELETED" }
    }
}