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
/**
 * Created by Antonio on 26/02/2017.
 */
var React = require("react");
var TaskForm = (function (_super) {
    __extends(TaskForm, _super);
    function TaskForm(props) {
        var _this = _super.call(this, props) || this;
        _this.cancelOnClick = function () {
            _this.props.cancel();
        };
        _this.createOrUpdateText = function () {
            return _this.props.id === '' ? 'Create' : 'Update';
        };
        _this.createUpdateClick = function () {
            _this.props.formSubmit();
        };
        _this.props = props;
        return _this;
    }
    TaskForm.prototype.render = function () {
        return (<div className="ui centered card">
                <div className="content">
                    <div className="ui form">
                        <div className="field">
                            <label>Title</label>
                            <input type="text" defaultValue={this.props.title}/>
                        </div>
                        <div className="field">
                            <label>Project</label>
                            <input type="text" defaultValue={this.props.project}/>
                        </div>
                        <div className="ui two bottom attached buttons">
                            <button className="ui basic blue button" onClick={this.createUpdateClick}>
                                {this.createOrUpdateText()}
                            </button>
                            <button className="ui basic red button" onClick={this.cancelOnClick}>
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            </div>);
    };
    return TaskForm;
}(React.Component));
exports.TaskForm = TaskForm;
exports.default = TaskForm;
