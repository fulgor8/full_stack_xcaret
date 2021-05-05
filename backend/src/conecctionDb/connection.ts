import mongoose,{ConnectionOptions} from 'mongoose';
import config from './config';
const CONNECTION_URL = `mongodb+srv://${config.USERNAMEDB}:${config.PASSWORDDB}@cluster0.xdxr5.mongodb.net/${config.DATABASE}?retryWrites=true&w=majority`;
(async()=>{
    const mongooseOption:ConnectionOptions = {
        useNewUrlParser: true,  
        useUnifiedTopology: true 
    }
    await mongoose.connect(CONNECTION_URL,mongooseOption).then(() => console.log("connected"))
    .catch((error) => console.log(error.message));
})()