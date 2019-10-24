export const customScrollBar = (color: string) => {
  return `
        margin-right: unset;
        overflow: auto;

        ::-webkit-scrollbar {
            width: 5px;
        }

        ::-webkit-scrollbar-track {
            background-color: transparent;
        }

        ::-webkit-scrollbar-thumb {
            background-color: ${color};
            outline: 0;
        }
    `;
};
