import {expect} from 'chai';
import jsdom from 'jsdom';
import fs from 'fs';

describe('our first test', ()=>{
  it('it should pass', ()=>{
    expect(true).to.equal(true);
  });
});

describe('index.html', ()=>{
  it('it should say hello', (done)=>{
    const index = fs.readFileSync('./src/index.html', "utf-8");
    jsdom.env(index, function(error, window){
     const h1 = window.getElementsByTagName('h1')[0];
     expect('h1.innerHTML').to.equal('Hello world!');
     done();
     window.close();
    });
  });
});