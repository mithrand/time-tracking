/**
 * Created by Antonio on 26/02/2017.
 */

import * as React from 'react';
import TaskActionButton from './TaskActionButton';
import * as moment from 'moment';
import ITask from '../Model/ITask';
import Timer = NodeJS.Timer;

interface ITaskView extends ITask {
    onEditButonClick(): void;
    onDeleteButtonClick(): void;
    onStartButtonClick(): void;
    onStopButtonClick(): void;
}

export class TaskView extends React.Component<ITaskView, {}> {

    props: ITaskView;

    private interval: Timer;

    constructor(props: ITaskView) {
        super(props);
        this.props = props;
    }

    componentDidMount() {
        this.interval = setInterval( () => this.forceUpdate(), 1000);
    }

    componentWillUnmount() {
        clearInterval( this.interval );
    }

    render() {
        let totalms = this.props.elapsed;

        if (this.props.runningSince) {
            totalms = totalms + (Date.now() - this.props.runningSince);
        }

        let duration = moment.duration(totalms);
        let elapsedTime =  duration.hours() + ':' + duration.minutes() + ':' + duration.seconds();

        return(
            <div className="ui centered card">
                <div className="content">
                    <div className="header">{this.props.title}</div>
                    <div className="meta">{this.props.project}</div>
                    <div className="center aligned description">
                        <h2>{elapsedTime}</h2>
                    </div>
                    <div className="extra content">
                        <span className="right floated edit icon" onClick={this.props.onEditButonClick}>
                            <i className="edit icon" />
                        </span>
                        <span className="right floated trash icon" onClick={this.props.onDeleteButtonClick}>
                            <i className="trash icon" />
                         </span>
                    </div>
                </div>
                < TaskActionButton
                    onStartButtonClick = {this.props.onStartButtonClick}
                    onStopButtonClick = {this.props.onStopButtonClick}
                    showStop = {!!this.props.runningSince}
                />
            </div>
        );
    }
}

export default TaskView;