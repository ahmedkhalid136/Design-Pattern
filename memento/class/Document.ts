import { DocumentState } from './DocumentState';
export class Document {
    private content: string;
    private fontName: string;
    private fontSize: string;

    constructor(content: string, fontName: string, fontSize: string){
        this.content = content;
        this.fontName = fontName;
        this.fontSize = fontSize;
    }

    setAttribute(content: string, fontName: string, fontSize: string){
        this.content = content;
        this.fontName = fontName;
        this.fontSize = fontSize;
    }

    
    restoreState(state: DocumentState){
        this.content = state.content;
        this.fontName = state.fontName;
        this.fontSize = state.fontSize;
    }

    createState(): DocumentState{
        return new DocumentState(this.content, this.fontName, this.fontSize)
    }
    
}