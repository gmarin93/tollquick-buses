import { NotificationContainer, NotificationManager } from 'react-notifications';


export const createNotification = (props) => {
    const type=props;
    return () => {
      switch (type) {
        case 'info':
          NotificationManager.info('Info message');
          break;
        case 'success':
          NotificationManager.success('Success message', 'Registro Exitoso',1500);
          break;
        case 'warning':
          NotificationManager.warning('Warning message', 'No se completó el registro por falta de datos', 3000);
          break;
        case 'error':
          NotificationManager.error('Error message', 'Datos incompletos!', 5000, () => {
            alert('callback');
          });
          case 'errorconectividad':
          NotificationManager.error('Error message', 'No se puede establecer conexión con el API!', 10000, () => {
            alert('callback');
          });
          break;
      }
    };
  };
