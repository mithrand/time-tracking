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
var TaskList_1 = require("./Tasks/TaskList");
var ToggleTaskFormButton_1 = require("./Tasks/ToggleTaskFormButton");
var TaskDashboard = (function (_super) {
    __extends(TaskDashboard, _super);
    function TaskDashboard(props) {
        return _super.call(this, props) || this;
    }
    TaskDashboard.prototype.render = function () {
        return (<div id="main" className="main ui">
              <h1 className="ui dividing centered header">Timers Dashboard</h1>
              <div className="ui three column centered grid">
                  <div className="column">
                      <TaskList_1.default />
                      <ToggleTaskFormButton_1.default editFormOpen={false}/>
                  </div>
              </div>
          </div>);
    };
    return TaskDashboard;
}(React.Component));
exports.default = TaskDashboard;
