declare global {
  namespace React {
    namespace JSX {
      interface IntrinsicElements {
        "lottie-player": React.DetailedHTMLProps<
          React.HTMLAttributes<HTMLElement>,
          HTMLElement
        > & {
          src?: string;
          background?: string;
          speed?: number | string;
          loop?: boolean;
          autoplay?: boolean;
        };
      }
    }
  }
}

export {};
