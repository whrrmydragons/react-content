const { GraphQLServer } = require('graphql-yoga');

const {resolvers,typeDefs} = require('./schema/schema');





const options = { port: 4000 };

const server = new GraphQLServer({ typeDefs, resolvers });

server.start(options, () => console.log('Server is running on localhost:' + options.port))