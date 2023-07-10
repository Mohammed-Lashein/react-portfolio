


// import function to register Swiper custom elements
import { register } from 'swiper/element/bundle';
// register Swiper custom elements
register();

import "./testimonials.css";
import { Pagination } from 'swiper/modules';

const Testimonials = () => {
  /* Note: swiper-slide uses kebab-case so on tags and attributes , so
  we should change className to be class so that our styling would
  have effect .  */
	return (
		<section id="testimonials">
			<h5>Review from clients</h5>
			<h2>Testimonials</h2>

			<swiper-container class="container testimonials__container" slides-per-view='1' space-between='50' Pagination='true'>

				<swiper-slide class="testimonial">
					<div className="client__avatar">
						<img src="https://via.placeholder.com/300" alt="client avatar" />
					</div>
					<h5 className="client__name">client name</h5>
					<small className="client__review">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
						aliquid ipsa earum dignissimos architecto, eius cupiditate, facere
						quis eum ea deleniti obcaecati sint. Aperiam voluptate ea
						accusantium laborum consequatur quia.
					</small>
				</swiper-slide>
        

				<swiper-slide class="testimonial">
					<div className="client__avatar">
						<img src="https://via.placeholder.com/300" alt="client avatar" />
					</div>
					<h5 className="client__name">client name</h5>
					<small className="client__review">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
						aliquid ipsa earum dignissimos architecto, eius cupiditate, facere
						quis eum ea deleniti obcaecati sint. Aperiam voluptate ea
						accusantium laborum consequatur quia.
					</small>
				</swiper-slide>

				<swiper-slide class="testimonial">
					<div className="client__avatar">
						<img src="https://via.placeholder.com/300" alt="client avatar" />
					</div>
					<h5 className="client__name">client name</h5>
					<small className="client__review">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
						aliquid ipsa earum dignissimos architecto, eius cupiditate, facere
						quis eum ea deleniti obcaecati sint. Aperiam voluptate ea
						accusantium laborum consequatur quia.
					</small>
				</swiper-slide>

				<swiper-slide class="testimonial">
					<div className="client__avatar">
						<img src="https://via.placeholder.com/300" alt="client avatar" />
					</div>
					<h5 className="client__name">client name</h5>
					<small className="client__review">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
						aliquid ipsa earum dignissimos architecto, eius cupiditate, facere
						quis eum ea deleniti obcaecati sint. Aperiam voluptate ea
						accusantium laborum consequatur quia.
					</small>
				</swiper-slide>

			</swiper-container>
		</section>
	);
};
export default Testimonials;
