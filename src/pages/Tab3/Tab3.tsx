import { IonAlert, IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonInput, IonInputPasswordToggle, IonItem, IonList, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useState } from 'react';
import {getDatabase, ref, set} from 'firebase/database'
import './Tab3.css';
import { v4 } from "uuid";
import { useHistory } from 'react-router-dom'

const history = useHistory();

const Tab3: React.FC = () => {
  
  const [key, setKey] = useState('');
  const [error, setError] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const addKeys =(key: string) =>{
    const database = getDatabase();
    if(+key <=0){
      setError('You must add at least 1 key!');
      console.log(error)
      return;
    }
    else{
      for(let i=0; i < +key; i++){
        let qrKey = v4()
        set(ref(database, 'clave/'+ qrKey), {
          status: "libre",
          key: qrKey
        }).then(()=>{
          console.log('Key added');
        }).catch((err) =>{
          const errCode = err.code;
          const errMessage = err.message;
          console.log(errCode, errMessage);
        })
      }
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
                  min='1'
                  value={key}
                  onIonChange={(e: any) => setKey(e.target.value)}
                  ></IonInput>
                  <IonButton 
                  className='button' 
                  expand='block'
                  onClick={()=> {setIsOpen(true), addKeys(key)}}
                  >Add Key</IonButton>
                  <IonAlert
                    isOpen={isOpen}
                    header="Keys added correctly!"
                    onDidDismiss={() =>{setIsOpen(false), history.push('/tab1')}}
                    buttons={['Okey']}
                  ></IonAlert>
                </IonList>
              </IonCardContent>
            </IonCard>
          </div>
        </IonContent>
    </IonPage>
  );
};

export default Tab3;
