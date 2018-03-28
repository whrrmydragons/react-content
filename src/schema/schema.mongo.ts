import mongoose,{Schema} from 'mongoose';

export interface IComponentModel extends mongoose.Document {
    _id:string;
    name:string;
    type:string;
    data:string;
    props:[string];
    [propName:string]:any;
  }

export interface IPageModel extends mongoose.Document {
    _id:string;
    name:string;
    content:[string];
    [propName:string]:any;
  }
export interface IStaticPageModel extends mongoose.Document {
    _id:string;
    name:string;
    assets:any;
    content:[string];
    [propName:string]:any;
  }


export const componentSchema = new 
Schema({
        name:String,
        type:String,
        data:String,
        props:[String],
    });


export const staticPageSchema = new 
Schema({
        name:String,
        assets:{
            backgroundImage:String,
            mainIcon:String,
            footerIcon:String,
            otherImages:[String],
        },
        content:[{ type: Schema.Types.ObjectId, ref: 'Component' } ],
    });
    

export const pageSchema = new 
Schema({
        title:String,
        staticPage:{type: Schema.Types.ObjectId, ref: 'Staticpage' },
        content:[{ type: Schema.Types.ObjectId, ref: 'Component' } ],
    });