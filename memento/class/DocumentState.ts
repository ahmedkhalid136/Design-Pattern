import { Document } from "./Document";

export class DocumentState {
  public content: string;
  public fontName: string;
  public fontSize: string;

  constructor(content: string, fontName: string, fontSize: string) {
    this.content = content;
    this.fontName = fontName;
    this.fontSize = fontSize;
  }


}
