import { expect } from 'chai';

import { hello } from '../src/server'

import * as f from 'mocha';

describe('Hello function', () =>{

    it('should return hello world',()=>{
        const result = hello();
        expect(result).to.equal('Hello world!');
    });
});


