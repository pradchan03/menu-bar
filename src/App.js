import MenuBar from "./component/MenuBar";
import { IonPage } from "@ionic/react";
import { setupIonicReact } from "@ionic/react";
setupIonicReact();
function App() {
	return (
		<IonPage>
			<MenuBar />
		</IonPage>
	);
}

export default App;
