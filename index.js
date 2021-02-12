// Arrays to keep track of each task's state
const taskTitles = [];
const taskComplete = [];
const taskDescriptions = [];

// Create a new task by adding to the arrays
// A new task will be created as incomplete
function newTask(title, description) {
  const task = {

    title: title,
    description: description,
    complete: false,

    logState: function(){
      console.log(`${task.title} has${task.complete ? " " : " not "}been completed`);
    },

    markCompleted: function(){
      this.complete = true;
    }

  };

  return task
}

// DRIVER CODE BELOW

const task1 = newTask("Clean Kitchen", "Wash, dry and put away all dishes");
const task2 = newTask("Do Laundry", "Wash, dry and fold all clothes");
const tasks = [task1, task2];

task1.logState()
console.log(`Task: ${task1.title} involes having to ${task1.description} and it's completion is ${task1.complete}`)
task1.markCompleted()
task1.logState()
console.log(`Task: ${task1.title} involes having to ${task1.description} and it's completion is ${task1.complete}`)
