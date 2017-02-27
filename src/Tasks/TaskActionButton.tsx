/**
 * Created by Antonio on 26/02/2017.
 */

import * as React from 'react';

interface ITaskActionButton extends ITaskActionButtonState {
    onStartButtonClick(): void;
    onStopButtonClick(): void;
}

interface ITaskActionButtonState {
    showStop: boolean;
}

export class TaskActionButton extends React.Component<ITaskActionButtonState, {}> {
    state: ITaskActionButtonState;
    props: ITaskActionButton;

    constructor(props: ITaskActionButton) {
        super(props);
        this.props = props;
        this.state = props;
    }

    componentWillReceiveProps(nextProps: ITaskActionButton) {
        this.setState(nextProps);
    }

    handleStartButtonClick= (): void => {
        this.props.onStartButtonClick();
    };

    handleStopButtonClick= (): void => {
        this.props.onStopButtonClick();
    };

    render() {
        if (this.state.showStop) {
            return(
                <div className="ui bottom attached red basic button" onClick={this.handleStopButtonClick}>
                    Stop
                </div>
            );
        }else {
            return(
                <div className="ui bottom attached green basic button" onClick={this.handleStartButtonClick}>
                    Start
                </div>
            );
        }

    }
}

export default TaskActionButton;