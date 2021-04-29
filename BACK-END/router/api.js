const router = require('express').Router();
const JWT = require('jsonwebtoken');

const userModel = require('../models/user'); //importing user model

const verifyToken  = require('../Re-usable_modules/JWT');

const nodemailer = require('nodemailer');

const smtpTransport = nodemailer.createTransport({                                            service: "Gmail",
    auth: {
        user: "mcspraint954@gmail.com",
        pass: "Iammcspraint"                                                                }
});
                                                                                        var rand,mailOptions,host,prot,user,link;


router.post('/register' ,async (req,res)=>{
	const userAlreadySaved = await userModel.findOne({email: req.body.email});
	if(!userAlreadySaved){

	rand=Math.floor((Math.random()*100)+54);                                                host=req.get('host');
        prot=req.protocol;
        link=prot+"://"+host+"/api/verify?id="+rand;

        mailOptions={
                from: "mcspraint954@gmail.com",                                                         to:req.body.email,
                subject:"Please confirm your Eazykart account",
                html:"Hello "+req.body.name+",<br/>"+req.body.password+"-This is your password and please click on the link to verify the account<br/><a href="+link+">click here to verify</a>"};
        smtpTransport.sendMail(mailOptions, async function(error,response){             
                try{                                                                                          user= await new userModel(req.body);

			res.send("A link has been sent to your email,click on that link to verify and create your account successfully!");
			console.log("A link has been sent to your email,click on that link to verify and create your account successfully!"+link);
		}
		catch(error){
			res.send(error);                                                                 console.log(error);                                                            }
        })}
/*	const user = await new userModel(req.body);
	try{
		await user.save();
		let payload= {subject: user._id};
		let signed_token= JWT.sign(payload , 'secretKey');

		console.log("user saved successfully with token: "+signed_token);
		
		res.status(200).send({signed_token});
	}
	catch{
		(error)=>{
			console.log(error);
			res.send(error);
		}
	}
	}*/
	else{
		let Er = {Error: "Email is already registered"};
		res.status(406).send({Er});
		console.log("Email is already registered");
	}

});


router.get('/verify',async function(req,res){
	console.log(req.protocol+"://"+req.get('host'));
	if((req.protocol+"://"+req.get('host'))==(prot+"://"+host)){
        console.log("Domain is matched. Information is from Authentic email"); 
		if(req.query.id==rand){   
			try{                                                                                          
			await user.save();
			console.log(user);                                       
			res.status(200).send("Congratulation!<br/>Welcome to Eazykart.<br/>Your account with email "+mailOptions.to+" is created successfully....");     
		console.log("Email is verified.");
			}
			catch(error){
			res.status(401).send("Failed to create the account");    
		
			}           
		}
		else{                                                                                           res.status(400).send("<h1>Bad Request</h1>");
			console.log("Email is not verified.")                                              }
	}
	else{                                                                                          res.status(403).send("<h1>Request is from unknown source");
		}
	});

router.post('/login' ,async (req,res)=>{
       const user_presence = await userModel.findOne({email:req.body.email});               if(user_presence){
                console.log("user found");
                if(user_presence.password===req.body.password){ 

			let payload= {subject: user_presence._id};
			let signed_token= JWT.sign(payload, 'secretKey');

			res.status(200).send({signed_token});
			console.log("User logged in with token: "+signed_token);


			/*  req.session.user_presence=user_presence;
                       const show_products=await productModel.find();
                        try{
                        
		    		res.render('resource', {show_products:show_products});
			}
                        catch(error){res.status(502).send("error while showing");
                        }                        */                                                       }
                else{                                                                                           res.status(401).send("Incorrect password!");                                                        console.log("Incorrect password!");                                             }                                                                               }                                                                           else{                                                                                           res.status(401).send("Incorrect email id!");                                                        console.log("Incorrect email id!");                                             }
	

});

router.get('/events' , (req,res)=>{

	let events = [                                                                            {
      "_id": "1",
      "name": "Auto Expo",
      "description": "lorem ipsum",
      "date": "2012-04-23T18:25:43.511Z"
    },
    {
      "_id": "2",
      "name": "Auto Expo",
      "description": "lorem ipsum",
      "date": "2012-04-23T18:25:43.511Z"
    },
    {
      "_id": "3",
      "name": "Auto Expo",
      "description": "lorem ipsum",
      "date": "2012-04-23T18:25:43.511Z"
    },
    {
      "_id": "4",
      "name": "Auto Expo",
      "description": "lorem ipsum",
      "date": "2012-04-23T18:25:43.511Z"
    },
    {
      "_id": "5",
      "name": "Auto Expo",
      "description": "lorem ipsum",
      "date": "2012-04-23T18:25:43.511Z"
    },
    {
      "_id": "6",
      "name": "Auto Expo",
      "description": "lorem ipsum",
      "date": "2012-04-23T18:25:43.511Z"
    }
  ];
	res.json(events);
});

router.get('/special',verifyToken,(req,res)=>{    
	let events = [                                                                            {
      "_id": "1",
      "name": "Auto Expo",
      "description": "lorem ipsum",
      "date": "2012-04-23T18:25:43.511Z"
    },
    {
      "_id": "2",
      "name": "Auto Expo",                                                                    "description": "lorem ipsum",                                                           "date": "2012-04-23T18:25:43.511Z"
    },
    {
      "_id": "3",                                                                             "name": "Auto Expo",
      "description": "lorem ipsum",
      "date": "2012-04-23T18:25:43.511Z"
    },
    {
      "_id": "4",                                                                             "name": "Auto Expo",
      "description": "lorem ipsum",
      "date": "2012-04-23T18:25:43.511Z"
    },
    {
      "_id": "5",
      "name": "Auto Expo",
      "description": "lorem ipsum",
      "date": "2012-04-23T18:25:43.511Z"
    },
    {
      "_id": "6",
      "name": "Auto Expo",
      "description": "lorem ipsum",
      "date": "2012-04-23T18:25:43.511Z"
    }
  ];

	res.json(events);                                                               });



module.exports = router;
