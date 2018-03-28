import { importSchema } from 'graphql-import'

import {resolvers} from "./resolvers";
import path from 'path';
const typeDefs = importSchema(`${path.join(__dirname,'/types/typeDefs.graphql')}`);

export  {
    typeDefs as typeDefs,
    resolvers as resolvers,
};

