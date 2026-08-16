const { Schema , model} = require('mongoose');
const {scrypt, randomBytes, scryptSync} = require('crypto');
const {createTokenForUser} = require("../services/authentication");
const { promisify } = require('util');

const scryptAsync = promisify(scrypt);

const userSchema = new Schema({
    fullName : {
        required:true,
        type:String
    },
    email : {
        required : true,
        type:String,
        unique : true
    },
    password : {
        required : true,
        type : String
    }
},{timestamps : true});


userSchema.pre('save', function(){
    const user = this;

    if(!user.isModified("password")) return;

    const salt =randomBytes(16).toString('hex');

    const derivedKey = scryptAsync(user.password,salt,64);

        const hash = derivedKey.toString('hex');
        user.password = `${salt}:${hash}`;

    });

userSchema.static('matchPasswordAndGenerateToken',async function(email,password){
    const user = await this.findOne({email});

    if(!user) throw new Error('User not found!');

    const hashedPassword = user.password;
    const [salt, storedHash] = user.password.split(':');

    const derivedKey = scryptSync(password,salt,64);

    const newGeneratedHash = derivedKey.toString('hex');
    const finalGenerateHashedPass = `${salt}:${newGeneratedHash}`;

    if(hashedPassword !== finalGenerateHashedPass) throw new Error("Incorrect Password");
    

    const token = createTokenForUser(user);
    return token;
});



const user = model('user',userSchema);

module.exports = user;