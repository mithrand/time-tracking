/**
 * Created by Antonio on 26/02/2017.
 */

import * as React from 'react';
import TaskForm from './TaskForm';

export interface IToggleTaskFormButton {
    editFormOpen: boolean;
}

export class ToggleTaskFormButton extends React.Component<IToggleTaskFormButton, {}> {

    state: IToggleTaskFormButton;

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

    render() {

            if (this.state.editFormOpen) {
                return(
                    <TaskForm
                        key={''}
                        id={''}
                        title={''}
                        project={''}
                        elapsed = {0}
                        cancel = {this.toggleForm}
                        formSubmit = {() => {return 1; }}
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