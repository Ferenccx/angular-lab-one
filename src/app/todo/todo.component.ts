import { Component, OnInit } from '@angular/core';
//must include a Todo Interface
interface Todo {
  task: string;
  completed: boolean;

}
// must include a component call "to-do"

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})

//component must add an array of sample todo objects
export class TodoComponent implements OnInit {
  todos : Todo [] = [

    {task: 'Feed Cats', completed: true},
    {task: 'Clean Out Dishwasher', completed: true},
    {task: 'exercise', completed: true},
    {task: 'do laundry', completed: false},
    {task: 'make a cup of tea', completed: true},
    {task: 'write down three items that I want to get done today', completed: true},
  
  ]
  constructor() { }

  ngOnInit(): void {
  }
  //create a new function
completetask(todo){
  todo.completed=true
}
}
//getFilteredResults

// //getFilteredResults(): Todo[] {
//   return this.displayedTodos.filter((todo) => {
//     // convert the todo.task to lowercase
//     const taskLower = todo.task.toLowerCase();
//     // convert the filter input to lowercase
//     const filterLower = this.filter.toLowerCase();
//     // check to set if the filter input is inside of the task
//     // string
//     return taskLower.includes(filterLower);
//   });
// }
// //