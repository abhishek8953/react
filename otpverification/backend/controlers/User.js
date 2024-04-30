import User from '../models/userDe.js'

function signup(req,res){
    let name=req.body
    console.log(req.body);
    // email should not exist already check


    const newUser = new User({email: req.body.email,pass:req.body.pass });

    newUser.save().then(()=>{
        // res.send({code:200, message:"signup sucess"})
        console.log("sucessfuly vave data");
    }).catch((err)=>{
        res.send({code:500, message:"signup error"})
    })

    res.send("success");
}

export default signup;