/* eslint-disable no-console */

/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/state-in-constructor */
import React from 'react';
import PropTypes from 'prop-types';

class ErrorBoundary extends React.Component {
    state = { hasError: false };

    componentDidCatch(error, info) {
      console.log('info: ', info);
      console.log('error: ', error);
      // Якщо метод був викликаний значить є помилка!
      // Встановлюємо стан
      this.setState({ hasError: true });
      // Також можна відправити звіт про помилку вашому аналітичному сервісу
      // logErrorToMyService(error, info);
    }

    render() {
      // Якщо є помилка...
      if (this.state.hasError) {
        // Рендерим fallback UI
        return <h1>Something went wrong, please try again later :(</h1>;
      }

      // Якщо все ок, рендерим дітей
      return this.props.children;
    }
}

export default ErrorBoundary;

ErrorBoundary.propTypes = {
  children: PropTypes.element.isRequired,
};
