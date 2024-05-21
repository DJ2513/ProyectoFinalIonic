import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonInput, IonInputPasswordToggle, IonItem, IonList, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Tab3.css';

const Tab3: React.FC = () => {
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
              <img alt="New User" src="https://t3.ftcdn.net/jpg/03/53/11/00/360_F_353110097_nbpmfn9iHlxef4EDIhXB1tdTD0lcWhG9.jpg" />
              <IonCardHeader>
                <IonCardTitle>Add Keys</IonCardTitle>
                <IonCardSubtitle>Enter your info!</IonCardSubtitle>
              </IonCardHeader>
              <IonCardContent>
                <IonList>
                  <IonItem>
                    <IonInput type='text' label="Name:" labelPlacement='fixed' placeholder='Name'></IonInput>
                  </IonItem>
                  <IonItem>
                    <IonInput type='text' label="Last name:" labelPlacement='fixed' placeholder='Last name'></IonInput>
                  </IonItem>
                  <IonItem>
                    <IonInput type='text' label="Career:" labelPlacement='fixed' placeholder='Career'></IonInput>
                  </IonItem>
                  <IonItem className='item'>
                    <IonInput type='email' label="E-mail: " labelPlacement='fixed' placeholder="Enter your mail"></IonInput>
                  </IonItem>
                  <IonItem className='item'>
                    <IonInput type='password' label="Password: " labelPlacement='fixed' placeholder="Enter your password">
                      <IonInputPasswordToggle slot='end'></IonInputPasswordToggle>
                    </IonInput>
                  </IonItem>
                </IonList>
              </IonCardContent>
            </IonCard>
          </div>
        </IonContent>
    </IonPage>
  );
};

export default Tab3;
