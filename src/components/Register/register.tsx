import {
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
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getDatabase, ref, set } from 'firebase/database';

// Firebase configuration
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

const Register: React.FC = () => {

  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [career, setCareer] = useState('');
  const [semester, setSemester] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const register = (email: string, password: string) => {
    const auth = getAuth();
    const database = getDatabase();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Registered
        const user = userCredential.user;
        console.log('Usuario registrado:', user);
        history.push('/tablero'); // Navigate to dashboard
        set(ref(database, 'usuario/' + name), {
          id: user.uid,
          nombre: name,
          apellido: lastName,
          carrera: career,
          semestre: semester,
          email: user.email,
        }).then(() => {
          console.log('User information saved to database');
          history.push('/tablero'); // Navigate to dashboard
        }).catch((error) => {
          console.error('Error saving user information to database:', error);
        });
      })
      .catch(error => {
        const errCode = error.code;
        const errMsg = error.message;
        console.log(errCode, errMsg);
      });
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Register</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div className="container">
          <IonCard className='card'>
            <IonCardHeader>
              <IonCardTitle>Register</IonCardTitle>
              <IonCardSubtitle></IonCardSubtitle>
            </IonCardHeader>
            <IonCardContent>
              <IonList>
                <IonItem className='item'>
                  <IonInput 
                    type='text' 
                    label="Name: " 
                    labelPlacement='fixed' 
                    placeholder="Enter your name" 
                    value={name}
                    onIonChange={e => setName(e.detail.value!)}
                  ></IonInput>
                </IonItem>
                <IonItem className='item'>
                  <IonInput 
                    type='text' 
                    label="Last Name: " 
                    labelPlacement='fixed' 
                    placeholder="Enter your last name" 
                    value={lastName}
                    onIonChange={e => setLastName(e.detail.value!)}
                  ></IonInput>
                </IonItem>
                <IonItem className='item'>
                  <IonInput 
                    type='text' 
                    label="Career: " 
                    labelPlacement='fixed' 
                    placeholder="Enter your career" 
                    value={career}
                    onIonChange={e => setCareer(e.detail.value!)}
                  ></IonInput>
                </IonItem>
                <IonItem className='item'>
                  <IonInput 
                    type='text' 
                    label="Semester: " 
                    labelPlacement='fixed' 
                    placeholder="Enter your Semester" 
                    value={semester}
                    onIonChange={e => setSemester(e.detail.value!)}
                  ></IonInput>
                </IonItem>
                <IonItem className='item'>
                  <IonInput 
                    type='text' 
                    label="E-mail: " 
                    labelPlacement='fixed' 
                    placeholder="Enter your mail" 
                    value={email}
                    onIonChange={e => setEmail(e.detail.value!)}
                  ></IonInput>
                </IonItem>
                <IonItem className='item'>
                  <IonInput 
                    type='password' 
                    label="Password: " 
                    labelPlacement='fixed' 
                    placeholder="Enter your password"
                    value={password}
                    onIonChange={e => setPassword(e.detail.value!)}
                  >
                    <IonInputPasswordToggle slot='end'></IonInputPasswordToggle>
                  </IonInput>
                </IonItem>
                <div className='buttons'>
                  <IonButton 
                    id='register' 
                    className='btn'
                    onClick={() => register(email, password)}
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

export default Register;
