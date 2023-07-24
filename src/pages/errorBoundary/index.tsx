import { FC, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import ErrorBoundaryInner from './errorBoundaryInner';

const ErrorBoundary: FC<any> = ({ children }) => {
  const [hasError, setHasError] = useState(false);
  const location = useLocation();
  // console.log(location, '......');
  useEffect(() => {
    if (hasError) {
      setHasError(false);
    }
  }, [location.key]);
  return (
    <ErrorBoundaryInner hasError={hasError} setHasError={setHasError}>
      {children}
    </ErrorBoundaryInner>
  );
};

export default ErrorBoundary;
