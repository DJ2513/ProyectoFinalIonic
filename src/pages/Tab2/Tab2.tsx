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
      console.table(usersList)
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
          {users.map((user) => (
            <IonRow key={user.id}>
              <IonCol>
                <div className='usuario'>{user.nombre} {user.apellido}</div>
                <div className='carrera'>{user.carrera}</div>
              </IonCol>
            </IonRow>
          ))}
        </IonGrid>
       </IonContent>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;