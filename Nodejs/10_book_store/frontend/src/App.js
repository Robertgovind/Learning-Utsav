import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Dashboard from "./pages/Dashboard";
import AddBook from "./pages/AddBook";
import { Explores } from "./pages/Explores";
import { BookList } from "./pages/BookList";
import "./assets/sass/main.scss";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/explores" element={<Explores />} />
        <Route path="/dashboard">
          <Route index element={<Dashboard />} />
          <Route path="addBook" element={<AddBook />} />
          <Route path="bookList" element={<BookList />} />
        </Route>
        <Route path="*" element={<b>Page not Found !!!</b>} />
      </Routes>
    </Router>
  );
}

export default App;
