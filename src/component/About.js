import React from 'react'

const About = () => {
  return (
    <div className='col-md-12 p-2 mt-5 '>
       <div className='col-md-12 p-5  d-flex  align-items-center justify-content-between'>
          <div className='circle About-marginLeft mt-5 shadow'>
            <img src='/homeimage.jpg ' alt=''></img>
            <div className='bigCircle'></div>
          </div>
          <div className='About-para-section  About-marginTop'>
            <h3 className='text-success mt-5'>About me</h3>
            <p className='text-secondary'>
               Hello! I'm Aman Sharma, a passionate FullStack Developer with a flair for innovative FrontEnd and BackEnd development. I'm on a quest to advance my career by collaborating with reputable brands and delivering cutting-edge solutions. With expertise in a wide array of technologies and a strong foundation in UI/UX development and design, I'm ready to take on exciting challenges and contribute to your projects' success.
            </p>
          </div>
       </div>
       <div className='col-md-12 mt-5 p-5 d-flex flex-column align-items-center justify-content-between'>
        <h3 className='mt-5 mb-5 text-success fw-bold'>Here's a glimpse of what I bring to the table</h3>
         <div className=' About-divided-section'>
             <div className='About-para-section About-marginBottom'>
                <h3 className='text-success'>Technology Stack</h3>
                <p className='text-secondary'>
                I am well-versed in a range of technologies, including ReactJS, NodeJS, HTML, CSS, JavaScript, TypeScript, MongoDB, MySQL, Restful APIs, AdobeXD, Figma, and more. My diverse skill set allows me to tackle complex projects with ease and precision.
                </p>
              </div>
              <div className='rectangle p-2 bg-white shadow'>
              <img className=' rounded-2' src='/techcover.jpg' alt='Mern'></img>
              </div>
         </div>
       </div>
       <div className='col-md-12 mt-5 p-5 d-flex flex-column align-items-center justify-content-between'>
         <div className=' About-divided-section'>
              <div className='rectangle shadow '>
              <img src='/UIEthanticate.jpg' alt='UI/UX'></img>
              </div>             
              <div className='About-para-section  About-marginTop'>
                <h3 className='text-success'>UI/UX Enthusiast</h3>
                <p className='text-secondary'>
                I have a keen eye for user interface and user experience design, which enables me to create visually appealing and user-friendly applications. My expertise in responsive design ensures that your projects are accessible on various devices and screen sizes.
                </p>
              </div>
         </div>
       </div>
       <div className='col-md-12 mt-5 p-5 d-flex flex-column align-items-center justify-content-between'>
         <div className=' About-divided-section'>
             <div className='About-para-section p-4 About-marginBottom'>
                <h3 className='text-success'>Multilingual</h3>
                <p className='text-secondary'>
                Fluent in both Hindi and English, I can effectively communicate and collaborate with diverse teams and clients.
                </p>
              </div>
              <div className='rectangle shadow '>
              <img src='/languageimg.jpg' alt=''></img>
              </div>
         </div>
       </div>
       <div className='col-md-12 mt-5 p-5 d-flex flex-column align-items-center justify-content-between'>
         <div className='  About-divided-section'>
              <div className='rectangle shadow'>
                <img src='/boycover.jpg' alt=''></img>
              </div>
              <div className='About-para-section About-marginTop'>
                <h3 className='text-success'>Part-Time Freelancer</h3>
                <p className='text-secondary'>
                At the age of 23, I am a part-time freelancer, balancing my passion for development with other commitments. My dedication and commitment to each project I undertake are unwavering.
                </p>
              </div>
         </div>
       </div>
       <div className='col-md-12 mt-5 p-5  d-flex flex-column align-items-center justify-content-center'>
          <p className='text-success fw-bold About-para-section'>
           My dedication and commitment to each project I undertake are unwavering.I am excited to bring my skills, dedication, and passion to your projects and make a meaningful impact. Let's collaborate and create something extraordinary together!  At the age of 23, I am a part-time freelancer, balancing my passion for development with other commitments.
          </p>
       </div>
       
    </div>
  )
}

export default About