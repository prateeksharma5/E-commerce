const mongoose= require("mongoose")

const dotenv= require("dotenv")

const PORT=process.env.PORT || 5555;

dotenv.config();

const app= require("./backend/app");

//handling uncaught Exception
process.on("uncaughtException",(err)=>{
  console.log(`Error: ${err.message}`);
  console.log(`shutting down the server due to uncaught Exception`)

})
   
mongoose.connect('mongodb://utogmwael8wyb5ifddjq:9nKuh7LmCH9uCNuoOwz4@n1-c2-mongodb-clevercloud-customers.services.clever-cloud.com:27017,n2-c2-mongodb-clevercloud-customers.services.clever-cloud.com:27017/barquy7iq6rxmao?replicaSet=rs0')
  .then(()=>console.log("Database is connected... "))
  .catch((err)=>{
    console.log(err)
  });



const server=app.listen(PORT,()=>{
    console.log(`server running on PORT ${PORT}`)
})

//unhandaled promise  rejection
process.on("unhandledRejection",err=>{
  console.log(`erroe: ${err.message}`);
  console.log(`shutting down the server due to unhandled promise rejection`);
  server.close(()=>{
    process.exit(1);
  })
})



