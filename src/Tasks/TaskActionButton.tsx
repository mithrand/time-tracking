/**
 * Created by Antonio on 26/02/2017.
 */

import * as React from 'react';

interface ITaskActionButtonState {
    pause: boolean;
}

export class TaskActionButton extends React.Component<{}, {}> {
    state: ITaskActionButtonState;

    constructor() {
        super();
        this.state = { pause: true };
    }

    toggleState = (): void => {this.setState({pause: !(this.state.pause)})};

    render() {
        if (this.state.pause) {
            return(
                <div className="ui bottom attached red basic button" onClick={this.toggleState}>
                    Stop
                </div>
            );
        }else {
            return(
                <div className="ui bottom attached green basic button" onClick={this.toggleState}>
                    Start
                </div>
            );
        }

    }
}

export default TaskActionButton;