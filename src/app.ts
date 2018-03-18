import { GraphQLServer } from 'graphql-yoga';
//import express from 'express'
//import bodyParser from 'body-parser'
import {makeExecutableSchema} from 'graphql-tools';
import mongoose from 'mongoose';

import typeDefs from './schema';
import resolvers from './resolvers';

export const schema = makeExecutableSchema({
    typeDefs,
    resolvers
})

const mongoClient = mongoose.connect('mongodb://dbuser:dbpassword@ds111319.mlab.com:11319/typescript-test');


const server = new GraphQLServer({
    typeDefs,
    resolvers,
    context: req=>({
        ...req,
        
    })
})