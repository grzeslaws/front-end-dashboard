import styled from "../../theme";

export const WrapperOptions = styled.div`
	display: flex;
	justify-content: space-between;
	margin-bottom: 30px;
	margin-top: 50px;
`;

export const WrapperButtons = styled<{ center?: boolean }, "div">("div")`
	display: flex;
	margin-top: 20px;
	justify-content: ${p => (p.center ? "center" : "flex-end")};
`;

export const WrapperModal = styled.div`
	position: fixed;
	left: 0;
	right: 0;
	top: 0;
	bottom: 0;
	align-items: center;
	justify-content: center;
	display: flex;
	background-color: rgba(255, 255, 255, 0.9);
	z-index: 1;
`;

export const WrapperContent = styled.div`
	width: 70%;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const ModalText = styled.div`
	margin-bottom: 20px;
`;
