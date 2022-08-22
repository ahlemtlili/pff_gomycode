import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Toggle } from './Components/Styles/Toggle';
import {
  darkTheme,
  GlobalStyles,
  lightTheme,
} from './Components/Styles/GlobalStyles';
import {getCurrentuser} from "../src/Redux/actions/userActions"
import { useDarkMode } from './Components/Styles/useDarkMode';
import styled, { ThemeProvider } from 'styled-components';
import HomePage from './Components/HomePage/HomePage';
import Navbar from './Components/Navbar/NavBar';
import Footer from './Components/Footer/Footer';
import LoginParent from './Components/LoginParent/LoginParent';
import LoginTeacher from './Components/LoginTeacher/LoginTeacher';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import PageTeacher from './Components/PageTeacher/PageTeacher';
import PageParent from './Components/PageParent/PageParent';
import Cours from './Components/Cours/Cours';
import Note from './Components/Note/Note';
import EditCours from './Components/EditCours/EditCours';
import PdfCour from './Components/PdfCour/PdfCour';
import AddCours from './Components/AddCours/AddCours';
import CoursParent from './Components/CoursParent/CoursParent';
import NoteParent from './Components/NoteParent/NoteParent';
import AddNote from './Components/AddNote/AddNote';
import ContactUs from './Components/ContactUs/ContactUs';
import AddChildren from './Components/AddChildren/AddChildren';
import LoginAdmin from './Components/LoginAdmin/LoginAdmin';
import PageAdmin from './Components/PageAdmin/PageAdmin';
import CoursG from './Components/CoursG/CoursG';
import NoteG from './Components/NoteG/NoteG';
import EnseignantG from './Components/EnseignantG/EnseignantG';
import ParentsG from './Components/ParentsG/ParentsG';
import PdfCourParent from './Components/PdfCourParent/PdfCourParent';
import ElevesG from './Components/ElevesG/ElevesG';
import EditCoursAdmin from './Components/EditCoursAdmin/EditCoursAdmin';
import PdfCourAdmin from './Components/PdfCourAdmin/PdfCour';
import EditNote from './Components/EditNote/EditNote';
import EditNoteG from './Components/EditNoteG/EditNoteG';

const Container = styled.div`
  max-width: 100%;
`;

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    
      dispatch(getCurrentuser())
    
  }, [dispatch])

  const [theme, toggleTheme] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;
  return (
    <div>
    <ThemeProvider theme={themeMode}>
      <Container>
        <Navbar/>
        <GlobalStyles />
        <Toggle theme={theme} toggleTheme={toggleTheme} />
        <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path="/AccountParent" element={<LoginParent/>}/>        
          <Route path="/AccountTeacher" element={<LoginTeacher/>}/>
          <Route path="/pageTeacher" element={<PageTeacher/>}/>
          <Route path="/pageParent" element={<PageParent/>}/>
          <Route path="/cours" element={<Cours/>}/>
          <Route path="/editcours/:id" element={<EditCours />} />
          <Route path="/editcoursG/:id" element={<EditCoursAdmin />} />
          <Route path="/editnote/:id" element={<EditNote/>} />
          <Route path="/editnoteG/:id" element={<EditNoteG/>} />

          <Route path="/pdf/:id" element={<PdfCour/>} />
          <Route path="/pdfParent/:id" element={<PdfCourParent/>} />
          <Route path="/pdfAdmin/:id" element={<PdfCourAdmin/>} />

          <Route path="/note" element={<Note/>}/>
          <Route path='/footer' element={<Footer/>} />
          <Route path="/AddCours" element={<AddCours/>}/>        
          <Route path="/coursParent" element={<CoursParent/>}/>
          <Route path="/noteParent" element={<NoteParent/>}/>
          <Route path='/contactUs' element={<ContactUs/>} />
          <Route path="/addChlidren" element={<AddChildren/>}/>
          <Route path="/coursG" element={<CoursG/>}/>
          <Route path="/noteG" element={<NoteG/>}/>
          <Route path="/parentsG" element={<ParentsG/>}/>
          <Route path="/enseignantG" element={<EnseignantG/>}/>
          <Route path="/elevesG" element={<ElevesG/>}/>

          <Route path="/loginAdmin" element={<LoginAdmin/>}/> 
          <Route path="/pageAdmin" element={<PageAdmin/>}/> 

          <Route path="/AddNote" element={<AddNote/>}/> 
        </Routes>
      </Container>
      <Footer />
    </ThemeProvider>
  </div>
  );
}

export default App;