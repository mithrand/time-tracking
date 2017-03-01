/**
 * Created by Antonio on 25/02/2017.
 */

// IMPORTS
import * as React from 'react';
import TaskList from './Tasks/TaskList';
import ToggleTaskFormButton from './Tasks/ToggleTaskFormButton';
import ITask from './Model/ITask';
import {TaskAPI,ITaskAPI} from './API/TaskAPI';

// REQUIRES
let UUID = require('uuid-js');

// INTERFACES
interface ITaskDashboardState {
    tasks: ITask[];
}

// CLASES
class TaskDashboard extends React.Component <{}, {}> {

    state: ITaskDashboardState;
    private server: ITaskAPI;

    constructor() {
        super();
        this.state = { tasks: []};
        this.server = new TaskAPI();
        this.server.getTasks()
        .then((res: any) => {
            this.setState( Object.assign({}, this.state, {tasks: res}));
        });
    }

    //#region CRUD

    updateTask = (newTask: ITask) => {
        let tasks = this.state.tasks.map((task) => {
            if (task.id === newTask.id) {
                return newTask;
            }else {
                return task;
            }
        });
        this.server.updateTask(newTask).then((res: any) => {
            console.log('update task');
            this.setState(Object.assign({}, this.state, {tasks: tasks}));
        });

    };

    deleteTask = (id: string) => {
        let tasks = this.state.tasks
            .filter((task) => {
                return task.id !== id;
            });
        this.server.deleteTask(id).then((res: any) => {
            console.log('delete task');
            this.setState(Object.assign({}, this.state, {tasks: tasks}));
        });

    };

    createTask = (newTask: ITask) => {
        let tasks: ITask[];
        newTask.id = UUID.create().hex;
        tasks = this.state.tasks.concat([newTask]);
        this.server.createTask(newTask).then((res: any) => {
            console.log('create task');
            this.setState(Object.assign({}, this.state, {tasks: tasks}));
        });
    };

    //#endregion

    public render() {
      return (
          <div id="main" className="main ui">
              <h1 className="ui dividing centered header">Timers Dashboard</h1>
              <div className="ui three column centered grid">
                  <div className="column">
                      <TaskList
                          updateTask = {this.updateTask}
                          deleteTask = {this.deleteTask}
                          tasks = {this.state.tasks}
                      />
                      <ToggleTaskFormButton
                          onCreateTask ={this.createTask}
                          editFormOpen = {false}
                      />
                  </div>
              </div>
          </div>
      );
    }

}

// DEFAULT EXPORT
export default TaskDashboard;