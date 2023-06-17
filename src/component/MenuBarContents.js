import React from "react";
import {
	IonMenu,
	IonHeader,
	IonToolbar,
	IonTitle,
	IonContent,
	IonList,
	IonItem,
	IonIcon,
	IonLabel,
	IonMenuToggle,
} from "@ionic/react";
import { home, download, information } from "ionicons/icons";

const MenuBarContents = () => {
	return (
		<IonMenu contentId="main-content">
			<IonHeader>
				<IonToolbar>
					<IonTitle>Menu</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent>
				<IonList>
					<IonMenuToggle autoHide={true}>
						<IonItem button>
							<IonIcon icon={home} slot="start" />
							<IonLabel>Home</IonLabel>
						</IonItem>
					</IonMenuToggle>

					<IonMenuToggle autoHide={false}>
						<IonItem button>
							<IonIcon icon={download} slot="start" />
							<IonLabel>Download</IonLabel>
						</IonItem>
					</IonMenuToggle>

					<IonMenuToggle autoHide={false}>
						<IonItem button>
							<IonIcon icon={information} slot="start" />
							<IonLabel>About</IonLabel>
						</IonItem>
					</IonMenuToggle>
				</IonList>
			</IonContent>
		</IonMenu>
	);
};

export default MenuBarContents;

// import React from "react";
// import {
// 	IonTabs,
// 	IonTabBar,
// 	IonTabButton,
// 	IonIcon,
// 	IonLabel,
// 	IonRouterOutlet,
// } from "@ionic/react";
// import { Route, Redirect } from "react-router-dom";
// import { home, download, information } from "ionicons/icons";
// import Home from "./Home";
// import Downloads from "./Downloads";
// import About from "./About";

// const MenuBarContents = () => {
// 	return (
// 		<IonTabs>
// 			<IonRouterOutlet>
// 				<Route path="/tabs/home" component={Home} exact={true} />
// 				<Route path="/tabs/downloads" component={Downloads} exact={true} />
// 				<Route path="/tabs/about" component={About} exact={true} />
// 				<Redirect exact from="/tabs" to="/tabs/home" />
// 			</IonRouterOutlet>

// 			<IonTabBar slot="bottom">
// 				<IonTabButton tab="home" href="/tabs/home">
// 					<IonIcon icon={home} />
// 					<IonLabel>Home</IonLabel>
// 				</IonTabButton>

// 				<IonTabButton tab="downloads" href="/tabs/downloads">
// 					<IonIcon icon={download} />
// 					<IonLabel>Downloads</IonLabel>
// 				</IonTabButton>

// 				<IonTabButton tab="about" href="/tabs/about">
// 					<IonIcon icon={information} />
// 					<IonLabel>About</IonLabel>
// 				</IonTabButton>
// 			</IonTabBar>
// 		</IonTabs>
// 	);
// };

// export default MenuBarContents;
