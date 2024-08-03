const mongoose = require("mongoose");//step 4
const Chat = require("./models/chat.js");//step 6

main().then(()=>console.log("connection sucessful"))  // // step 4
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp'); // here whatsapp is the name of database
}

let allChats = [
   {
    from:"Rashid",
    to:"Honey",
    msg:"Knha ho jnnnn",
    created_at: new Date()
   },
   {
    from:"Jason",
    to:"Roy",
    msg:"that is too much better bro",
    created_at:new Date()
   },
   {
    from:"Alex",
    to:"Hales",
    msg:"Wow what a lovely day",
    created_at:new Date()
   },
   {
    from:"Gian",
    to:"sunio",
    msg:"I have a car which is so marvelous",
    created_at:new Date()
   },
   {
    from:"virat",
    to:"Rohit",
    msg:"How about my cover drive?",
    created_at:new Date()
   },
   {
    from:"Modi",
    to:"Putin",
    msg:"I need hundered of raffale.",
    created_at:new Date()
   }
];

Chat.insertMany(allChats);

