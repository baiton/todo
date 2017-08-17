const express = require('express');
const mustache = require('mustache-Express');
const dal = require('./dal.js');
const app = express();
const bodyParser = require('body-parser');
let todoArr = require('./todo.js');                       //The landing zone for uncompleted items
let completeArr = [] ;                   //The landing zone for Completed items


app.engine('mustache', mustache());
app.set('view engine', 'mustache');
app.set('views', __dirname + "/views");

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));
                                                          // using renderObject makes it so that every render will need a location to render and a render object
app.get('/', function(req, res){
  const renderObject = {
    todoArr: dal.getPendingItems(),                                     //the first todoArr is the variable
    completeArr: dal.getCompletedItems()                              //the second todoArr is the array
  }
  res.render('index', renderObject)
})
                                                          // This pushes an object with a new id and task into the array todoArr
app.post('/', function(req, res){
  dal.addItem(req.body.itemAdd);
  res.redirect('/');
})
                                                          //This will remove from the Incomplete list
app.post('/delete/:id', function(req, res){
  dal.removeItem(req.params.id);
  res.redirect('/');
})
                                                          //This will add back to the Incomplete list
app.post('/edit/:id', function(req, res){
  dal.backToIncomplete(req.params.id);
  res.redirect('/');
})

















//starting over from this

// // This gets the faux data from todo.js
// app.get('/', function(req, res){ //get data
//   res.render("home", {todoData: todoData}); //render response data
// })
//
// // this places new data coming from the form post into the same place your todo.js data is going
// app.post('/', function(req, res){
//   let newTodo = req.body
//   // console.log(newTodo.todo);
//   todoData.push(newTodo.todo);  //place new todo data into the same space your todo.js is going which is called todoData.
//   // console.log(todoData);
//   res.redirect("/");
// })
//
//
//
app.set('port', 3000);
app.listen(3000, function(){
  console.log("Application has started at port 3000");
})
