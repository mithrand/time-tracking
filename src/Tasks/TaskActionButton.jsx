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
var TaskActionButton = (function (_super) {
    __extends(TaskActionButton, _super);
    function TaskActionButton() {
        var _this = _super.call(this) || this;
        _this.toggleState = function () { _this.setState({ pause: !(_this.state.pause) }); };
        _this.state = { pause: true };
        return _this;
    }
    TaskActionButton.prototype.render = function () {
        if (this.state.pause) {
            return (<div className="ui bottom attached red basic button" onClick={this.toggleState}>
                    Stop
                </div>);
        }
        else {
            return (<div className="ui bottom attached green basic button" onClick={this.toggleState}>
                    Start
                </div>);
        }
    };
    return TaskActionButton;
}(React.Component));
exports.TaskActionButton = TaskActionButton;
exports.default = TaskActionButton;
