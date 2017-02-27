/**
 * Created by Antonio on 26/02/2017.
 */

import * as React from 'react';
import ITask from '../Model/ITask';
import TaskView from './TaskView';
import {TaskForm, ITaskFormState} from './TaskForm';

interface ITaskComponent extends ITask {
    updateTask(newTask: ITask): void;
    deleteTask(id: string): void;
}

interface ITaskComponentState {
    edit: boolean;
}

export class Task extends React.Component<ITaskComponent, {}> {

    state: ITaskComponentState;

    constructor(props: ITaskComponent) {
        super(props);
        this.props = props;
        this.state = { edit: false };
    }

    toggleEdit = (): void => {
      this.setState({edit: !(this.state.edit)});
    };

    deleteMe = (): void => {
        this.props.deleteTask(this.props.id);
    };

    updateMe = (taskForm: ITaskFormState): void => {
        let task: ITask = Object.assign({}, this.props, taskForm);
        this.setState(Object.assign({}, this.state, {edit: false}));
        this.props.updateTask(task);

    };

    startMe = (): void => {
        let task: ITask = Object.assign({}, this.props, {runningSince: Date.now()});
        this.props.updateTask(task);
    };

    stopMe = (): void => {
        let totalms: number = this.props.elapsed;

        if (this.props.runningSince)  {
            totalms += (Date.now() - this.props.runningSince);
        }

        let task: ITask = Object.assign({}, this.props, {elapsed: totalms, runningSince: undefined });
        this.props.updateTask(task);
    };

    render() {
            if (this.state.edit) {
                return (
                    < TaskForm
                        key = {this.props.id}
                        title = {this.props.title}
                        project = {this.props.project}
                        onCancelButtonClick = {this.toggleEdit}
                        onFormSubmit = {this.updateMe}
                        openInCreateMode = {false}
                    />
                );
            }else {
                return(
                    < TaskView
                        key = {this.props.id}
                        title = {this.props.title}
                        project = {this.props.project}
                        elapsed = {this.props.elapsed}
                        id = {this.props.id}
                        runningSince = {this.props.runningSince}
                        onDeleteButtonClick = {this.deleteMe}
                        onEditButonClick = {this.toggleEdit}
                        onStartButtonClick = {this.startMe}
                        onStopButtonClick = {this.stopMe}
                    />
                );
            }
    }

}

export default Task;