const express=require("express");
const app=express();
const path = require('path');
const mongoose=require("mongoose");
const session = require('express-session');
const MONGO_URL = "mongodb://127.0.0.1:27017/annual";
// app.use(express.json());
app.use(session({ secret: 'your_secret_key', resave: false, saveUninitialized: true }));
async function main() {
    await mongoose.connect(MONGO_URL);
}

main()
    .then(() => {
        console.log("Connected to DB");
    })
    .catch((err) => {
        console.log(err);
    });

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

app.get("/login",(req,res)=>{
    res.render("login");
});

app.get("/login",(req,res)=>{
    res.render("login");
});

app.listen(8080, () => {
    console.log("Server is listening on port 8080");
});

app.get('/',(req,res)=>{
    res.redirect("home");
})

app.get('/home',(req,res)=>{
    res.render("home.ejs");
})

app.get('/about',(req,res)=>{
    res.render("about.ejs");
})

app.get('/admin',(req,res)=>{
    res.render("admin.ejs");
})

app.get('/contact',(req,res)=>{
    res.render("contact.ejs");
})

app.get('/signup',(req,res)=>{
    res.render("signup.ejs");
})

app.post('/login',(req, res) => {
   res.redirect('admin');
});

app.get('/student',(req,res)=>{
    const reportData = req.session.reportData;
    res.render("student.ejs", { reportData });
})


app.get('/student2',(req,res)=>{
    res.render("student2.ejs");
})

app.post('/student2',(req, res) => {
    req.session.reportData = req.body;
    res.redirect('/successful');
 });

 app.get('/successful',(req,res)=>{
    res.render("successful.ejs");
})

app.get('/feature',(req,res)=>{
    res.render("feature.ejs");
})