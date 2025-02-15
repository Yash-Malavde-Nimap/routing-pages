/* eslint-disable react/prop-types */
import { Component } from "react";
import NotFound from './components/NotFound.jsx'

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false, // Track if there's an error
      errorInfo: null, // Store error details
    };
  }

  static getDerivedStateFromError(error) {
    // Update state to indicate an error occurred
    return { hasError: true, error: error };
  }

  componentDidCatch(error, info) {
    // Log error to an error reporting service or just log it to the console
    console.error("Error caught in Error Boundary:", error);
    console.error("Error Info:", info);
  }

  render() {
    if (this.state.hasError) {
      return <NotFound />;
    }

    return this.props.children; // Render children if no error
  }
}

export default ErrorBoundary;
