import HeadingPage from "../../components/layout/HeadingPage.jsx";
import { Helmet } from "react-helmet";
import { Parser } from "marked";
import { useState, useEffect} from "react";
import Spinner from "../../utilities/Spinner.jsx";
import SystemMessage from "../../utilities/SystemMessage.jsx";
import { api } from "../../constants/api.js";
import News from "./News.jsx"
import PrepList from "./PrepList.jsx"
import Checklist from "./Checklist.jsx"
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';

// const RSS_url = "https://www.mattilsynet.no/mat_og_vann/?service=rss";

// let Parser = require('rss-parser');
// let parser = new Parser();

function Dashboard() {
  // const url = api + "/announcements";

  // const [announcements, setAnnouncements] = useState([]);
  // const [loading, setLoading] = useState(true);


  // useEffect( () => {
  //   async function getAnnouncements() {
  //     try {
  //       const response = await fetch(url)

  //       if(response.ok) {
  //         const results = await response.json();
  //         console.log(results);
  //         setAnnouncements(results.data);
          
  //       }

  //     } catch(error) {
  //       console.log(error);
  //       <SystemMessage type={"message error"} content={"Something went wrong"} />

  //     } finally {
  //       setLoading(false);
  //     }
  //   }
  //   getAnnouncements();
  // }, [url])

  
  // if(loading) {
  //   return <Spinner />
  // };


  return (
    <>
      <Helmet>
        <title>Dashboard | Chef's App</title>
      </Helmet>
      {/* <HeadingPage>Dashboard</HeadingPage> */}
      <div id="dashboardContainer">
        <div id="prepListContainer">
          <PrepList  />
        </div>
        <div id="checkListContainer">
          <Checklist />
        </div>
        <div id="newsContainer">
          <News />
        </div>
      </div>
      
    </>
  )
}

export default Dashboard
