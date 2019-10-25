import * as React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { WrapperMain } from "./dashboardStyled";
import { H1 } from "src/theme/elements/Headings";
import UsersComponent from "../users/UsersComponent";
import WrapperEditUserComponent from "../Wrappers/WrapperEditUserComponent";
import WrapperAddUserComponent from "../Wrappers/WrapperAddUserComponent";

export const DashboardComponent = () => {
	return (
		<Router>
			<React.Fragment>
				<WrapperMain>
					<H1>Dashboard</H1>
					<Route exact={true} path={"/"} component={UsersComponent} />
					<Route path={"/edit/:id"} component={WrapperEditUserComponent} />
					<Route path={"/add"} component={WrapperAddUserComponent} />
				</WrapperMain>
			</React.Fragment>
		</Router>
	);
};
