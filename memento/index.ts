import { Document } from "./class/Document";
import { DocumentHistory } from "./class/DocumentHistory";


const document: Document = new Document("content", "fontName", "fontSize")
const documentHistory: DocumentHistory = new DocumentHistory()
//History Saved
documentHistory.push(document.createState())

console.log(document)

document.setAttribute("co", "fo", "fs")

documentHistory.push(document.createState())

console.log(document)

document.restoreState(documentHistory.pop())

console.log(document)


// documentState = documentHistory.pop() ?? documentState

// documentState = document.createState()

// console.log(document)
