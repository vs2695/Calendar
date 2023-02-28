import logo from './logo.svg';
import ErrorBoundary from './ErrorBoundary'
import Calendar from './calendar';

function App() {
  return (
    <ErrorBoundary>
      <Calendar />
    </ErrorBoundary>
  );
}

export default App;