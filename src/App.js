
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignUp from './StudentSignUp/stuSignupPage';
import JobList from './JobList/joblistPage';
import JobDetail from './JobDetails/Details';
import { createTheme } from '@mui/material';
import { ThemeProvider } from '@mui/system';

let theme = createTheme({
  palette: {
    primary: {
      main: '#FF0000',
    },
    secondary: {
      main: '#edf2ff',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
     <BrowserRouter>
   <Routes>
     <Route path='/' element={<SignUp/>}/>
     <Route path='/job' element={<JobList/>}/>
     <Route path='/details' element={<JobDetail/>}/>
     
   </Routes>
   </BrowserRouter>
   </ThemeProvider>
  );
}

export default App;
