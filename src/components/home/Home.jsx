import Sidebar from "../sidebar/Sidebar";
import Navbar from "../navbar/Navbar";
import "./home.scss";
import Main from "../main/Main";
import Profile from "../main/Profile/Profile";

const Home = () => {
  return (
  <div>
      <div className="row home ">
        <div className="col-lg-2" >
        <Sidebar  />

        </div>
     
     
      <div className="col-lg-10">
        <div className="row">
        <Navbar />  

        </div>
        <div className="row">
          <div className="col-md-9 mt-2">
          <Main className="main" /> 
          </div>
          <div className="col-md-3">
            <Profile />

          </div>
            
     

        </div>
      
        
         </div>   
    </div>
    
  </div>
  );
};

export default Home;
