import { Routes, Route } from "react-router-dom";
import PropTypes from 'prop-types';
import Counter from "./components/Counter";
import UserForm from "./components/UserForm";
import RichTextEditor from "./components/RichTextEditor";
import Dashboard from "./components/Dashboard";
import Navbar from "./components/Navbar";

const Footer = ({ children }) => (
  <footer className="text-center bottom-0 ">{children}</footer>
)

Footer.propTypes = {
  children: PropTypes.node.isRequired
}

const App = () => {
  return (
    <>
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/form" element={<UserForm />} />
        <Route path="/editor" element={<RichTextEditor />} />
      </Routes>
      <Footer>
        <p className="absolute bottom-0 w-full text-center text-black-500">
          P.S: This is an assignment for Akash Punchvedi.
        </p>
      </Footer>
    </>
  )
}

export default App;
