import { Component, OnInit } from '@angular/core';
// Create Todo interface
interface Todo {
  task: string,
  completed: boolean
}
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})

export class TodoComponent implements OnInit {
  todos : Todo [] = [
    {task: 'Feed Cats', completed: true},
    {task: 'Clean Out Dishwasher', completed: true},
    {task: 'exercise', completed: true},
    {task: 'do laundry', completed: false},
    {task: 'make a cup of tea', completed: true},
    {task: 'write down three items that I want to get done today', completed: true},
  
  ]
//   constructor() { }

  public newTask:string; 
  public filterString:string = "";
  completeTask = function(todo: Todo): void {
      todo.completed = true;
  }
  deleteTask = function(todo: Todo): void {
    let i = this.todo.findIndex(obj => obj.task === todo.task);
    this.todo.splice(i,1);
  }
  addToList = function(newTask): void{
    console.log("adding");
    if (this.newTask.trim() != '') { 
      let newTodo:Todo = {task: this.newTask,completed:false};
      this.todo.push(newTodo);
      this.newTask = '';
    }
  }
  getFilteredResults(): Todo[] {
    return this.todos.filter((todo => {
      return todo.task.toLowerCase().includes(this.filterString.toLowerCase());
    }));
  }

  constructor() { }
  ngOnInit(): void {
  }
}
