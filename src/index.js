import express from "express"
import handlebars from "express-handlebars"

const app = express();

//setup handlebars
app.engine('hbs', handlebars.engine({
    extname: 'hbs',
}));

app.set('view engine', 'hbs');

app.set('views', 'src/views');

//routes
app.get("/", (req, res) => {
    res.render('home', { layout: false })
})


app.listen(5000, () => {
    console.log("Listening to http://localhost:5000")

})

console.log("It works!");


