/**
 * Created by Antonio on 26/02/2017.
 */
import * as React from 'react';

export interface ITaskForm extends ITaskFormState {
    openInCreateMode: boolean;
    onCancelButtonClick(): void;
    onFormSubmit(formObject: ITaskFormState): void;
}

export interface ITaskFormState {
    title: string;
    project: string;
}

export class TaskForm extends React.Component<ITaskForm, {}> {

    state: ITaskFormState;

    constructor(props: ITaskForm) {
        super(props);
        this.props = props;
        this.state = props;
    }

    createOrUpdateText = () => {
        return this.props.openInCreateMode ? 'Create' : 'Update';
    };

    handleCancelButtonClick = () => {
        this.props.onCancelButtonClick();
    };

    handleSaveCreteButtonClick = () => {
        this.props.onFormSubmit(this.state);
    };

    handleTitleChange = (e: any ) => {
        let newState: ITaskFormState = Object.assign({}, this.state, {title: e.target.value});
        this.setState(newState);
    };

    handleProjectChange = (e: any ) => {
        let newState: ITaskFormState = Object.assign({}, this.state, {project: e.target.value});
        this.setState(newState);
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
                            <button className="ui basic blue button" onClick={this.handleSaveCreteButtonClick}>
                                {this.createOrUpdateText()}
                            </button>
                            <button className="ui basic red button" onClick={this.handleCancelButtonClick}>
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