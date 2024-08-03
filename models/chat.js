const mongoose = require("mongoose");//step 4

const chatSchema = ({
    from:{
        type:"String",
        required:true,
    },
    to:{
        type:"String",
        required:true,
    },
    msg:{
        type:"String",
        maxLength:50,
    },
    created_at:{
        type:Date,
        required:true,
    }
});

const Chat = mongoose.model("Chat",chatSchema);

module.exports = Chat;