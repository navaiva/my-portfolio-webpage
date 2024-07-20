import './skills.css';
import InfiniteSlider from './InfiniteSlider';

function App() {

  const techIcons1 = [
    { id: 0, icon: 'JavaScript', name: 'JavaScript' },
    { id: 1, icon: 'CSS', name: 'CSS' },
    { id: 2, icon: 'HTML', name: 'HTML' },
    { id: 3, icon: 'React', name: 'React' },
    { id: 4, icon: 'AWS', name: 'AWS' },
    { id: 5, icon: 'TypeScript', name: 'TypeScript' },
    { id: 6, icon: 'Jest', name: 'Jest' },
    { id: 7, icon: 'Electron', name: 'Electron' },
    { id: 8, icon: 'MongoDB', name: 'MongoDB' },
    { id: 9, icon: 'PSQL', name: 'PSQL' },
    { id: 10, icon: 'Redux', name: 'Redux' },
    { id: 11, icon: 'Express', name: 'Express' },
    { id: 12, icon: 'Node', name: 'Node.js' },
    { id: 13, icon: 'Three', name: 'Three.js' },
    { id: 14, icon: 'NPM', name: 'NPM' },
    { id: 15, icon: 'Docker', name: 'Docker' },
    { id: 16, icon: 'Tailwind', name: 'Tailwind CSS' },
    { id: 17, icon: 'SASS', name: 'SASS' },
    { id: 18, icon: 'GitHub', name: 'Github' },
    { id: 19, icon: 'Git', name: 'Git' },
    { id: 20, icon: 'API', name: 'C++' },
    { id: 14, icon: 'NPM', name: 'NPM' },
    { id: 15, icon: 'Docker', name: 'Docker' },
    { id: 16, icon: 'Tailwind', name: 'Tailwind CSS' },
    { id: 17, icon: 'SASS', name: 'SASS' },
    { id: 18, icon: 'GitHub', name: 'Github' },
    { id: 19, icon: 'Git', name: 'Git' },
    { id: 20, icon: 'API', name: 'C++' }
    
  ];

  const techIcons2 = [
    { id: 1, icon: 'Apollo', name: 'Apollo' },
    { id: 2, icon: 'Ajax', name: 'Ajax' },
    { id: 3, icon: 'CPlusPlus', name: 'C++' },
    { id: 4, icon: 'Java', name: 'Java' },
    { id: 5, icon: 'Swift', name: 'swift' },
    { id: 6, icon: 'Vue', name: 'Vue' },
    { id: 7, icon: 'PHP', name: 'PHP' },
    { id: 8, icon: 'Python', name: 'Python' },
    { id: 9, icon: 'CSharp', name: 'C#' },
    { id: 10, icon: 'Django', name: 'Django' },
    { id: 11, icon: 'Next', name: 'Next.js' },
    { id: 12, icon: 'ReactNative', name: 'React Native' },

  ]

  return (
<div className="skills">
    <div  className='skills-pre'>
    <h1 className='skills-det'>Skills</h1>
    </div>
    <div className='slider-infinite'>
    <InfiniteSlider items={techIcons1} speed={30} />
    </div>
    <div  className='skills-pre'>
    <h1 className='skills-det'>Skills To Learn</h1>
    </div>
    <div className='slider-infinite'>
    <InfiniteSlider items={techIcons2} speed={20} />
    </div>
  </div>
  ) 
}

export default App;
