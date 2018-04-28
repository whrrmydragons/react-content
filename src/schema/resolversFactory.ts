//returns an object containing create update and delete functions
//kind will determine the fields name: kindCreate kindUpdate kindDelete
export const createUpdateDeleteFactoryUnion = (kind:string , model:any) => {
    let res:any ={};
    res["create"+kind] = createFactory(model);
    res["update"+kind] = updateFactory(model);
    res["delete"+kind] = deleteFactory(model);
    return res;
  }
 
//recieves the resource`s kind (lowercased and singular) and returns 
//an object containing both Query functions/resolvers for graphql
export const QueryFactoryUnion = (kind:string,model:any) => {
let res:any = {};
res[kind+"s"] = getAllFactory(model);
res[kind] = getByIDFactory(model);
return res;
}


//creates a query function that returns all instances from a mongoose model
function getAllFactory(model:any){
  return ()=>model.find({});
}
//creates a query function that returns all instances from a mongoose model
function getByIDFactory(model:any){
  return (obj:any, args:any, context:any)=>model.findById(args._id);
}
  //creates a mutation function for creating new instaces in different collections\models
    function createFactory(model:any){
    return (obj:any,args:any,context:any)=> model.create(args.input);
  }
  //creates a mutation function for deleting instaces in different collections\models
  function deleteFactory(model:any){
    return (obj:any,args:any,context:any)=>model.findByIdAndRemove(args._id);
  }
  
  //creates a mutation function for creating updating instaces in different collections\models
  function updateFactory(model:any){
    return (obj:any,args:any,context:any)=> model.findByIdAndUpdate(args._id,args.input);
  }