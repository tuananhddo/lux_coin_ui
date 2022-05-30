"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var styled_components_1 = require("styled-components");
exports.Wrapper = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: 100%;\n  &.fixedSroll {\n    .custom {\n      backdrop-filter: saturate(1) blur(20px);\n      background-color: #ffffff00;\n      top: 0;\n    }\n  }\n"], ["\n  width: 100%;\n  &.fixedSroll {\n    .custom {\n      backdrop-filter: saturate(1) blur(20px);\n      background-color: #ffffff00;\n      top: 0;\n    }\n  }\n"])));
exports.Header = styled_components_1["default"].div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  width: 100%;\n  margin-bottom: 1rem;\n"], ["\n  width: 100%;\n  margin-bottom: 1rem;\n"])));
exports.Content = styled_components_1["default"].div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  width: 100%;\n"], ["\n  width: 100%;\n"])));
exports.Footer = styled_components_1["default"].div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  width: 100%;\n"], ["\n  width: 100%;\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
