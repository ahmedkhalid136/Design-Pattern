"use strict";
exports.__esModule = true;
var Document_1 = require("./class/Document");
var DocumentHistory_1 = require("./class/DocumentHistory");
var document = new Document_1.Document("content", "fontName", "fontSize");
var documentHistory = new DocumentHistory_1.DocumentHistory();
//History Saved
documentHistory.push(document.createState());
console.log(document);
document.setAttribute("co", "fo", "fs");
documentHistory.push(document.createState());
console.log(document);
document.restoreState(documentHistory.pop());
console.log(document);
// documentState = documentHistory.pop() ?? documentState
// documentState = document.createState()
// console.log(document)
