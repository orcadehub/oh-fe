import React from 'react'
import Slider from "react-slick";
import Logo from '../assets/profile.png'
const Testi = () => {
    const sliderSettings = {
        dots: false,
        infinite: true,
        speed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
      };

        // Testimonials from Colleges
  const testimonials = [
    { 
      profile: Logo, // Replace with actual profile image URL 
      name: "Thanvish", 
      college: "MBU, Tirupati", 
      feedback: "OrcadeHub provided outstanding training sessions. Our students benefited immensely!" 
    },
    { 
      profile: Logo,  
      name: "Manogna", 
      college: "SMCE, Guntur", 
      feedback: "The structured programs from OrcadeHub have significantly improved our placement rates!" 
    },
    { 
      profile:Logo,  
      name: "Meghana", 
      college: "Vignan, Guntur", 
      feedback: "A great partner in enhancing our students' coding and professional skills!" 
    },
    { 
      profile: Logo,  
      name: "Meghana", 
      college: "ASKW, Kurnool", 
      feedback: "OrcadeHub’s LMS is super interactive! Learning online has never been this structured and engaging." 
    },
    { 
      profile: Logo,  
      name: "Jahnavi", 
      college: "UCET, Guntur", 
      feedback: "The hands-on projects and real-world case studies helped me develop practical skills!" 
    },
    { 
      profile: Logo,  
      name: "Jahnavi", 
      college: "SVCET, Chittoor", 
      feedback: "The expert mentorship and coding challenges boosted my confidence for job interviews!" 
    },
    { 
      profile: Logo,  
      name: "Bhavana", 
      college: "ASKW, Kurnool", 
      feedback: "The placement assistance and resume-building sessions were invaluable. I got placed!" 
    },
    { 
      profile: Logo,  
      name: "Manju", 
      college: "UCET, Guntur", 
      feedback: "The interactive training methods and real-world projects made learning so much fun!" 
    },
    { 
      profile:Logo,  
      name: "Sumangali", 
      college: "SVCET, Chittoor", 
      feedback: "I started with zero coding knowledge, but thanks to OrcadeHub, I’m now confident in web development!" 
    },
    { 
      profile:Logo,  
      name: "Prasanna", 
      college: "MLEW, Guntur", 
      feedback: "The live projects gave me the real-world exposure I needed. Best decision ever!" 
    }
  ];
  
  return (

         <Slider {...sliderSettings}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-slide">
              <img 
            src={testimonial.profile} 
            alt={testimonial.name} 
            className="rounded-circle mb-3" 
            width="70" 
            height="70"
          />
          <h5>{testimonial.name}</h5>
          <p className="text-muted">{testimonial.college}</p>
          <p>"{testimonial.feedback}"</p>
              </div>
            ))}
          </Slider>
  )
}

export default Testi