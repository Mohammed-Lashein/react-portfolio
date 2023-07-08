import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'
import data from './data'
const Card = ({item}) => {
    /* adding in the function params {item} and not just item is 
    extremely important , because the component has a props object
    that has the item .  */
    const {title, desc} = item;
  return (
    <article className="about__card">
    <div className='about__icon'>{<item.icon/>}</div>
    <h5>{title}</h5>
    <small>{desc}</small>
  </article>
  )
}
export default Card