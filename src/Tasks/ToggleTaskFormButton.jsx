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
var TaskForm_1 = require("./TaskForm");
var ToggleTaskFormButton = (function (_super) {
    __extends(ToggleTaskFormButton, _super);
    function ToggleTaskFormButton(props) {
        var _this = _super.call(this, props) || this;
        // change the state from visible to no visible and vice versa
        _this.toggleForm = function () {
            _this.setState({ editFormOpen: !(_this.state.editFormOpen) });
        };
        _this.props = props;
        if (props.editFormOpen) {
            _this.state = props;
        }
        else {
            _this.state = { editFormOpen: false };
        }
        return _this;
    }
    ToggleTaskFormButton.prototype.render = function () {
        if (this.state.editFormOpen) {
            return (<TaskForm_1.default key={''} id={''} title={''} project={''} elapsed={0} cancel={this.toggleForm} formSubmit={function () { return 1; }}/>);
        }
        else {
            return (<div className="ui basic content center aligned segment">
                        <button className="ui basic button icon" onClick={this.toggleForm}>
                            <i className="plus icon"/>
                        </button>
                    </div>);
        }
    };
    return ToggleTaskFormButton;
}(React.Component));
exports.ToggleTaskFormButton = ToggleTaskFormButton;
exports.default = ToggleTaskFormButton;
