import React, { Component } from "react";
import { createAppContainer } from "react-navigation";
import { navigator } from "./routes";

const AppContainer = createAppContainer(navigator);

class AppNavigator extends Component {
	setTopLeverHandlers = navigatorRef => {
		//NavigationHandler.setTopLevelNavigator(navigatorRef);
		//NavigationHandler.setTopLevelReduxDispatch(this.props.dispatch);
	};

	render() {
		return <AppContainer ref={this.setTopLeverHandlers} />;
	}
}

export default AppNavigator;
