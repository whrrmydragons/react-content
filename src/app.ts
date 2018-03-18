import { GraphQLServer } from 'graphql-yoga';
//import express from 'express'
//import bodyParser from 'body-parser'
import {makeExecutableSchema} from 'graphql-tools';
import {connect} from 'mongoose';

// TODO define bluebird promises like in microsoft`s example


//import typeDefs from './schema';
//import resolvers from './resolvers/resolvers';

//export const schema = makeExecutableSchema({
//    typeDefs,
//    resolvers

const mongoClient = connect('mongodb://dbuser:dbpassword@ds111319.mlab.com:11319/typescript-test',
(err)=>{
    if(err)console.log("error connecting to mongo");
    else console.log("connected to mongo");
});



const typeDefs = `
  type Query {
    hello(name: String): String!
    components():[Component]
    component(id:ID!):Component
    pages():[Page]
    page(id:ID!):Page
    staticPages():[StaticPage]
    staticPage(id:ID!):StaticPage
    templates():[Template]
    template(id:ID!):template
  }

  type Component{
      _id:String!
      name:String!
      component:String!
      data:String!
      props:[String]
  }

  type Page{
      _id:String!
      title:String!
      staticPage:StaticPage!
      content:[]
  }

  type Assets{
      backgroundImageHref:String
      backgroundImageBase64:String
      logoHref:String
      logoBase64:String
  }

  type StaticPage{
      _id:String!
      name:String!
      assets:Assets
      template:[]
  }
  type Template{
      _id:String
      template:String
      name:String
  }
`

const resolvers = {
  Query: {
    hello: (_:any, { name }:any) => `Hello ${name || 'World'}`,
  },
}

const server = new GraphQLServer({ typeDefs, resolvers })
server.start(() => console.log('Server is running on localhost:4000'))