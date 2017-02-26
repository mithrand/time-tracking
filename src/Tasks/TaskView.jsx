/**
 * Created by Antonio on 26/02/2017.
 */
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var TaskActionButton_1 = require("./TaskActionButton");
var moment = require("moment");
var TaskView = (function (_super) {
    __extends(TaskView, _super);
    function TaskView(props) {
        var _this = _super.call(this, props) || this;
        _this.props = props;
        return _this;
    }
    TaskView.prototype.render = function () {
        return (<div className="ui centered card">
                <div className="content">
                    <div className="header">{this.props.title}</div>
                    <div className="meta">{this.props.project}</div>
                    <div className="center aligned description">
                        <h2>{moment().millisecond(this.props.elapsed).format('HH:mm:ss')}</h2>
                    </div>
                    <div className="extra content">
                        <span className="right floated edit icon" onClick={this.props.edit}>
                            <i className="edit icon"/>
                        </span>
                        <span className="right floated trash icon" onClick={this.props.delete}>
                            <i className="trash icon"/>
                         </span>
                    </div>
                </div>
                <TaskActionButton_1.default />
            </div>);
    };
    return TaskView;
}(React.Component));
exports.TaskView = TaskView;
exports.default = TaskView;
