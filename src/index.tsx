import * as React from "react";
import * as ReactDOM from "react-dom";
import { GlobalStyle } from "./theme/elements/Global";
import { themeProps, ThemeProvider } from "./theme";
import * as serviceWorker from "./serviceWorker";
import { DashboardComponent } from "./components/dashboard/DashboardComponent";
import configureStore from "./store";
import { Provider } from "react-redux";

ReactDOM.render(
	<Provider store={configureStore()}>
		<GlobalStyle theme={themeProps} />
		<ThemeProvider theme={themeProps}>
			<DashboardComponent />
		</ThemeProvider>
	</Provider>,
	document.getElementById("root") as HTMLElement
);

serviceWorker.register();
