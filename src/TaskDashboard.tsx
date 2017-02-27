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
    //#region STATICS

    // private static getMoqs(): ITask[] {
    //     let array: ITask[] = [];
    //     array.push({
    //         title: 'Mow the lawn',
    //         project: 'House Chores',
    //         elapsed: 5456099,
    //         id: '0a4a79cb-b06d-4cb1-883d-549a1e3b66d7'
    //     });
    //     array.push({
    //         title: 'Clear paper jam',
    //         project: 'Office Chores',
    //         elapsed: 1273998,
    //         id: 'a73c1d19-f32d-4aff-b470-cea4e792406a',
    //         runningSince: 1456225941911
    //     });
    //     array.push({
    //         title: 'Ponder origins of universe',
    //         project: 'Life Chores',
    //         id: '2c43306e-5b44-4ff8-8753-33c35adbd06f',
    //         elapsed: 11750
    //     });
    //     return array;
    // }

    //#endregion

    constructor() {
        super();
        this.state = { tasks: []};
        this.server = new TaskAPI();
        this.server.getTasks(this.onSucces);
    }

    onSucces = (tasks: ITask[]): ITask[] => {
        let state = Object.assign({}, this.state, {tasks: tasks});
        this.setState(state);
        return tasks;
    };

    //#region CRUD

    updateTask = (newTask: ITask) => {
        let tasks = this.state.tasks.map((task) => {
            if (task.id === newTask.id) {
                return newTask;
            }else {
                return task;
            }
        });

        this.setState(Object.assign({}, this.state, {tasks: tasks}));
    };

    deleteTask = (id: string) => {
        let tasks = this.state.tasks
            .filter((task) => {
                return task.id !== id;
            });

        this.setState(Object.assign({}, this.state, {tasks: tasks}));
    };

    createTask = (newTask: ITask) => {
        newTask.id = UUID.create();
        let tasks = this.state.tasks.concat([newTask]);
        this.setState(Object.assign({}, this.state, {tasks: tasks}));
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