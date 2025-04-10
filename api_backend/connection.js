const mongoose = require('mongoose')

async function connectionDB(url) {
    await mongoose.connect(url)
    .then(()=>{
        console.log('MongoDB connected sucessfully!');
        
    })
    .catch((err)=>{
        console.log(`Error in connecting mongoDB : ${err}`);
        
    })
}

module.exports = {
    connectionDB
}
