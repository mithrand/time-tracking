/**
 * Created by Antonio on 26/02/2017.
 */

import * as React from 'react';
import ITask from '../Model/ITask';
import {TaskForm, ITaskFormState} from './TaskForm';

export interface IToggleTaskFormButton extends IToggleTaskFormState  {
    onCreateTask(task: ITask): void;
}

export interface IToggleTaskFormState {
    editFormOpen: boolean;
}

export class ToggleTaskFormButton extends React.Component<IToggleTaskFormButton, {}> {

    state: IToggleTaskFormState;

    // change the state from visible to no visible and vice versa
    toggleForm = () => {
        this.setState({editFormOpen: !(this.state.editFormOpen)});
    };

    constructor(props: IToggleTaskFormButton) {
        super(props);
        this.props = props;
        if (props.editFormOpen) {
            this.state = props;
        }else {
            this.state = {editFormOpen: false};
        }
    }

    createNew = (form: ITaskFormState) => {
        let newTask: ITask = { id: '', title: form.title, project: form.project, elapsed: 0, runningSince: undefined};
        this.setState(Object.assign({}, this.state, {editFormOpen: false}));
        this.props.onCreateTask(newTask);
    };

    render() {

            if (this.state.editFormOpen) {
                return(
                    <TaskForm
                        key={''}
                        title={''}
                        project={''}
                        onCancelButtonClick = {this.toggleForm}
                        onFormSubmit = {this.createNew}
                        openInCreateMode = {true}
                    />
                );
            }else {
                return(
                    <div className="ui basic content center aligned segment">
                        <button className="ui basic button icon"  onClick={this.toggleForm}>
                            <i className="plus icon" />
                        </button>
                    </div>
                );
            }
    }
}

export default ToggleTaskFormButton;