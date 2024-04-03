import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Portfolio from './Portfolio'
import { ThemeProvider } from './useTheme';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <Router>

        <Routes>
          <Route path="/" element={<Portfolio />} />
        </Routes>

      </Router >
    </ThemeProvider>

  );
}

export default App;
