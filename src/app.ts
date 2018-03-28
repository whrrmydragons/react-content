const { GraphQLServer } = require('graphql-yoga');

const {resolvers,typeDefs} = require('./schema/schema.graphql');

//TODO move to another file
import  mongoose from 'mongoose';
mongoose.set('debug',true);

mongoose.connect("mongodb://dbuser:dbpassword@ds261118.mlab.com:61118/react-content");

export const Schema = mongoose.Schema;
export {mongoose as mongoose};

/*StaticPage.create({
    name:"a name",
    assets:{
        backgroundImage:"something",
        mainIcon:"Something",
        footerIcon:"SomethingEsle",
        otherImages:["a","b"]
    },
    content:["5aa4cafcf36d28237f19be88","5aa4cafcf36d28237f19be88"],

});*/


const options = { port: 4000 };

const server = new GraphQLServer({ typeDefs, resolvers });

server.start(options, () => console.log('Server is running on localhost:' + options.port))