import { DocumentState } from './DocumentState';

export class DocumentHistory{
    private documentList: DocumentState[] = []


  
    push(document: DocumentState){
        this.documentList.push(document)
    }

    pop(): DocumentState{
       this.documentList.pop() ?? new DocumentState("","","");
       return this.documentList[this.documentList.length - 1]
    }
}