import { IonCol, IonContent, IonGrid, IonHeader, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import {getDatabase, ref, onValue} from 'firebase/database'
import { useEffect, useState } from 'react';
import './Tab1.css';

const Tab1: React.FC = () => {

  const [users, setUsers] = useState<any[]>([]);

  useEffect(() => {
    const db = getDatabase();
    const usersRef = ref(db, 'clave/');
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
          <IonTitle className='title'>Claves</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
       <IonContent>
        <IonGrid className='grid'>
          {users.map((user) => (
            <IonCol key={user.id}>
              <IonRow >
                <div className='clave'>Clave {user.id}</div>
              </IonRow>
              <IonRow>
                <div className='status'>{user.status}</div>
              </IonRow>
            </IonCol>
          ))}
        </IonGrid>
       </IonContent>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
