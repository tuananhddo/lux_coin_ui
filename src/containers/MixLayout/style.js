"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var styled_components_1 = require("styled-components");
var color_1 = require("style/color");
var constant_1 = require("assets/img/constant");
var material_1 = require("@mui/material");
exports.Wrapper = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: 100%;\n  max-width: 100%;\n  background: #090811;\n  background-image: url(", ");\n  background-size: cover;\n"], ["\n  width: 100%;\n  max-width: 100%;\n  background: #090811;\n  background-image: url(", ");\n  background-size: cover;\n"])), constant_1.IMG.bg);
exports.Head = styled_components_1["default"].div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  width: 100%;\n  /* background-image: url(\"http://1.bp.blogspot.com/-xKYdDoOdGNY/WLwahZXVeYI/AAAAAAAAuNw/w3Qr5iFNJJ0io0v-6wrP5aKHabMEm4CqACK4B/s1600/flat_mountains_landscape_by_ggiuliafilippini-d8zdbco.jpg\");\n  background-size: cover;\n  height: 220px; */\n  text-align: right;\n  /* font-size: larger;\n  font-weight: bold; */\n"], ["\n  width: 100%;\n  /* background-image: url(\"http://1.bp.blogspot.com/-xKYdDoOdGNY/WLwahZXVeYI/AAAAAAAAuNw/w3Qr5iFNJJ0io0v-6wrP5aKHabMEm4CqACK4B/s1600/flat_mountains_landscape_by_ggiuliafilippini-d8zdbco.jpg\");\n  background-size: cover;\n  height: 220px; */\n  text-align: right;\n  /* font-size: larger;\n  font-weight: bold; */\n"])));
exports.Logo = styled_components_1["default"].img(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  max-width: 200px;\n"], ["\n  max-width: 200px;\n"])));
exports.WrapperSideBar = styled_components_1["default"].div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  width: 100%;\n  display: flex;\n"], ["\n  width: 100%;\n  display: flex;\n"])));
exports.LinkSideBar = styled_components_1["default"](material_1.Link)(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  position: relative;\n  color: ", ";\n  cursor: pointer;\n  .title {\n    display: flex;\n    line-height: 1.45;\n    letter-spacing: 0.11px;\n    padding: 20px 10px;\n    font-size: 18px;\n    @media (min-width: 1024px) {\n      padding: 34px 30px;\n      font-size: 22px;\n    }\n  }\n  .list-item {\n    display: none;\n  }\n  &:hover {\n    color: ", ";\n    .list-item {\n      display: block;\n    }\n  }\n"], ["\n  position: relative;\n  color: ", ";\n  cursor: pointer;\n  .title {\n    display: flex;\n    line-height: 1.45;\n    letter-spacing: 0.11px;\n    padding: 20px 10px;\n    font-size: 18px;\n    @media (min-width: 1024px) {\n      padding: 34px 30px;\n      font-size: 22px;\n    }\n  }\n  .list-item {\n    display: none;\n  }\n  &:hover {\n    color: ", ";\n    .list-item {\n      display: block;\n    }\n  }\n"])), color_1["default"].secondary, color_1["default"].titleColor);
exports.ListItem = styled_components_1["default"](material_1.Paper)(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  position: absolute;\n  top: 81px;\n  /* right: 0; */\n  z-index: 99;\n"], ["\n  position: absolute;\n  top: 81px;\n  /* right: 0; */\n  z-index: 99;\n"])));
exports.DrawersHeader = styled_components_1["default"].div(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding-left: 16px;\n  padding-right: 16px;\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding-left: 16px;\n  padding-right: 16px;\n"])));
exports.StyledApp = styled_components_1["default"].a(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  width: 70px;\n  height: 40px;\n  border-radius: 10px;\n  background-image: linear-gradient(to right, #f8b900, #03ffff);\n  border: none;\n  /* padding: 9px 29px; */\n  font-family: OswaldMedium;\n  font-size: 13px;\n  font-weight: 500;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 40px;\n  letter-spacing: 0.08px;\n  text-align: center;\n  color: #000;\n  text-decoration: unset;\n  text-transform: uppercase;\n  cursor: pointer;\n  @media (min-width: 768px) {\n    width: 100px;\n    height: 40px;\n    font-size: 15px;\n  }\n"], ["\n  width: 70px;\n  height: 40px;\n  border-radius: 10px;\n  background-image: linear-gradient(to right, #f8b900, #03ffff);\n  border: none;\n  /* padding: 9px 29px; */\n  font-family: OswaldMedium;\n  font-size: 13px;\n  font-weight: 500;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 40px;\n  letter-spacing: 0.08px;\n  text-align: center;\n  color: #000;\n  text-decoration: unset;\n  text-transform: uppercase;\n  cursor: pointer;\n  @media (min-width: 768px) {\n    width: 100px;\n    height: 40px;\n    font-size: 15px;\n  }\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8;
