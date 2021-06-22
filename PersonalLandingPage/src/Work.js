import Divider from './Divider'
import WorkExperience from './WorkExperience'

import workData from './data/workExperience.json';

function Work () {
  return (
    <>
      <Divider 
        number='0.3'
        text='Some Things I’ve Built'
      />
      <p className="secondary">Work here.</p>
      { workData.map((work, i) => <WorkExperience key={i} workContent={work}/>) }
    </>
  )
}

export default Work
