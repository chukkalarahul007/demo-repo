// const express=require("express");

// const app=express();
// app.use(express.json());

// app.post("/health-checkup",(req,res)=>{

//     const kidneys=req.body.kidneys;
//     const kidneyLength=kidneys.length;

//     res.send("You have "+kidneyLength+" Kidneys");
// });

// //global catch
// app.use((err,req,res,next)=>{
//     res.status(500).send("An Internal Server Error Occured 😢");
// });

// app.listen(3000);

// ZOD

// const z=require("zod");

// function validate(email){

//     const schema= z.string().email()


//    return schema.parse(email);
// }

// const a=validate("ASDA@gmail.");
// console.log(a);