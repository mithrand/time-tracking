/**
 * Created by Antonio on 25/02/2017.
 */

import * as React from 'react';
import Task from './Task';
import ITask from '../Model/ITask';

interface ITaskList {
    tasks: ITask[];
    updateTask(newTask:  ITask): void;
    deleteTask(id: string): void;
}

class TaskList extends React.Component<ITaskList, {}> {

    //#region CONSTRUCTOR_STATES_AND_PROPS

    constructor(props: ITaskList) {
        super(props);
        this.props = props;
    }

    //#endregion

    //#region RENDER

    render() {
        const tasks = this.props.tasks.map((task) =>
            < Task
                key = {task.id}
                title = {task.title}
                project = {task.project}
                id = {task.id}
                elapsed = {task.elapsed}
                runningSince = {task.runningSince}
                updateTask = {this.props.updateTask}
                deleteTask = {this.props.deleteTask}
            />
        );

        return (
            <div id="tasks">
                {tasks}
            </div>
        );
    }

    //#endregion

}

export default TaskList;