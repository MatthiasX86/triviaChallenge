export const Colors = {
  white: "#fff",
  green: "#24DA0B",
  black: "#3c3939"
}

export const UIStyles = {

  boxShadow: `
    0px 1px 2px 0px rgba(0, 0, 0, 0.05),
    0px 2px 4px 0px rgba(0, 0, 0, 0.05),
    0px 4px 8px 0px rgba(0, 0, 0, 0.05),
    0px 8px 16px 0px rgba(0, 0, 0, 0.05),
    0px 16px 32px 0px rgba(0, 0, 0, 0.05),
    0px 32px 64px 0px rgba(0, 0, 0, 0.05);
  `,

  textShadow: "0px 1px 2px rgba(0, 0, 0, 0.25)",
}

export const Transitions = {
  standardHover: `
    &:hover {
      transform:
        scale(1.02)
        translateY(-4px);
    }
  `
}

export const Animations = {
  fadeIn: `
    @keyframes fadeIn {
      0% {
        opacity: 0;
      }

      100% {
        opacity: 1;
      }
    }

    animation-name: fadeIn;
    animation-duration: 300ms;
    animation-timing-function: ease-out;
    animation-fill-mode: both;
  `
}

export const Media = {
  medium: `
  `,

  large: `
  `
}
