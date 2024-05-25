import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonInput, IonInputPasswordToggle, IonItem, IonList, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useState } from 'react';
import {getDatabase, ref, push} from 'firebase/database'
import './Tab3.css';


const Tab3: React.FC = () => {
  
  const [key, setKey] = useState('');
  const [error, setError] = useState('');
  const addKeys =() =>{
    if(!key || +key < 1){
      setError('You must add at least 1 key!');
      return;
    }
    
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle className='title'>New Keys</IonTitle>
        </IonToolbar>
      </IonHeader>
        <IonContent>
          <div className="container">
            <IonCard>
              <IonCardHeader>
                <IonCardTitle>Add Keys</IonCardTitle>
                <IonCardSubtitle>Enter the number of new keys</IonCardSubtitle>
              </IonCardHeader>
              <IonCardContent>
                <IonList>
                  <IonInput 
                  type='number' 
                  label="Key:" 
                  labelPlacement='fixed' 
                  placeholder='New keys' 
                  fill='outline'
                  min='1'></IonInput>
                  <IonButton 
                  className='button' 
                  expand='block'>Add Key</IonButton>
                </IonList>
              </IonCardContent>
            </IonCard>
          </div>
        </IonContent>
    </IonPage>
  );
};

export default Tab3;
