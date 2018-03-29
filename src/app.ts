const { GraphQLServer } = require('graphql-yoga');

const {resolvers,typeDefs} = require('./schema/schema.graphql');


//TODO move to another file
import  mongoose from 'mongoose';
mongoose.set('debug',true);

mongoose.connect("mongodb://dbuser:dbpassword@ds261118.mlab.com:61118/react-content");

export const Schema = mongoose.Schema;
export {mongoose as mongoose};



const options = { port: 4000 };

const server = new GraphQLServer({ typeDefs, resolvers });




server.start(options, () => console.log('Server is running on localhost:' + options.port))

/**
 * myMethod
 * TODO:add mongoose validators
 * ! important
 * ? question 
 * @param parameter
 */