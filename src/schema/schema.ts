import {makeExecutableSchema} from "graphql-tools";
import {resolvers} from "./resolvers/resolvers";
import  {typeDefs}  from "./types/types";

export const schema = {
    typeDefs: typeDefs,
    resolvers: resolvers,
};

