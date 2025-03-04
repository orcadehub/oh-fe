import React from 'react'
import Slider from "react-slick";
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
      profile: "https://via.placeholder.com/50", // Replace with actual profile image URL 
      name: "Rajesh K.", 
      college: "MBU, Tirupati", 
      feedback: "OrcadeHub provided outstanding training sessions. Our students benefited immensely!" 
    },
    { 
      profile: "https://via.placeholder.com/50",  
      name: "Sneha M.", 
      college: "SMCE, Guntur", 
      feedback: "The structured programs from OrcadeHub have significantly improved our placement rates!" 
    },
    { 
      profile: "https://via.placeholder.com/50",  
      name: "Vikram R.", 
      college: "Vignan, Guntur", 
      feedback: "A great partner in enhancing our students' coding and professional skills!" 
    },
    { 
      profile: "https://via.placeholder.com/50",  
      name: "Anusha P.", 
      college: "UCET, Guntur", 
      feedback: "The hands-on projects and real-world case studies helped me develop practical skills!" 
    },
    { 
      profile: "https://via.placeholder.com/50",  
      name: "Kiran S.", 
      college: "CIET, Guntur", 
      feedback: "The interactive training methods and real-world projects made learning so much fun!" 
    },
    { 
      profile: "https://via.placeholder.com/50",  
      name: "Meghana J.", 
      college: "KKR & KSR, Guntur", 
      feedback: "The expert mentorship and coding challenges boosted my confidence for job interviews!" 
    },
    { 
      profile: "https://via.placeholder.com/50",  
      name: "Harish T.", 
      college: "ASKW, Guntur", 
      feedback: "OrcadeHub’s LMS is super interactive! Learning online has never been this structured and engaging." 
    },
    { 
      profile: "https://via.placeholder.com/50",  
      name: "Pooja R.", 
      college: "MLEW, Guntur", 
      feedback: "The placement assistance and resume-building sessions were invaluable. I got placed!" 
    },
    { 
      profile: "https://via.placeholder.com/50",  
      name: "Arjun V.", 
      college: "SVCET, Chittoor", 
      feedback: "I started with zero coding knowledge, but thanks to OrcadeHub, I’m now confident in web development!" 
    },
    { 
      profile: "https://via.placeholder.com/50",  
      name: "Divya S.", 
      college: "Mallareddy, Hyderabad", 
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