import styled from "..";

import { placeholder } from "../utils/placeholder";
import { Button } from "./Buttons";

interface SelectItemProps {
	isSelected: boolean;
	noResults?: boolean;
}

interface SelectItems {
	show: boolean;
}

interface InputProps {
	activePlaceholder?: boolean;
	paddingLeft?: number | null;
	height?: number | null;
}

interface WrapperArrowDown {
	active: boolean;
}

interface WrapperCheckProps {
	checked: boolean;
}

interface WrapperInputProps {
	marginBottom?: number;
	marginRight?: number;
}

interface WrapperEditorContentProps {
	focus: boolean;
}

export const Checkbox = styled.input`
	visibility: hidden;
`;

export const WrapperCheck = styled<WrapperCheckProps, "svg">("svg")`
	position: absolute;
	right: ${p => p.theme.spacing.default(0.3)};
	top: ${p => p.theme.spacing.default(0.3)};
	width: ${p => p.theme.spacing.default()};
	height: ${p => p.theme.spacing.default()};
	fill: ${p => p.theme.colors.primary()};
	opacity: ${p => (p.checked ? "1" : "0")};
	transition: ${p => p.theme.transitions.default};
`;

export const WrapperCheckbox = styled.label`
	border: 2px solid ${p => p.theme.colors.grayLight};
	border-radius: ${p => p.theme.radius.default};
	width: ${p => p.theme.spacing.default(2)};
	height: ${p => p.theme.spacing.default(2)};
	background-color: #fff;
	position: relative;
	transition: ${p => p.theme.transitions.default};
	display: flex;
	margin-right: ${p => p.theme.spacing.default(0.8)};

	&:hover {
		border: 2px solid ${p => p.theme.colors.gray(0.3)};
	}
`;

export const defaultInputStyle = (p: any) => {
	return `
			font-family: ${p.theme.fonts.fontFamilyDefault};
			font-size: ${p.theme.fonts.sizeMedium};
			border: 2px solid ${p.theme.colors.primaryDark(0.2)};
			border-radius: ${p.theme.radius.default};
			min-height: ${p.theme.spacing.default(4)};
			padding: ${p.theme.spacing.default(0.5) +
				" " +
				p.theme.spacing.default(0.5) +
				" " +
				p.theme.spacing.default(0.5) +
				" " +
				p.theme.spacing.default()};
			transition: ${p.theme.transitions.default};
			outline: 0;
			width: 100%;
			line-height: normal;
		`;
};

export const Form = styled.form`
	font-family: ${p => p.theme.fonts.fontFamilyDefault};
	display: flex;
	flex-direction: column;
`;

export const WrapperInput = styled<WrapperInputProps, "div">("div")`
	position: relative;
	width: 100%;
	margin-right: ${p => (p.marginRight ? p.marginRight + "px" : "unset")};
	margin-bottom: ${p =>
		p.marginBottom || p.marginBottom === 0
			? p.marginBottom + "px"
			: p.theme.spacing.default()};
`;

export const Label = styled<{textArea?: boolean}, "label">("label")`
	position: absolute;
	left: ${p => p.textArea ? p.theme.spacing.default(0.6) : p.theme.spacing.default(0.8)};
	top: ${p => p.textArea ? p.theme.spacing.default(-0.9) : p.theme.spacing.default(-0.5)};
	font-size: ${p => p.theme.fonts.sizeMicro};
	font-weight: ${p => p.theme.fonts.fontMedium};
	color: ${p => p.theme.colors.primaryDark(0.5)};
	letter-spacing: ${p => p.theme.fonts.letterSpacing};
	background-color: #fff;
	padding-left: ${p => p.theme.spacing.default(0.5)};
	padding-right: ${p => p.theme.spacing.default(0.5)};
	z-index: 1;
`;

export const Input = styled<InputProps, "input">("input")`
	${p => defaultInputStyle(p)}
	color: ${p => p.theme.colors.primaryDark()};
	font-weight: ${p => p.theme.fonts.fontLight};
	text-overflow: ellipsis;
	background-color: transparent;
	position: relative;

	&:focus {
		border: 2px solid ${p => p.theme.colors.primary()};
	}

	&:-webkit-autofill {
		background-color: transparent;
		-webkit-box-shadow: 0 0 0px 1000px #fff inset;
	}

	${p => {
		return p.activePlaceholder
			? placeholder(p.theme.colors.primaryDark(0.7), p.theme.fonts.fontLight)
			: null;
	}};
`;

export const InputInherit = styled<InputProps, "input">("input")`
	outline: 0;
	border: 0;
	background-color: transparent;
	font-size: inherit;
	font-family: inherit;
	font-weight: inherit;
	color: inherit;
	line-height: normal;
	border: 2px solid transparent;
	transition: ${p => p.theme.transitions.default};
	width: 100%;
	padding: ${p =>
		p.theme.spacing.default(0.8) + " " + p.theme.spacing.default(0.8)};
	${p => {
		return p.activePlaceholder
			? placeholder(p.theme.colors.primaryDark(0.7), p.theme.fonts.fontLight)
			: null;
	}};
	padding-left: ${p => (p.paddingLeft ? p.paddingLeft - 10 + "px" : "unset")};
  border-radius: ${p => p.theme.radius.default};

	&:focus {
		border: 2px solid ${p => p.theme.colors.primary()};
    padding-left: ${p => (p.paddingLeft ? p.paddingLeft + "px" : "unset")};
	}
`;

