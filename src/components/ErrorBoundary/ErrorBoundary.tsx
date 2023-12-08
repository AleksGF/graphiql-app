import { Component, ReactNode } from 'react';
import { getDefaultLanguage } from '@/utils/getDefaultLanguage';
import { Langs, LANGUAGES } from '@/constants/dictionaries';

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

export default class ErrorBoundary extends Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  state: ErrorBoundaryState = {
    hasError: false,
  };

  componentDidCatch() {
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      const errorMessage =
        getDefaultLanguage() === Langs.RU
          ? LANGUAGES[Langs.RU].ERROR_MESSAGE
          : LANGUAGES[Langs.EN].ERROR_MESSAGE;

      return <h2>{errorMessage}</h2>;
    }

    return this.props.children;
  }
}
