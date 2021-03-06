/**
 * Created by jooho on 5/16/17.
 */

import {Injectable} from "@angular/core";
import {Http,Headers} from "@angular/http";
import "rxjs/add/operator/map"
import {Task} from "../models/Task";
import {logging} from "selenium-webdriver";
@Injectable()
export class TaskService{
    constructor(private http:Http){
        console.log('Task Initialized....')
    }

    getTasks(){
        return this.http.get('/api/tasks')
            .map(res => res.json());
    }

    addTask(newTask : Task) {
        var headers= new Headers();
        headers.append('Content-Type', 'application/json');

        return this.http.post('/api/task/', JSON.stringify(newTask),{headers:headers} )
            .map(res => res.json());

    }

    deleteTask(id :string){
        return this.http.delete('/api/task/'+ id )
            .map(res => res.json());
    }

    updateTask(task: Task){
        var headers = new Headers();
        console.log(task);
        headers.append('Content-Type','application/json');
        return this.http.put('/api/task/'+ task._id, JSON.stringify(task), {headers:headers} )
            .map(res => res.json());
    }
}