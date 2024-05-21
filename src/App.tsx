import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { add, ellipse, key, person, pulse, qrCode, square } from 'ionicons/icons';
import Tab1 from './pages/Tab1/Tab1';
import Tab2 from './pages/Tab2/Tab2';
import Tab3 from './pages/Tab3/Tab3';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css'; 

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/**
 * Ionic Dark Mode
 * -----------------------------------------------------
 * For more info, please see:
 * https://ionicframework.com/docs/theming/dark-mode
 */

/* import '@ionic/react/css/palettes/dark.always.css'; */
/* import '@ionic/react/css/palettes/dark.class.css'; */
import '@ionic/react/css/palettes/dark.system.css';

/* Theme variables */
import './theme/variables.css';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, signInWithEmailAndPassword} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAOlr9Fj6hHNUicKY0rjXnQ-vx374TsCEo",
  authDomain: "peliculas-754a2.firebaseapp.com",
  databaseURL: "https://peliculas-754a2-default-rtdb.firebaseio.com",
  projectId: "peliculas-754a2",
  storageBucket: "peliculas-754a2.appspot.com",
  messagingSenderId: "416991842463",
  appId: "1:416991842463:web:8cdd3816edef736c3052aa"
};

// Initialize Firebase
initializeApp(firebaseConfig);
setupIonicReact();

const create = () =>{
  const auth = getAuth()
  signInWithEmailAndPassword(auth, "diego1@diego1.com", "Diego123")
  .then((userCredential) =>{
    //Signed IN
    const user = userCredential.user;
    if(user == null){
      console.log('Usuario no autentificado')
    }
    else{
      console.log('Usuario autentificado:', user)
    }
  })
  .catch(error =>{
    const errCode = error.code;
    const errMsg = error.message;
    console.log(errCode, errMsg);
  })
}
create();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/tab1">
            <Tab1 />
          </Route>
          <Route exact path="/tab2">
            <Tab2 />
          </Route>
          <Route path="/tab3">
            <Tab3 />
          </Route>
          <Route exact path="/">
            <Redirect to="/tab1" />
          </Route>
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="tab1" href="/tab1">
            <IonIcon aria-hidden="true" icon={key} />
            <IonLabel>Keys</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab2" href="/tab2">
            <IonIcon aria-hidden="true" icon={person} />
            <IonLabel>Users</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab3" href="/tab3">
            <IonIcon aria-hidden="true" icon={add} />
            <IonLabel>Add Keys</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
