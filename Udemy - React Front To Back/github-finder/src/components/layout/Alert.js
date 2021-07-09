import React, { useContext } from 'react';
import AlertContext from '../../context/alert/AlertContext';

export const Alert = () => {
  const alertContext = useContext(AlertContext);
  return (
    alertContext.alert !== null && (
      <div className={`alert alert-${alertContext.alert.type}`}>
        <i className="fas fa-info-circle"></i> {alertContext.alert.alertMessage}
      </div>
    )
  );
};

export default Alert;
