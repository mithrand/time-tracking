/**
 * Created by Antonio on 26/02/2017.
 */

import * as React from 'react';
import TaskActionButton from './TaskActionButton';
import * as moment from 'moment';
import ITask from './ITask';

interface ITaskView extends ITask {
    onEditButonClick(): void;
    onDeleteButtonClick(): void;
}

export class TaskView extends React.Component<ITaskView, {}> {

    props: ITaskView;

    constructor(props: ITaskView) {
        super(props);
        this.props = props;
    }

    render() {
        return(
            <div className="ui centered card">
                <div className="content">
                    <div className="header">{this.props.title}</div>
                    <div className="meta">{this.props.project}</div>
                    <div className="center aligned description">
                        <h2>
                            {
                                moment().millisecond(this.props.elapsed).format('HH:mm:ss')
                            }
                        </h2>
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
                < TaskActionButton />
            </div>
        );
    }
}

export default TaskView;