declare module "gsap/SplitText" {
  export class SplitText {
    chars: Element[];
    words: Element[];
    lines: Element[];
    constructor(
      target: gsap.DOMTarget | string | string[],
      vars?: { type?: string; linesClass?: string; wordsClass?: string; charsClass?: string }
    );
    revert(): void;
    split(vars?: object): SplitText;
  }
}

declare module "gsap/ScrollSmoother" {
  export class ScrollSmoother {
    static create(vars?: object): ScrollSmoother;
    static refresh(safe?: boolean): void;
    scrollTop(position?: number): number;
    paused(value?: boolean): ScrollSmoother;
    scrollTo(target: string | Element | number, smooth?: boolean, position?: string): void;
  }
}
