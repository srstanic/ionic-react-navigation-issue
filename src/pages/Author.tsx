import {
  IonContent,
  IonHeader,
  IonItem,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import { useParams } from 'react-router';

const Author: React.FC = () => {
  const params = useParams<{ id: string }>();
  return (
    <IonPage id="author-page">
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Author {params.id}</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonItem>Author page</IonItem>
      </IonContent>
    </IonPage>
  );
};

export default Author;
