import "./nav.css";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { BiMessageSquareDetail } from "react-icons/bi";
import { useState } from "react";
const Nav = () => {
	const [activeNavLink, setActiveNavLink] = useState("#");
	/* something new learnt: 
  Below in the return statement I used : 
  <a href='#about' onClick = {setActiveNavLink('#about)}></a>
  
  The above code threw an error in the console that said I had an infinite
  loop . After searching on stack overflow I found that the problem is
  the parens after the setActiveNavLink function causes the function
  to run automatically , which causes a re-render to the element,
  which calls the setActiveNavLink function again causing an infinite
  loop . 
  
  Solution >> wrap the setState function in a function so that onClick
  the wrapping function will be called and return the execution of
  the setState function . */

	return (
		<nav>
			<a
				href="#"
				className={activeNavLink === "#" ? "active" : ""}
				onClick={() => setActiveNavLink("#")}
			>
				<AiOutlineHome />
			</a>
			<a
				href="#about"
				onClick={() => setActiveNavLink("#about")}
				className={activeNavLink === "#about" ? "active" : ""}
			>
				<AiOutlineUser />
			</a>
			<a
				href="#experience"
				onClick={() => setActiveNavLink("#experience")}
				className={activeNavLink === "#experience" ? "active" : ""}
			>
				<BiBook />
			</a>
			<a href="#services" onClick={() => setActiveNavLink('#services')} className={activeNavLink === '#services' ? 'active': ''}>
				<RiServiceLine />
			</a>
			<a href="#contact" onClick={() => setActiveNavLink('#contact')} className={activeNavLink === '#contact' ? 'active' : ''}>
				<BiMessageSquareDetail />
			</a>
		</nav>
	);
};
export default Nav;
