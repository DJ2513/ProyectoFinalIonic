import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonRow, IonGrid, IonCol} from '@ionic/react';
import './Tab2.css';
import { useState, useEffect } from 'react';
import {getDatabase, ref, onValue} from 'firebase/database'

const Tab2: React.FC = () => {

  const [users, setUsers] = useState<any[]>([]);

  useEffect(() => {
    const db = getDatabase();
    const usersRef = ref(db, 'usuario/');
    onValue(usersRef, (snapshot) => {
      const data = snapshot.val();
      const usersList = data ? Object.keys(data).map((key) => ({ id: key, ...data[key] })) : [];
      setUsers(usersList);
    });
  }, []);


  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle className='title'>Users</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
       <IonContent>
        <IonGrid className='grid'>
          <IonRow>
            <IonCol className='titulo'>Usuario</IonCol>
            <IonCol className='titulo'>Carrera</IonCol>
            <IonCol className='titulo'>Semestre</IonCol>
          </IonRow>
          {users.map((user) => (
            <IonRow key={user.id}>
              <IonCol>
                <div className='dato'>{user.nombre} {user.apellido}</div>
              </IonCol>
              <IonCol>
                <div className='dato'>{user.carrera}</div>
              </IonCol>
              <IonCol>
                <div className='dato'>{user.semestre}</div>
              </IonCol>
            </IonRow>
          ))}
        </IonGrid>
        <span>"Para mas informacion comunicate con tu coder mas cercano"</span>
       </IonContent>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;