let todoArr = require("./todo.js");
let completeArr = {};                   //The landing zone for Completed items

function addItem(item){
  let newItem = {id:(todoArr.length+1), task: item, completed: false};
  todoArr.push(newItem);
  console.log(todoArr);

}

function removeItem(itemId){
  return todoArr.map(function(item){
    if(item.id == itemId){  // 2 parter this will assign false values to true
      item.completed = true // and if there is no completed value at all it makes a completed value and marks it true
      console.log(item);
      return item
    } else {
      return item
    }
  })
}
function backToIncomplete(itemId){
  return todoArr.map(function(item){
    if(item.id == itemId){  // 2 parter this will assign false values to true
      item.completed = false // and if there is no completed value at all it makes a completed value and marks it true
      console.log(item);
      return item
    } else {
      return item
    }
  })
}

function getPendingItems(){             //give obect that isn't complete
  return todoArr.filter(function(item){
    return !item.completed
  })
}

function getCompletedItems(){           //give object that is complete
  return todoArr.filter(function(item){
    return item.completed
  })
}


module.exports= {
    backToIncomplete: backToIncomplete,
    addItem: addItem,
    removeItem:removeItem,
    getCompletedItems: getCompletedItems,
    getPendingItems: getPendingItems
}
