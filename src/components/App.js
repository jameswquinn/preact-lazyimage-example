import { h } from 'preact';
import { Router } from 'preact-router';
import Home from './Home';
import ErrorBoundary from './ErrorBoundary';

const App = () => (
  <ErrorBoundary>
    <div id="app">
      <Router>
        <Home path="/" />
      </Router>
    </div>
  </ErrorBoundary>
);

export default App;
