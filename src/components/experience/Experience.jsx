// BsFillPatchCheckFill
import {BsFillPatchCheckFill} from 'react-icons/bs'
import frontEndExperience from './front-end-experience'
import backEndExperience from './back-end-experience'
import './experience.css'
const Experience = () => {
  return (
    <section id='experience'>
        <h5>What skills I have</h5>
        <h2>My Experience</h2>
        <div className="container experience__container">
          <div className="experience__front-end">
            <h3>frontend development</h3>
            <div className="experience__technologies">
            {frontEndExperience.map((experience) => {
              return (
                  <article className="experience__techonology" key={experience.id}>
                    <experience.icon className='experience__icon'/>
                    <div>
                    <div className='title'>{experience.title}</div>
                    <small className='text-light'>{experience.level}</small>
                    </div>
                  </article>
              )
            })}
              </div>
          </div>
          <div className="experience__back-end">
            <h3>Backend development</h3>
          <div className="experience__technologies">
            {backEndExperience.map((experience) => {
              return (
                <article className="experience__techonology" key={experience.id}>
                  <experience.icon className='experience__icon'/>
                  <div>
                    <div className='title'>{experience.title}</div>
                    <small className='text-light'>{experience.level}</small>
                    </div>
                </article>
            )
            })}
          </div>
          </div>
      </div>
    </section>
  )
}
export default Experience