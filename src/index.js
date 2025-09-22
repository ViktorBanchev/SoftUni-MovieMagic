import express from "express"
import handlebars from "express-handlebars"

const app = express();

//setup handlebars
app.engine('hbs', handlebars.engine({
    extname: 'hbs',
}));

app.set('view engine', 'hbs');

app.set('views', 'src/views');

//setup middlewares
app.use(express.static("src/public"));


//routes
app.get("/", (req, res) => {
    res.render('home')
})

app.get("/about", (req, res) => {
    res.render("about")
})


app.listen(5000, () => {
    console.log("Listening to http://localhost:5000")

})

console.log("It works!");


