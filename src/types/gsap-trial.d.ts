declare module "gsap-trial/SplitText" {
  export class SplitText {
    chars: Element[];
    words: Element[];
    lines: Element[];
    constructor(
      target: gsap.DOMTarget,
      options?: {
        type?: string;
        linesClass?: string;
        wordsClass?: string;
        charsClass?: string;
      }
    );
    revert(): void;
  }
}
