"use strict";
exports.__esModule = true;
exports.Document = void 0;
var DocumentState_1 = require("./DocumentState");
var Document = /** @class */ (function () {
    function Document(content, fontName, fontSize) {
        this.content = content;
        this.fontName = fontName;
        this.fontSize = fontSize;
    }
    Document.prototype.setAttribute = function (content, fontName, fontSize) {
        this.content = content;
        this.fontName = fontName;
        this.fontSize = fontSize;
    };
    Document.prototype.restoreState = function (state) {
        this.content = state.content;
        this.fontName = state.fontName;
        this.fontSize = state.fontSize;
    };
    Document.prototype.createState = function () {
        return new DocumentState_1.DocumentState(this.content, this.fontName, this.fontSize);
    };
    return Document;
}());
exports.Document = Document;
