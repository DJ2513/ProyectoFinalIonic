import {
  IonAlert,
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonInput,
  IonInputPasswordToggle,
  IonItem,
  IonList,
  IonPage,
  IonTitle,
  IonToolbar,
  setupIonicReact
} from '@ionic/react';
import './Login.css'

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
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"
import { useState } from 'react';
import { useHistory } from 'react-router-dom'
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


const Login: React.FC = () => {

  const logIn = (email: string, password: string) => {
    const auth = getAuth()
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        //Signed IN
        const user = userCredential.user;
        if (user == null) {
          console.log('Usuario no autentificado')
        }
        else {
          console.log('Usuario autentificado:', user)
          history.push('/tablero')
        }
      })
      .catch(error => {
        const errCode = error.code;
        const errMsg = error.message;
        console.log(errCode, errMsg);
      })
  }

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const history = useHistory();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle >Log In</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent >
        <div className="container">
          <IonCard className='card'>
            <IonCardHeader>
              <IonCardTitle>Log In</IonCardTitle>
              <IonCardSubtitle></IonCardSubtitle>
            </IonCardHeader>
            <IonCardContent>
              <IonList>
                <IonItem className='item'>
                  <IonInput type='text' label="User: "
                    labelPlacement='fixed'
                    placeholder="Enter your mail"
                    value={email}
                    onIonChange={e => setEmail(e.detail.value!)}
                  ></IonInput>
                </IonItem>
                <IonItem className='item'>
                  <IonInput type='password'
                    label="Password: " labelPlacement='fixed'
                    placeholder="Enter your password"
                    value={password}
                    onIonChange={e => setPassword(e.detail.value!)}
                  >
                    <IonInputPasswordToggle slot='end'></IonInputPasswordToggle>
                  </IonInput>
                </IonItem>
                <div className='buttons'>
                  <IonButton
                    id='login'
                    className='btn'
                    onClick={() => {
                      setIsOpen(true), logIn(email, password)
                    }}
                  >Log In</IonButton>
                  <IonAlert
                    isOpen={isOpen}
                    header="Login Correctly"
                    subHeader="Enjoy the app!"
                    onDidDismiss={() =>{setIsOpen(false)}}
                    buttons={['Okey']}
                  ></IonAlert>
                </div>
                <span>You don't have an account?</span>
                <div className='buttons'>
                  <IonButton
                    id='register'
                    color='danger'
                    className='btn'
                    onClick={() => {history.push('/register')}}
                    >Register</IonButton>
                </div>
              </IonList>
            </IonCardContent>
          </IonCard>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Login;