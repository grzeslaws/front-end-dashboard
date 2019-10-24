export const placeholder = (
	color: string,
	fontWeight: number,
	fontSize = "14px"
) => {
	return `
    ::-webkit-input-placeholder {
        color: ${color};
        font-weight: ${fontWeight};
        font-size: ${fontSize};
        font-style: italic;
        padding-top: 3px;
    }
    ::-moz-placeholder {
        color: ${color};
        font-weight: ${fontWeight};
        font-size: ${fontSize};
        font-style: italic;
        padding-top: 3px;
    }
    :-ms-input-placeholder {
        color: ${color};
        font-weight: ${fontWeight};
        font-size: ${fontSize};
        font-style: italic;
        padding-top: 3px;
    }
    :-moz-placeholder {
        color: ${color};
        font-weight: ${fontWeight};
        font-size: ${fontSize};
        font-style: italic;
        padding-top: 3px;
    }`;
};
