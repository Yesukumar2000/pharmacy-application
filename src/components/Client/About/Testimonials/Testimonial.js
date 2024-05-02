import React from 'react'
import './Testimonial.css'
import TestimonialCard from './TestimonialCard';
import Img1 from './Images/img1.jpg';
import Img2 from './Images/img2.jpg';
import Img3 from './Images/img3.jpg';

function Testimonial() {
    const testimonials = [
        {
          pic: Img1,
          name: "Eleanor Crisp",
          role: "UX Design",
          description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum sint expedita molestiae facilis ex, est repellat."
        },
        {
          pic: Img2,
          name: "Lorem Lohiri",
          role: "Accountant",
          description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum sint expedita molestiae facilis ex, est repellat."
        },
        {
          pic: Img3,
          name: "Eleanor Rohith",
          role: "Frontend Developer",
          description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum sint expedita molestiae facilis ex, est repellat."
        },
        {
          pic: Img2,
          name: "Eleanor Crisp",
          role: "Backend Developer",
          description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum sint expedita molestiae facilis ex, est repellat."
        }, {
            pic: Img3,
            name: "Rolly Roman",
            role: "UX Design",
            description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum sint expedita molestiae facilis ex, est repellat."
          },{
          pic: Img1,
          name: "Eleanor Crisp",
          role: "Mern stack Developer",
          description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum sint expedita molestiae facilis ex, est repellat."
        }
      ];
      return (
        <>
          <h1>Testimonials</h1>
          <div className="testimonials">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonials-Block">
                <TestimonialCard
                  pic={testimonial.pic}
                  name={testimonial.name}
                  role={testimonial.role}
                  description={testimonial.description}
                />
              </div>
            ))}
          </div>
        </>
      );
}

export default Testimonial;