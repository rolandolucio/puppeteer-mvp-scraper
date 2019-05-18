'use strict';

const scraper = require('./src/app/scraper');

const site = process.env.APP_SITE;
console.log('scrap',site);
scraper.scrap({site, value:22000172,capture:true})
  .then(console.log)
  .catch(x=>{
    console.log('errror<<<<<<<<<<');
    console.log(x);
    //*failReq.push(value);
  });


  //[scrap.parse.1,..promiseN] 