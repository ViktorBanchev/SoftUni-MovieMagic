import express from "express"
import handlebars from "express-handlebars"
import mongoose from "mongoose";

import routes from "./routes.js";
import cookieParser from "cookie-parser";
import authMiddleware from "./middlewares/authMiddleware.js";


const app = express();

const url = 'mongodb://localhost:27017';
try {
    await mongoose.connect(url, {
        dbName: "movie-magic-sept2025"
    })

    console.log("Successfully connected to DB");
    
} catch (error) {
    console.error("Could not connect to DB, ", error.message)
}


//setup handlebars
app.engine('hbs', handlebars.engine({
    extname: 'hbs',
    runtimeOptions: {
        allowProtoMethodsByDefault: true,
        allowProtoPropertiesByDefault: true
    }
}));
app.set('view engine', 'hbs');
app.set('views', 'src/views');


//setup middlewares
app.use(express.static("src/public"));

//--- Parse form data from request
app.use(express.urlencoded());

//add cookie-parser
app.use(cookieParser());

//
app.use(authMiddleware);

//routes
app.use(routes);


app.listen(5000, () => { console.log("Listening to http://localhost:5000") })