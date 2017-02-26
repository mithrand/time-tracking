/**
 * Created by Antonio on 25/02/2017.
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
var Task_1 = require("./Task");
var TaskList = (function (_super) {
    __extends(TaskList, _super);
    function TaskList() {
        var _this = _super.call(this) || this;
        _this.moq = [
            {
                title: 'Mow the lawn',
                project: 'House Chores',
                elapsed: 5456099,
                id: '0a4a79cb-b06d-4cb1-883d-549a1e3b66d7'
            },
            {
                title: 'Clear paper jam',
                project: 'Office Chores',
                elapsed: 1273998,
                id: 'a73c1d19-f32d-4aff-b470-cea4e792406a'
            },
            {
                title: 'Ponder origins of universe',
                project: 'Life Chores',
                id: '2c43306e-5b44-4ff8-8753-33c35adbd06f',
                elapsed: 11750
            }
        ];
        return _this;
    }
    TaskList.prototype.render = function () {
        var tasks = this.moq.map(function (task) {
            return <Task_1.default key={task.id} title={task.title} project={task.project} id={task.id} elapsed={task.elapsed}/>;
        });
        return (<div id="tasks">
                {tasks}
            </div>);
    };
    return TaskList;
}(React.Component));
exports.default = TaskList;
