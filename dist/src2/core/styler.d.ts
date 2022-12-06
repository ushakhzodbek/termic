export interface IStyler {
    (text: string, textcolor: number[], bgcolor: number[]): string | Function;
    effects: Array<number[]>;
    reset: this;
    bold: this;
    dim: this;
    italic: this;
    underline: this;
    blink: this;
    inverse: this;
    hidden: this;
    crossedout: this;
}
export declare function Styler(text: string): void;
