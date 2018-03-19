const base = process.cwd();
import * as path from "path";
const {fileLoader, mergeTypes} = require("merge-graphql-schemas");
let types = fileLoader(path.join(base,'src/schema/types'));

const merged = mergeTypes(types);
export {merged as typeDefs}