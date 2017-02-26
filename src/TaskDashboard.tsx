/**
 * Created by Antonio on 25/02/2017.
 */

import * as React from 'react';
import TaskList from './Tasks/TaskList';
import ToggleTaskFormButton from './Tasks/ToggleTaskFormButton';
import ITask from './Tasks/ITask';

class TaskDashboard extends React.Component <{}, {}> {

    state: ITask[];

    constructor(props: any) {
        super(props);
        this.state = this.getMoqs();
    }

    //#region CRUD

    UpdateTask = (newTask: ITask) => {
        let tasks = this.state.map((task) => {
            if (task.id === newTask.id) {
                return newTask;
            }else {
                return task;
            }
        });

        this.setState(tasks);
    };

    DeleteTask = (id: string) => {
        let tasks = this.state
            .filter((task) => {
                return task.id !== id;
            });

        this.setState(tasks);
    };

    CreateTask = (newTask: ITask) => {
        let tasks = this.state.concat([newTask]);
        this.setState(tasks);
    };

    //#endregion

    public render() {
      return (
          <div id="main" className="main ui">
              <h1 className="ui dividing centered header">Timers Dashboard</h1>
              <div className="ui three column centered grid">
                  <div className="column">
                      <TaskList
                          onUpdateTask = {this.UpdateTask}
                          onDeleteTask = {this.DeleteTask}
                          tasks = {this.state}
                      />
                      <ToggleTaskFormButton editFormOpen={false}/>
                  </div>
              </div>
          </div>
      );
    }

    //#region PRIVATE_METHODS

    private getMoqs(): ITask[] {
        return [
            {
                title: 'Mow the lawn',
                project: 'House Chores',
                elapsed: 5456099,
                id: '0a4a79cb-b06d-4cb1-883d-549a1e3b66d7'
            },
            {
                title: 'Clear paper jam',
                project: 'Office Chores',
                elapsed: 1273998,
                id: 'a73c1d19-f32d-4aff-b470-cea4e792406a'
            },
            {
                title: 'Ponder origins of universe',
                project: 'Life Chores',
                id: '2c43306e-5b44-4ff8-8753-33c35adbd06f',
                elapsed: 11750
            }
        ];
    }

    //#endregion
}

export default TaskDashboard;