export const TextaAreaInherit = styled<InputProps, "textarea">("textarea")`
	outline: 0;
	border: 0;
	background-color: transparent;
	font-size: inherit;
	font-family: inherit;
	font-weight: inherit;
	color: inherit;
	line-height: normal;
	border: 0;
	border: 2px solid transparent;
	transition: ${p => p.theme.transitions.default};
	width: 100%;
	padding: ${p =>
		p.theme.spacing.default(0.8) + " " + p.theme.spacing.default(0.8)};
	${p => placeholder(p.theme.colors.primaryDark(0.7), p.theme.fonts.fontLight)}
	padding-left: ${p => (p.paddingLeft ? p.paddingLeft - 10 + "px" : "unset")};
  height: ${p => (p.height ? p.height + "px" : null)};
  border-radius: ${p => p.theme.radius.default};

	&:focus {
		border: 2px solid ${p => p.theme.colors.primary()};
    padding-left: ${p => (p.paddingLeft ? p.paddingLeft + "px" : "unset")};
	}

  #placeholder {
    padding-top: 3px;
  }
`;

export const ErrorMessage = styled.div`
	color: ${p => p.theme.colors.error()};
	font-size: ${p => p.theme.fonts.sizeSmall};
	position: absolute;
	right: ${p => p.theme.spacing.default()};
	bottom: ${p => p.theme.spacing.default(-1.7)};
`;

export const WrapperArrowDown = styled<WrapperArrowDown, "svg">("svg")`
	position: absolute;
	right: ${p => p.theme.spacing.default(1.5)};
	top: ${p => p.theme.spacing.default(1.6)};
	width: ${p => p.theme.spacing.default()};
	height: ${p => p.theme.spacing.default()};
	fill: ${p =>
		p.active ? p.theme.colors.primary() : p.theme.colors.gray(0.3)};
	transition: ${p => p.theme.transitions.default};
`;

export const WrapperClear = styled<WrapperArrowDown, "svg">("svg")`
	position: absolute;
	right: ${p => p.theme.spacing.default(4)};
	top: ${p => p.theme.spacing.default(1.6)};
	width: ${p => p.theme.spacing.default(0.9)};
	height: ${p => p.theme.spacing.default(0.9)};
	fill: ${p => (p.active ? p.theme.colors.gray(0.3) : p.theme.colors.error())};
	transition: ${p => p.theme.transitions.default};
	cursor: pointer;
	${p => (p.active ? "z-index: 0" : "cursor: pointer; z-index: 2;")};

	&:hover {
		opacity: 0.7;
	}
`;

export const SelectWrapper = styled.div`
	position: relative;
	width: ${p => p.theme.spacing.default(26)};
	background-color: #fff;
	border-radius: ${p => p.theme.radius.default};
	z-index: 1000;
`;

export const SelectItems = styled<SelectItems, "div">("div")`
	background-color: #fff;
	margin-top: ${p => p.theme.spacing.default(0.4)};
	box-shadow: ${p => p.theme.shadows.boxLight};
	border: 1px solid ${p => p.theme.colors.gray(0.2)};
	border-radius: ${p => p.theme.radius.default};
	overflow: hidden;
	font-size: ${p => p.theme.fonts.sizeMedium};
	color: ${p => p.theme.colors.primaryDark()};
	padding-top: ${p => p.theme.spacing.default(0.5)};
	padding-bottom: ${p => p.theme.spacing.default(0.5)};
	display: ${p => (p.show ? "null" : "none")};
	position: absolute;
	width: 100%;
	top: 100%;
	left: 0;
	z-index: 2;
`;

export const SelectItem = styled<SelectItemProps, "div">("div")`
	background-color: #fff;
	transition: ${p => p.theme.transitions.default};
	background-color: ${p => (p.isSelected ? p.theme.colors.primary() : null)};
	color: ${p => {
		if (p.isSelected) {
			return "#fff";
		} else if (p.noResults) {
			return p.theme.colors.primaryDark(0.7);
		}
		return null;
	}};
	padding: ${p =>
		p.theme.spacing.default(0.8) + " " + p.theme.spacing.default()};
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
	font-style: ${p => (p.noResults ? "italic" : "unset")};

	&:hover {
		background-color: ${p =>
			!p.isSelected && !p.noResults ? p.theme.colors.primary(0.2) : null};
		cursor: ${p => (p.noResults ? "default" : "pointer")};
	}
`;

export const LabelFile = styled(Button.withComponent("label"))``;

export const InputFile = styled.input`
	width: 0.1px;
	height: 0.1px;
	opacity: 0;
	overflow: hidden;
	position: absolute;
	z-index: -1;
`;

export const WrapperEditorContent = styled<WrapperEditorContentProps, "div">("div")`
	position: relative;
	${p => defaultInputStyle(p)}
	padding: 0;
	border: 2px solid ${p => (p.focus ? p.theme.colors.primary() : p.theme.colors.primaryDark(0.2))};
	color: ${p => p.theme.colors.primaryDark()};
	font-weight: ${p => p.theme.fonts.fontLight};
	text-overflow: ellipsis;
	background-color: transparent;
	margin-top: 10px;
`;

