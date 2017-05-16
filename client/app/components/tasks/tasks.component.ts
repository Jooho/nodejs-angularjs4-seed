/**
 * Created by jooho on 5/16/17.
 */


import {Component} from "@angular/core";
import {TaskService} from "../../services/task.service";
import {Task} from "../../models/Task";
@Component({
    moduleId: module.id,
    selector: 'tasks',
    templateUrl: 'tasks.component.html'
})

export class TaskComponent{
    tasks: Task[];
    title: string;

    constructor(private taskService :TaskService){
        this.taskService.getTasks()
            .subscribe(tasks => {
                this.tasks=tasks;
            })
    }

    addTask(event : Event){
        event.preventDefault();
        var newTask = {
            title: this.title,
            isDone: false
        }

        this.taskService.addTask(newTask)
            .subscribe(newTask =>{
                this.tasks.push(newTask);
                this.title='';
            })


    }

    deleteTask(id :string){
        var tasks=this.tasks;
        this.taskService.deleteTask(id)
            .subscribe(data => {
                if(data.n == 1){
                    for(var i=0; i < tasks.length; i++){
                        if(tasks[i]._id == id) {
                            tasks.splice(i,1);
                        }
                    }
                }
            })
    }

    updateTask(task : Task){
        var _task={
            _id: task._id,
            title: task.title,
            isDone: !task.isDone
        }
        this.taskService.updateTask(_task).subscribe(data =>{
                task.isDone=!task.isDone;
            }
        )
    }
}
