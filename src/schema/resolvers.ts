import {
  componentSchema,
  pageSchema,
  staticPageSchema,
  IComponentModel,
  IPageModel,
  IStaticPageModel,
} from './schema.mongo';
import mongoose from 'mongoose';
import bluebird from 'bluebird';

import { createUpdateDeleteFactoryUnion } from './resolversFactory';
mongoose.Promise = bluebird;

export const Component =  mongoose.model<IComponentModel>('Component',componentSchema);
export const StaticPage = mongoose.model<IStaticPageModel>('Staticpage',staticPageSchema);
export const Page = mongoose.model<IPageModel>('Page',pageSchema);


import {
  Query as componentQuery,
  componentMutations,
  componentFieldsResolvers,
}  from './resolvers/Component';

import {
  Query as staticPageQuery,
  content as staticPageContent, 
  staticPageFieldsResolvers,
  staticPageMutations,
} from './resolvers/StaticPage';

import {
  Query as pageQuery,
  content as pageContent,
  pageFieldsResolvers,
  pageMutations,
}
  from './resolvers/Page';

export const resolvers =  {
  Query: {
    ...componentQuery,
    ...staticPageQuery,
    ...pageQuery,
  },
  Mutation:{
    ...componentMutations,
    ...staticPageMutations,
    ...pageMutations,
  },
  // fields resolvers
  ...staticPageFieldsResolvers,
  ...pageFieldsResolvers,
  ...componentFieldsResolvers

};
