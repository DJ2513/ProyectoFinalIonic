import { IonApp, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';
import Login from './components/Login/Login';
import Register from './components/Register/register';
import Tablero from './components/Tablero/tablero';

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route path="/login" component={Login} exact />
        <Route path="/register" component={Register} exact />
        <Route path="/tablero" component={Tablero} exact />
        <Redirect from="/" to="/login" exact />
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;