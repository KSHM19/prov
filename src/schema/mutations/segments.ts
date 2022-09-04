import { GraphQLID, GraphQLString } from "graphql";
import { segmentType } from "../typeDefs/segments";
import { MessageType } from "../typeDefs/messages";
import { Segments } from "../../entities/segments";

export const CREATE_SEGMENT = {
    type: segmentType,
    args: {
        NAME: { type: GraphQLString },
        SEGMENT_TYPE: { type: GraphQLString },
        START: { type: GraphQLString },
        END: { type: GraphQLString },
        ORDER: { type: GraphQLString },
        FILE: { type: GraphQLString },
        SEGMENT_PARENT: { type: GraphQLString }
    },
    async resolve(parent: any, args: any) {
        const { NAME, SEGMENT_TYPE, START, END, ORDER, FILE, SEGMENT_PARENT } = args;
        await Segments.insert({NAME, SEGMENT_TYPE, START, END, ORDER, FILE, SEGMENT_PARENT });
        return args;
    }
}

export const UPDATE_SEGMENT = {
    type: MessageType,
    args: {
       ID: { type: GraphQLID },
       oldUrl: { type: GraphQLString },
       newUrl: { type: GraphQLString }
    },
    async resolve(parent: any, args: any) {
        const {ID, oldUrl, newUrl} = args;
        const segment = await Segments.findOne(ID);

        if(!segment) {
            throw new Error("URL DOESNT EXIST")
        }

        const segmentUrl = segment?.NAME;

        if(oldUrl === segmentUrl) {
            await Segments.update({ID}, {NAME: newUrl})

            return { successful: true, message: "UPDATE CORRECTLY" }
        } else {
            throw new Error('URL DO NOT MATCH')
        }
    }
}

export const DELETE_SEGMENT = {
    type: MessageType,
    args: {
       ID: { type: GraphQLID }
    },
    async resolve(parent: any, args: any) {
        const ID = args.ID;
        await Segments.delete(ID);

        return { successful: true, message: "SEGMENT DELETED" }
    }
}