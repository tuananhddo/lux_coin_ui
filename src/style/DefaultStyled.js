"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var styled_components_1 = require("styled-components");
var color_1 = require("style/color");
// import light from "assets/img/light.png";
var constant_1 = require("../assets/img/constant");
var material_1 = require("@mui/material");
exports.Containers = styled_components_1["default"](material_1.Container)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  max-width: 1140px;\n  /* padding-left: 0;\n  padding-right: 0; */\n  @media (min-width: 1024px) {\n    /* padding-left: 0;\n    padding-right: 0; */\n  }\n"], ["\n  max-width: 1140px;\n  /* padding-left: 0;\n  padding-right: 0; */\n  @media (min-width: 1024px) {\n    /* padding-left: 0;\n    padding-right: 0; */\n  }\n"])));
exports.Row = styled_components_1["default"].div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: flex;\n  align-items: ", ";\n  justify-content: ", ";\n  flex-wrap: wrap;\n  width: 100%;\n  position: relative;\n\n"], ["\n  display: flex;\n  align-items: ", ";\n  justify-content: ", ";\n  flex-wrap: wrap;\n  width: 100%;\n  position: relative;\n\n"])), function (_a) {
    var alignItems = _a.alignItems;
    return alignItems !== null && alignItems !== void 0 ? alignItems : 'stretch';
}, function (_a) {
    var justifyContent = _a.justifyContent;
    return justifyContent !== null && justifyContent !== void 0 ? justifyContent : 'flex-start';
});
exports.Col = styled_components_1["default"].div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  flex: ", ";\n  max-width: ", ";\n  text-align: ", ";\n  \n  @media (min-width: 768px) {\n    flex: ", ";\n    max-width: ", ";\n  }\n\n  @media (min-width: 1024px) {\n  }\n\n"], ["\n  flex: ", ";\n  max-width: ", ";\n  text-align: ", ";\n  \n  @media (min-width: 768px) {\n    flex: ", ";\n    max-width: ", ";\n  }\n\n  @media (min-width: 1024px) {\n  }\n\n"])), function (_a) {
    var numberCol = _a.numberCol;
    return numberCol ? "0 0 " + numberCol / 12 * 100 + "%" : '1 1 100%';
}, function (_a) {
    var numberCol = _a.numberCol;
    return numberCol ? numberCol / 12 * 100 + "%" : '100%';
}, function (_a) {
    var textAlign = _a.textAlign;
    return textAlign ? textAlign : 'left';
}, function (_a) {
    var md = _a.md;
    return md && "0 0 " + md / 12 * 100 + "%";
}, function (_a) {
    var md = _a.md;
    return md && md / 12 * 100 + "%";
});
exports.Title = styled_components_1["default"].h1(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  font-family: OswaldMedium;\n  font-size: 28px;\n  font-weight: 500;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1.6;\n  letter-spacing: normal;\n  text-align: left;\n  color: ", ";\n  text-transform: uppercase;\n  position: relative;\n  span {\n    color: ", ";\n  };\n  &:before{\n    content: '';\n    height: ", ";\n    width: 508px;\n    max-width: 100vw;\n    position: absolute;\n    background: url(", ");\n    background-repeat: no-repeat;\n    background-size: contain;\n    background-position: center;\n    transform: translate(-50%, 0);\n    left: 50%;\n    top: -10px;\n  }\n  &:after{\n    content: '';\n    height: ", ";\n    width: 508px;\n    max-width: 100vw;\n    position: absolute;\n    background: url(", ");\n    background-repeat: no-repeat;\n    background-size: contain;\n    background-position: center;\n    transform: translate(-50%, 0);\n    left: 50%;\n    bottom: -15px;\n  }\n  @media (min-width: 768px) {\n    font-size: 34px;\n  }\n  @media (min-width: 1024px) {\n    font-size: 50px;\n  }\n"], ["\n  font-family: OswaldMedium;\n  font-size: 28px;\n  font-weight: 500;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1.6;\n  letter-spacing: normal;\n  text-align: left;\n  color: ", ";\n  text-transform: uppercase;\n  position: relative;\n  span {\n    color: ", ";\n  };\n  &:before{\n    content: '';\n    height: ", ";\n    width: 508px;\n    max-width: 100vw;\n    position: absolute;\n    background: url(", ");\n    background-repeat: no-repeat;\n    background-size: contain;\n    background-position: center;\n    transform: translate(-50%, 0);\n    left: 50%;\n    top: -10px;\n  }\n  &:after{\n    content: '';\n    height: ", ";\n    width: 508px;\n    max-width: 100vw;\n    position: absolute;\n    background: url(", ");\n    background-repeat: no-repeat;\n    background-size: contain;\n    background-position: center;\n    transform: translate(-50%, 0);\n    left: 50%;\n    bottom: -15px;\n  }\n  @media (min-width: 768px) {\n    font-size: 34px;\n  }\n  @media (min-width: 1024px) {\n    font-size: 50px;\n  }\n"])), color_1["default"].titleColor, color_1["default"].white, function (_a) {
    var noLight = _a.noLight;
    return noLight !== true && '18px';
}, constant_1.IMG.light, function (_a) {
    var noLight = _a.noLight;
    return noLight !== true && '18px';
}, constant_1.IMG.light);
exports.Des = styled_components_1["default"].h3(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  font-size: 16px;\n  font-weight: 300;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1.6;\n  letter-spacing: 0.1px;\n  color: ", ";\n  span {\n    color: ", ";\n  }\n  @media (min-width: 768px) {\n    font-size: 18px;\n  }\n  @media (min-width: 1024px) {\n    font-size: 20px;\n  }\n"], ["\n  font-size: 16px;\n  font-weight: 300;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1.6;\n  letter-spacing: 0.1px;\n  color: ", ";\n  span {\n    color: ", ";\n  }\n  @media (min-width: 768px) {\n    font-size: 18px;\n  }\n  @media (min-width: 1024px) {\n    font-size: 20px;\n  }\n"])), color_1["default"].primary, color_1["default"].white);
exports.StyledButton = styled_components_1["default"](material_1.Button)(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  \n"], ["\n  \n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;
