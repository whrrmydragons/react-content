import {
    pageSchema,
    IPageModel
  } from "../../schema.mongo";
import mongoose from 'mongoose';
import {createUpdateDeleteFactoryUnion,QueryFactoryUnion} from '../../resolversFactory';
import {StaticPage} from '../StaticPage';

export const Page = mongoose.model<IPageModel>('Page',pageSchema);

export const Query = QueryFactoryUnion("page",Page);

export const content =  (obj:any)=>{
    return Page.
    findById(obj._id).
    populate('content').
    then((data)=> data && data.content);
  };

export const staticPage = (obj:any)=>{
        return StaticPage.findById(obj.staticPage);
}

  export const pageFieldsResolvers = {
     Page:{ content:content,
      staticPage:staticPage,
     }
  }

  export const pageMutations ={
    ...createUpdateDeleteFactoryUnion("Page",Page),
  }