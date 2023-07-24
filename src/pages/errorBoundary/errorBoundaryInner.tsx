import React, { ReactElement } from 'react';

type MyProps = { children: ReactElement; hasError: boolean; setHasError: any };
type MyState = { hasError: boolean };

class ErrorBoundaryInner extends React.Component<MyProps, MyState> {
  constructor(props: MyProps) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  // static getDerivedStateFromError() {
  //   // Update state so the next render will show the fallback UI.
  //   return { hasError: true };
  // }

  componentDidUpdate(prevProps: MyProps) {
    if (!this.props.hasError && prevProps.hasError) {
      this.setState({ hasError: false });
    }
  }

  componentDidCatch() {
    // You can also log the error to an error reporting service
    // logErrorToMyService(error, errorInfo);
    this.props.setHasError(true);
    this.setState({
      hasError: true,
    });
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>The network is unusual, please refresh and try again, or contact the administrator.</h1>;
    }
    return this.props.children;
  }
}

export default ErrorBoundaryInner;
