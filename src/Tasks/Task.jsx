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
var TaskView_1 = require("./TaskView");
var TaskForm_1 = require("./TaskForm");
var Task = (function (_super) {
    __extends(Task, _super);
    function Task(props) {
        var _this = _super.call(this, props) || this;
        _this.onDeleteTask = function () { return 'delete:' + _this.props.id; };
        _this.onEditTask = function (title, project) {
            var result = 0;
            _this.setState({ task: { title: title, project: project } });
            return result;
        };
        _this.toggleEdit = function () {
            _this.setState({ edit: !(_this.state.edit) });
        };
        _this.props = props;
        _this.state = { edit: false, task: props };
        return _this;
    }
    Task.prototype.render = function () {
        if (this.state.edit) {
            return (<TaskForm_1.default key={this.state.task.id} title={this.state.task.title} project={this.state.task.project} elapsed={this.state.task.elapsed} id={this.state.task.id} cancel={this.toggleEdit} formSubmit={this.onEditTask}/>);
        }
        else {
            return (<TaskView_1.default key={this.state.task.id} title={this.state.task.title} project={this.state.task.project} elapsed={this.state.task.elapsed} id={this.state.task.id} delete={this.onDeleteTask} edit={this.toggleEdit}/>);
        }
    };
    return Task;
}(React.Component));
exports.Task = Task;
exports.default = Task;
