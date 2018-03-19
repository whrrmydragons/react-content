const base = process.cwd();
const path = require('path');
const {fileLoader,mergeResolvers,} = require('merge-graphql-schemas');
const resolvers = fileLoader(path.join(base, '/src/schema/resolvers'));
const merged = mergeResolvers(resolvers);
export  { merged as resolvers};