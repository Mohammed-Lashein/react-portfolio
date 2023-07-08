import "./about.css";
import data from "./data";
import Card from "./Card";
const About = () => {
	return (
		<section id="about">
			<h5>Get to know</h5>
			<h2>About Me</h2>
			<div className="container about__container">
				<div className="about__me">
					<div className="about__me-image">
						<img src="https://images.unsplash.com/photo-1586210579191-33b45e38fa2c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZGVza3RvcCUyMGNvbXB1dGVyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60" alt="avatar image" />
					</div>
				</div>
				<div className="about__content">
					<div className="about__cards">
						{data.map((item) => {
							return <Card item={item} key={item.id} />;
						})}
					</div>

					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime,
						natus reiciendis eos odit iusto corrupti iste quibusdam. Nihil autem
						dicta nobis dolorum, eum magni, obcaecati doloribus, laboriosam
						alias nam perferendis?
					</p>
          <a href="#contact" className="btn btn-primary">Let's Talk</a>
				</div>
			</div>
		</section>
	);
};
export default About;
