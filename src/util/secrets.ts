import dotenv from 'dotenv';

import fs from 'fs';

if(fs.existsSync(".env")) dotenv.config({path:".env"});
else dotenv.config({path: ".env.example"});

export const ENIRONMENT = process.env.NODE_ENV;