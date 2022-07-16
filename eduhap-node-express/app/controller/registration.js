const UserModel = require('../model/registration')


exports.registration = async (req,res)=>{
    {  
        // const {fullname,email,stateofresidence,bio} = req.body         
        if(!req.body.fullname || !req.body.email || !req.body.stateofresidence || !req.body.bio || !req.body.standard || !req.body.board){
            return res.status(406).send({Status:false,message:"Content can not be empty!"})
        }
        const user = new UserModel({
            fullname: req.body.fullname,
            email: req.body.email,
            stateofresidence: req.body.stateofresidence,
            bio: req.body.bio, 
            standard:req.body.standard,
            board:req.body.board,
        });     
        await user.save().then(data => {
            res.send({
                message:"User created successfully!!",
                user:data
            });
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating user"
            });
        });
    }
};


exports.otprequest = async (req,res)=>{
    {
    
//     if(!req.body.mobilenumber ){
//         return res.status(406).send({Status:false,message:"Content can not be empty!"})
//     }
// }
// const user = new UserModel({
//     mobilenumber: req.body.mobilenumber,

const {mobilenumber} = req.body;

    var otp = Math.random();
    otp = otp * 1000000;
    otp = parseInt(otp);
   

    const x = new UserModel({
        mobilenumber:req.body.mobilenumber,
        otp:otp

    });   

//     await x.save().then(data => {
//         res.send({
//             message:"otp send successfully!!",
//             x:data + otp

//         });
//     }).catch(err => {
//         res.status(500).send({
//             message: err.message || "Some error occurred while creating user"
//         });
//     });

    
// };     
await x.save().then(data => {
    res.send({
        message:"User created successfully!!",
        user:data
    });
}).catch(err => {
    res.status(500).send({
        message: err.message || "Some error occurred while creating user"
    });
});
}
}