"use strict";
exports.__esModule = true;
exports.DocumentHistory = void 0;
var DocumentState_1 = require("./DocumentState");
var DocumentHistory = /** @class */ (function () {
    function DocumentHistory() {
        this.documentList = [];
    }
    DocumentHistory.prototype.push = function (document) {
        this.documentList.push(document);
    };
    DocumentHistory.prototype.pop = function () {
        var _a;
        (_a = this.documentList.pop()) !== null && _a !== void 0 ? _a : new DocumentState_1.DocumentState("", "", "");
        return this.documentList[this.documentList.length - 1];
    };
    return DocumentHistory;
}());
exports.DocumentHistory = DocumentHistory;
