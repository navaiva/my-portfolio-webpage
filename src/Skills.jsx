import './skills.css';
import InfiniteSlider from './InfiniteSlider';
// import 'devicons/devicon.min.css';
// import 'devicons/devicon-colors.css';

function App() {

  const techIcons = [
    { id: 0, icon: 'JavaScript', name: 'JavaScript' },
    { id: 1, icon: 'CSS', name: 'CSS' },
    { id: 2, icon: 'HTML', name: 'HTML' },
    { id: 3, icon: 'React', name: 'React' },
    { id: 4, icon: 'AWS', name: 'AWS' },
    { id: 5, icon: 'TypeScript', name: 'TypeScript' },
    { id: 6, icon: 'Jest', name: 'Jest' },
    { id: 7, icon: 'electron', name: 'Electron' },
    { id: 8, icon: 'MongoDB', name: 'MongoDB' },
    { id: 9, icon: 'PSQL', name: 'PSQL' },
    { id: 12, icon: 'Redux', name: 'Redux' },
    { id: 13, icon: 'Express', name: 'Express' },
    { id: 14, icon: 'Node', name: 'Node.js' },
    { id: 15, icon: 'Next', name: 'Next.js' },
    { id: 16, icon: 'ReactNative', name: 'React Native' },
    { id: 17, icon: 'Three', name: 'Three.js' },
    { id: 18, icon: 'NPM', name: 'NPM' },
    { id: 19, icon: 'PHP', name: 'PHP' },
    { id: 20, icon: 'Python', name: 'Python' },
    { id: 21, icon: 'CSharp', name: 'C#' },
    { id: 22, icon: 'Django', name: 'Django' },
    { id: 23, icon: 'Docker', name: 'Docker' },
    { id: 24, icon: 'Tailwind', name: 'Tailwind CSS' },
    { id: 25, icon: 'SASS', name: 'SASS' },
    { id: 26, icon: 'Vue', name: 'Vue' },
    { id: 27, icon: 'Github', name: 'Github' },
    { id: 28, icon: 'Git', name: 'Git' },
    { id: 29, icon: 'Ajax', name: 'Ajax' },
    { id: 30, icon: 'CPlusPlus', name: 'C++' },
    { id: 31, icon: 'Java', name: 'Java' },
    { id: 32, icon: 'Swift', name: 'swift' },
    { id: 33, icon: 'API', name: 'C++' },
    { id: 34, icon: 'Apollo', name: 'Apollo' },
  ];

  return (
<div className="skills">
    <div  className='skills-pre'>
    <h1 className='skills-det'>Skills</h1>
    </div>
    <div className='slider-infinite'>
    <InfiniteSlider items={techIcons} />
    </div>
    <div  className='skills-pre'>
    <h1 className='skills-det'>Skills To Learn</h1>
    </div>
    <div className='slider-infinite'>
    <InfiniteSlider items={techIcons} />
    </div>
  </div>
  ) 
}

export default App;
