import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
    };
  }

  static getDerivedStateFromError(error) {
    return {
      hasError: true,
    };
  }


  componentDidCatch(error, errorInfo) {
    this.setState({
      error,
      errorInfo,
    });
  }

  render() {
    if (this.state.hasError || this.state.errorInfo) {
      return (
        <div>
            <h1>Error message!...</h1>
            {this.state.error && this.state.error.toString()}
        </div>
      );
    }
    return this.props.children;
  }
}
export default ErrorBoundary;
