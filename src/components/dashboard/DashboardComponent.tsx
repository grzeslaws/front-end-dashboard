import * as React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { WrapperMain } from "./dashboardStyled";
import { H1 } from "src/theme/elements/Headings";
import UsersComponent from "../users/UsersComponent";
import EditUserComponent from "../users/EditUserComponent";

export const DashboardComponent = () => {
	return (
		<Router>
			<React.Fragment>
				<WrapperMain>
					<H1>Dashboard</H1>
					<Route exact={true} path={"/"} component={UsersComponent} />
					<Route path={"/edit/:id"} component={EditUserComponent} />
					<Route path={"/add"} component={EditUserComponent} />
				</WrapperMain>
			</React.Fragment>
		</Router>
	);
};
