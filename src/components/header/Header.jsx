import './header.css'
import CTA from './CTA'
import HeaderSocials from './HeaderSocials'
const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>{`{Developer Name}`}</h1>
        <h5 className='text-light'>FullStack developer </h5>
        <CTA/>
        <HeaderSocials/>

        <div className='me'>
          <img src="" alt="avatar_image" />
        </div>
        <a href="#contact" className='scroll-down'>Scroll Down</a>
      </div>
    </header>
  )
}
export default Header