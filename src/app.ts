import { GraphQLServer } from 'graphql-yoga';
//import express from 'express'
//import bodyParser from 'body-parser'
import {makeExecutableSchema} from 'graphql-tools';
import * as mongo from 'mongoose';

import { schema } from "./schema/schema";
const typeDefs = schema.typeDefs;
const resolvers = schema.resolvers;

// TODO define bluebird promises like in microsoft`s example


//import typeDefs from './schema';
//import resolvers from './resolvers/resolvers';

//export const schema = makeExecutableSchema({
//    typeDefs,
//    resolvers

const mongoClient = mongo.connect('mongodb://dbuser:dbpassword@ds261118.mlab.com:61118/react-content',
(err)=>{
    if(err)console.log("error connecting to mongo");
    else console.log("connected to mongo");
});








const server = new GraphQLServer({ typeDefs, resolvers })
server.start(() => console.log('Server is running on localhost:4000'))