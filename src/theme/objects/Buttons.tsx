import styled from "..";
import { ThemeProps } from "../settings/settings-project";
import { ThemedStyledProps } from "styled-components";

interface Button {
	small?: boolean;
	variant?: "success" | "error" | "gray" | "grayDark";
	disabledState?: boolean;
	marginLeft?: number;
	marginRight?: number;
	fullWidth?: boolean;
	marginBottom?: number;
	active?: boolean;
	reverse?: boolean;
}

const baseButtonStyles = (
	p: ThemedStyledProps<
		React.DetailedHTMLProps<
			React.HTMLAttributes<HTMLButtonElement>,
			HTMLButtonElement
		>,
		ThemeProps
	>
) => `
	outline: 0;
	justify-content: center;
	border: 0;
	display: flex;
	align-items: center;
	line-height: 1;
	letter-spacing: ${p.theme.fonts.letterSpacing};
	transition: ${p.theme.transitions.default};
	font-family: ${p.theme.fonts.fontFamilyDefault};
	height: max-content;
	border-radius: ${p.theme.radius.default};
	font-weight: ${p.theme.fonts.fontMedium};

	&:hover {
		opacity: 0.8;
	}
	`;

const ButtonEmpty = styled<Button, "button">("button")`
	${p => baseButtonStyles(p)};
	background-color: transparent;
	color: ${p => {
		if (p.variant === "success") {
			return p.theme.colors.success();
		} else if (p.variant === "error") {
			return p.theme.colors.error();
		} else if (p.variant === "gray") {
			return p.theme.colors.gray(0.5);
		}

		return p.theme.colors.primary();
	}};
	font-size: ${p => {
		if (p.small) {
			return p.theme.fonts.sizeSmall;
		}
		return p.theme.fonts.sizeBase;
	}};
	min-height: ${p => {
		if (p.small) {
			return p.theme.spacing.default(2.2);
		}
		return p.theme.spacing.default(4.2);
	}};

	width: ${p => {
		if (p.small) {
			return "fit-content";
		} else if (p.fullWidth) {
			return "100%";
		}
		return "auto";
	}};
	padding: ${p => {
		if (p.small) {
			return p.theme.spacing.default(0.3) + " " + p.theme.spacing.default(1.5);
		}
		return p.theme.spacing.default(0.3) + " " + p.theme.spacing.default(2);
	}};
	cursor: ${p => (p.disabledState ? "not-allowed" : "pointer")};
	opacity: ${p => (p.disabledState ? 0.8 : "unset")};
	margin-left: ${p => (p.marginLeft ? p.marginLeft + "px" : "unset")};
	margin-right: ${p => (p.marginRight ? p.marginRight + "px" : "unset")};
	margin-bottom: ${p => (p.marginBottom ? p.marginBottom + "px" : "unset")};
`;

const Button = styled<Button, "button">("button")`
	${p => baseButtonStyles(p)};
	background-color: ${p => {
		if (p.reverse) {
			return "transparent";
		} else {
			if (p.variant === "success") {
				return p.theme.colors.success();
			} else if (p.variant === "error") {
				return p.theme.colors.error();
			} else if (p.variant === "gray") {
				return p.theme.colors.gray(0.5);
			} else if (p.variant === "grayDark") {
				return p.theme.colors.gray(0.9);
			}
			return p.theme.colors.primary();
		}
	}};
	color: ${p => {
		if (p.reverse) {
			if (p.variant === "success") {
				return p.theme.colors.success();
			} else if (p.variant === "error") {
				return p.theme.colors.error();
			} else if (p.variant === "gray") {
				return p.theme.colors.gray(0.5);
			} else if (p.variant === "grayDark") {
				return p.theme.colors.gray(0.9);
			}
			return p.theme.colors.primary();
		} else {
			return "#fff";
		}
	}};
	border-width: 2px;
	border-style: solid;
	border-color: ${p => {
		if (p.variant === "success") {
			return p.theme.colors.success();
		} else if (p.variant === "error") {
			return p.theme.colors.error();
		} else if (p.variant === "gray") {
			return p.theme.colors.gray(0.5);
		} else if (p.variant === "grayDark") {
			return p.theme.colors.gray(0.9);
		}
		return p.theme.colors.primary();
	}};

	font-size: ${p => {
		if (p.small) {
			return p.theme.fonts.sizeSmall;
		}
		return p.theme.fonts.sizeBase;
	}};
	min-height: ${p => {
		if (p.small) {
			return p.theme.spacing.default(2.2);
		}
		return p.theme.spacing.default(4.2);
	}};
	width: ${p => {
		if (p.small) {
			return "fit-content";
		} else if (p.fullWidth) {
			return "100%";
		}
		return "auto";
	}};
	padding: ${p => {
		if (p.small) {
			return p.theme.spacing.default(0.3) + " " + p.theme.spacing.default(1.5);
		}
		return p.theme.spacing.default(0.3) + " " + p.theme.spacing.default(2);
	}};

	box-shadow: ${p => p.theme.shadows.box};
	cursor: ${p => (p.disabledState ? "not-allowed" : "pointer")};
	opacity: ${p => (p.disabledState ? 0.8 : "unset")};
	margin-left: ${p => (p.marginLeft ? p.marginLeft + "px" : "unset")};
	margin-right: ${p => (p.marginRight ? p.marginRight + "px" : "unset")};
	margin-bottom: ${p => (p.marginBottom ? p.marginBottom + "px" : "unset")};
`;

export { Button, ButtonEmpty };
