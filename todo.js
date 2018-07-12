// show an unordered list of tasks
var myList = document.querySelector("#tasks");

//add task to list via button click
	
var taskInput = document.querySelector("#new-task");
var inputButton = document.querySelector("button");
inputButton.onclick = function () {

		if (taskInput.value != "") {
			//get input value
			var newTaskValue = taskInput.value;
			// create new list element
			var newTask = document.createElement("li");
			newTask.innerHTML = newTaskValue; 

			// add new element to myList
			myList.appendChild(newTask);

			taskInput.value = "";

			var listItems = document.querySelector("li");
			listItems.onclick = function(){
			listItems.remove();
			};

		} else {
			console.log("empty");
		}

		};



// listItems.onclick = function(){
// 	listItems.remove();
// };
   

	
		


//when task is cicked, remove/strikethrough from the list
	//alt, make a new 'completed' tasks list 