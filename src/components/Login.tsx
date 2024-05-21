import React from 'react';
import './Login.css'
import App from '../App';
import { 
  IonCard, 
  IonCardContent, 
  IonCardHeader, 
  IonCardSubtitle, 
  IonCardTitle, 
  IonInput, 
  IonInputPasswordToggle,
  IonItem, 
  IonButton,
  IonList,
  IonNavLink,
  IonAlert,
} from '@ionic/react';
import Tab2 from '../pages/Tab2/Tab2';

interface ContainerProps {
  title: string;
}

const CardContainer: React.FC<ContainerProps> = ({ title }) => {
  return (
    <div className='container'>
      <IonCard className='card'>
        <IonCardHeader>
          <IonCardTitle>{title}</IonCardTitle>
          <IonCardSubtitle></IonCardSubtitle>
        </IonCardHeader>
        <IonCardContent>
          <IonList>
            <IonItem className='item'>
              <IonInput type='email' label="User: " labelPlacement='fixed' placeholder="Enter your mail"></IonInput>
            </IonItem>
            <IonItem className='item'>
              <IonInput type='password' label="Password: " labelPlacement='fixed' placeholder="Enter your password">
                <IonInputPasswordToggle slot='end'></IonInputPasswordToggle>
              </IonInput>
            </IonItem>
            <div className='buttons'>
              <IonButton id='login' className='btn'>Enter</IonButton>
              <IonAlert
                trigger="login"
                header="Esta es una alerta de Inicio de Sesion"
                subHeader="ALERTA"
                message="Has intentado iniciar sesion, pero todavia no estamos en linea, intenta mas tarde"
                buttons={['Ok']}
              ></IonAlert>
              <IonNavLink routerDirection="forward" component={() => <Tab2/>}>
                <IonButton id='navigate' className='btn2' fill='clear'>Page Two</IonButton>
                <IonAlert
                  trigger="navigate"
                  header="Quieres ir a la pagina dos"
                  subHeader="ALERTA"
                  message="Sabemos que quiere explorar la pagina, lamentablemente seguimos fuera de linea. Intente mas tarde"
                  buttons={['Ok', 'Cancel']}
                ></IonAlert>
              </IonNavLink>
            </div>
          </IonList>
        </IonCardContent>
      </IonCard>
    </div>
  );
};

export default CardContainer;
