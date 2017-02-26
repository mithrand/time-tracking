/**
 * Created by Antonio on 26/02/2017.
 */
import * as React from 'react';
import ITask from './ITask';

export interface ITaskForm extends ITask {
    cancel(): void;
    formSubmit(task: ITask): void;
}

export interface ITaskFormState extends ITask {

}

export class TaskForm extends React.Component<ITaskForm, {}> {

    state: ITaskFormState;

    constructor(props: ITaskForm) {
        super(props);
        this.props = props;
        this.state = props;
    }

    cancelOnClick = () => {
        this.props.cancel();
    };

    createOrUpdateText = () => {
        return this.props.id === '' ? 'Create' : 'Update';
    };

    createUpdateClick = () => {
        this.props.formSubmit(this.state);
    };

    handleTitleChange = (e: any ) => {
        let newTask: ITask = Object.assign({}, this.state, {title: e.target.value});
        this.setState(newTask);
    };

    handleProjectChange = (e: any ) => {
        let newTask: ITask = Object.assign({}, this.state, {project: e.target.value});
        this.setState(newTask);
    };

    render() {
        return(
            <div className="ui centered card">
                <div className="content">
                    <div className="ui form">
                        <div className="field">
                            <label>Title</label>
                            <input type="text" defaultValue={this.props.title} onChange={this.handleTitleChange}/>
                        </div>
                        <div className="field">
                            <label>Project</label>
                            <input type="text"  defaultValue={this.props.project}  onChange={this.handleProjectChange}/>
                        </div>
                        <div className="ui two bottom attached buttons">
                            <button className="ui basic blue button" onClick={this.createUpdateClick}>
                                {this.createOrUpdateText()}
                            </button>
                            <button className="ui basic red button" onClick={this.cancelOnClick}>
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default TaskForm;