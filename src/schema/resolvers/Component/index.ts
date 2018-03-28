import {
    componentSchema,
    IComponentModel
  } from "../../schema.mongo";
import mongoose from 'mongoose';
import {createUpdateDeleteFactoryUnion,QueryFactoryUnion} from '../../resolversFactory';

export const Component =  mongoose.model<IComponentModel>('Component',componentSchema);

export const Query = QueryFactoryUnion("component",Component);

export const componentMutations ={
  ...createUpdateDeleteFactoryUnion("Component",Component),
}
