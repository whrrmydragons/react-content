import {
    staticPageSchema,
    IStaticPageModel
  } from "../../schema.mongo";
import mongoose from 'mongoose';
import {createUpdateDeleteFactoryUnion,QueryFactoryUnion} from '../../resolversFactory';

export const StaticPage =  mongoose.model<IStaticPageModel>('Staticpage',staticPageSchema);

export const Query =QueryFactoryUnion("staticPage",StaticPage);

export const content =  (obj:any) => {
    return StaticPage.
    findById(obj._id).
    populate('content').
    then((data)=> data && data.content);
  }

export const staticPageFieldsResolvers = {
    StaticPage:{
        content:content,
    }
}

export const staticPageMutations ={
    ...createUpdateDeleteFactoryUnion("StaticPage",StaticPage),
  }