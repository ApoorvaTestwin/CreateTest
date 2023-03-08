import Home from './pages/Home';
import './App.css';
import Sidebar from './components/Sidebar';
import CreateTest from './pages/createtest/CreateTest';
import CreateFree from './pages/createtest/CreateFree';
// import 'bootsrap/dist/css/bootsrtap.min.css';
// import 'bootstrap-icons/font/bootstrap-icons.css';

function App() {
  return (
    <div className="d-flex flex-column align-items-center">
                 {/* <div class="row row-offcanvas row-offcanvas-left"></div> */}
        
     {/* <CreateTest/> */}
     <CreateFree/>

    </div>
  );
}

export default App;
