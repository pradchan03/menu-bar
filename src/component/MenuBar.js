import React from "react";
import {
	IonButtons,
	IonContent,
	IonHeader,
	IonMenu,
	IonMenuButton,
	IonPage,
	IonTitle,
	IonToolbar,
} from "@ionic/react";
import MenuBarContents from "./MenuBarContents";
function MenuBar() {
	return (
		<>
			<IonMenu contentId="main-content">
				<IonHeader>
					<IonToolbar>
						<IonTitle>Menu</IonTitle>
					</IonToolbar>
				</IonHeader>
				<IonContent className="ion-padding">
					This is the menu content.
				</IonContent>
			</IonMenu>
			<IonPage id="main-content">
				<IonHeader>
					<IonToolbar>
						<IonButtons slot="start">
							<IonMenuButton></IonMenuButton>
						</IonButtons>
						<IonTitle>MVCS</IonTitle>
					</IonToolbar>
				</IonHeader>
				<MenuBarContents />
				<IonContent className="ion-padding">
					Tap the button in the toolbar to open the menu.
				</IonContent>
			</IonPage>
		</>
	);
}
export default MenuBar;
// import React from "react";
// import {
// 	IonMenuButton,
// 	IonHeader,
// 	IonToolbar,
// 	IonButtons,
// 	IonTitle,
// 	IonContent,
// } from "@ionic/react";
// import MenuBarContents from "./MenuBarContents";

// const MenuBar = () => {
// 	return (
// 		<>
// 			<IonHeader>
// 				<IonToolbar>
// 					<IonButtons slot="start">
// 						<IonMenuButton />
// 					</IonButtons>
// 					<IonTitle>MVCS</IonTitle>
// 				</IonToolbar>
// 			</IonHeader>
// 			<MenuBarContents />
// 			<IonContent>{/* Content of the main page goes here */}</IonContent>
// 		</>
// 	);
// };

// export default MenuBar;
