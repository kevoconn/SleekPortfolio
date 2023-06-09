import WorkDayScheduler from "./assets/images/WorkDayScheduler.png"
import TomSkilling from "./assets/images/TomSkilling.png";
import Takez from "./assets/images/TakezTakeaway.png";
import Notes from "./assets/images/Note Taker.png";
import Bruce from "./assets/images/BRUCEBLOG.png";
import Attak from "./assets/images/AttakTracker.png";
import Tenner from "./assets/images/Tenner.png";


let resumeData = {
  imagebaseurl: "https://github.com/kevoconn",
  name: "Kevin O'Connor",
  role: "Frontend Developer",
  email: " kevin.oconnor@northwestern.edu",
  github: " Kevoconn",
  linkedinId: "kevin-o-connor-251424270",
  roleDescription: "A Long Time Ago, In a Galaxy Far, Far Away... I would write a witty description of myself here, but I'm not sure what to say. I'm a full stack web developer with a passion for learning and creating. I'm currently working on a few projects, and I'm always looking for new opportunities to learn and grow.",
  socialLinks: [
    {
      name: "linkedin",
      url: "https://www.linkedin.com/in/kevin-o-connor-251424270/",
      className: "fa fa-linkedin",
    },
    {
      name: "github",
      url: "https://github.com/kevoconn",
      className: "fa fa-github",
    },
    {
      name: "Twitter",
      url: "https://urldefense.com/v3/__https://twitter.com/TalMcgurlagher?t=Rxll6U3eEiKuHM82YNRZqg&s=09__;!!Dq0X2DkFhyF93HkjWTBQKhk!SZ7ioar1pMazlx6l5FDnnxedb7nJXJiM-UQWk_hq5AOUg1FsAMkBWLHMpkKgxAXe9h-bs-hOWKfdHluxViEFn4cYtMX6Zx0$",
      className: "fa fa-twitter",
    },
  ],
  aboutme: "I am recent bootcamp graduate, class of 2023 (WOO-HOO!), and a wannabe junior full-stack developer in Chicago. I am currently employed as a Stationary Engineer but am looking to make the jump to my passion, Web Development.",

  address: "Chicago, IL",
  website: "kevin.oconnor@northwestern.edu",
  education: [
    {
      UniversityName: "Northwestern University Bootcamp",
      specialization: "Full Stack Web Development",
      MonthOfPassing: "April",
      YearOfPassing: "2023",
     
    },
    {
      UniversityName: "Triton Community College",
      specialization: "Building Engineering",
      MonthOfPassing: "May",
      YearOfPassing: "2012",
      Achievements: "Boiler Operator Liscense",
    },
    {
      UniversityName: "University of Illinois at Chicago",
      specialization: "Criminal Justice",
      MonthOfPassing: "May",
      YearOfPassing: "2008",
      
    },
  ],
  work: [
    {
      CompanyName: "Northwestern University",
      specialization: "Boiler Operator",
      MonthOfLeaving: "Current",
      YearOfLeaving: "2023",
    },
    {
      CompanyName: "3701 W. Lake St.",
      specialization: "Apprentice Stationary Engineer",
      MonthOfLeaving: "May",
      YearOfLeaving: "2013",
     
    },
  ],
  // skillsDescription: "Your skills here",
  skills: [
    {
      skillname: "HTML5",
    },
    {
      skillname: "CSS3",
    },
    {
      skillname: "Reactjs",
    },
    {
      skillname: "Nodejs",
    },
    {
      skillname: "MongoDB",
    },
    {
      skillname: "MySQL",
    },
    {
      skillname: "Express",
    },
    {
      skillname: "GraphQL",
    },
    {
      skillname: "JavaScript ES6+",
    },
    {
      skillname: "Tailwind",
    },
    {
      skillname: "Bootstrap",
    },
    {
      skillname: "JQuery",
    },
    {
      skillname: "GitHub",
    },
  ],

  portfolio: [
    {
      name: "Workday Scheduler",
      description: "A calendar application that allows a user to save events for each hour of the day.",
      imgurl: WorkDayScheduler,
      url: "https://kevoconn.github.io/DailyChores/",
    },
    {
      name: "Weather App",
      description: "A weather app to search any city and see the current weather and a 5 day forecast.",
      imgurl: TomSkilling,
      url: "https://kevoconn.github.io/TomSkillingCanSuckIt/",
      
    },
    {
      name: "Food App",
      description: "A food app that allows a user to search for a restaurant and see the menu.",
      imgurl: Takez,
      url: "https://team-takez.github.io/project-one/",
    },
    {
      name: "Note Taker",
      description: "A note taker app that allows a user to create, save, and delete notes.",
      imgurl: Notes,
      url: "https://notation-thief.vercel.app/"
    },
    {
      name: "BruceBlog",
      description: "A blog app that allows a user to create, save, and delete blog posts.",
      imgurl: Bruce,
      url: "http://thebruceblog.com/"
    },
    {
      name: "Attak Tracker",
      description: "A workout tracker app that allows a user to create, save, and delete workouts.",
      imgurl: Attak,
      url: "https://kevoconn.github.io/attak-trackerz/"
    },
    {
      name: "Tenner",
      description: "A freelance app that allows a user to create requests, edit, and correspond with requester to complete task.",
      imgurl: Tenner,
      url: "https://tack-a-tenner.herokuapp.com/"
    }
  ],

};

export default resumeData;
