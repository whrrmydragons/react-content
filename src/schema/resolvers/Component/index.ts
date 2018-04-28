import {
    componentSchema,
    IComponentModel
  } from "../../schema.mongo";
import mongoose from 'mongoose';

import {createUpdateDeleteFactoryUnion,QueryFactoryUnion} from '../../resolversFactory';




export const Component =  mongoose.model<IComponentModel>('Component',componentSchema);

export const children =  (obj:any) => {
  return Component.
  findById(obj._id).
  populate('children').
  then((data)=> data && data.children);
}

export const Query = QueryFactoryUnion("component",Component);

export const componentMutations ={
  ...createUpdateDeleteFactoryUnion("Component",Component),
}

export const componentFieldsResolvers = {
  Component:{ children:children,
  }
}