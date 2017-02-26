/**
 * Created by Antonio on 26/02/2017.
 */

import * as React from 'react';
import ITask from './ITask';
import TaskView from './TaskView';
import TaskForm from './TaskForm';

interface ITaskComponent extends ITask {
    updateTask(newTask: ITask): void;
    deleteTask(id: string): void;
}

interface ITaskComponentState {
    edit: boolean;
    task: ITask;
}

export class Task extends React.Component<ITaskComponent, {}> {

    state: ITaskComponentState;

    constructor(props: ITaskComponent) {
        super(props);
        this.props = props;
        this.state = { edit: false, task: props };
    }

    toggleEdit = (): void => {
      this.setState({edit: !(this.state.edit)});
    };

    render() {
            if (this.state.edit) {
                return (
                    < TaskForm
                        key = {this.state.task.id}
                        title = {this.state.task.title}
                        project = {this.state.task.project}
                        elapsed = {this.state.task.elapsed}
                        id = {this.state.task.id}
                        cancel = {this.toggleEdit}
                        formSubmit = {this.props.updateTask}
                    />
                );
            }else {
                return(
                    < TaskView
                        key = {this.state.task.id}
                        title = {this.state.task.title}
                        project = {this.state.task.project}
                        elapsed = {this.state.task.elapsed}
                        id = {this.state.task.id}
                        onDeleteButtonClick = {this.props.deleteTask}
                        onEditButonClick = {this.toggleEdit}
                    />
                );
            }
    }

}

export default Task;