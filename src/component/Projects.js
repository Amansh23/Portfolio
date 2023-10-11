import React from 'react'
import { Link } from 'react-router-dom'

const Projects = () => {

 const grhamstaysProject = () => {
    window.open("https://grhamstays.com/")
 }

 const digiroitwebsiteProject = () => {
    window.open("https://endearing-kheer-ba4dfd.netlify.app/")
 }

 const websiteopenerDigiroit = () => {
    window.open(' https://www.digiroit.com/ ')
 }

 const MovieDatabaseProject = () => {
    window.open("https://warm-cat-98b4c5.netlify.app/")
   }

   const templateProject = () => {
    window.open("https://website-templates.onrender.com/")
   }

   const FloraFlaternityProject = () => {
    window.open("https://amansh23.github.io/FloraFlaternity/")
   }

   
 const wecreateProject = () => {
    window.open("https://amansh23.github.io/we-create/")
   }
 
   const EmiCalculatorProject = () => {
    window.open("https://amansh23.github.io/Emi-calculator/")
  }   

  const QrCodegeneratorProject = () => {
    window.open("https://qrcode-generator-smf1.onrender.com/")
   }


  return (
    <div className='col-md-12  '>
        <div className='col-md-12 mt-5 p-5 d-flex  align-items-center justify-content-between'>
            <div className='About-para-section'>
                <h3 className='text-success'>Client and Admin Side Development for <Link className=' text-secondary' onClick={grhamstaysProject}>grhammstays.com</Link> </h3>
                <h6 className='text-success mt-4'><span className='text-secondary'>Company: -</span> Digiroit Technologies Pvt Ltd</h6>   
                <Link className='text-decoration-none ' onClick={websiteopenerDigiroit} ><h6  className='text-success mt-2 cursor-pointer'><span className='text-secondary'>Website: -</span>https://www.digiroit.com/</h6> </Link>
                <p className='text-secondary'>
                During my trainee period at DigiRoit Technologies, I had the opportunity to contribute significantly to a high-impact project involving the development of both client and admin sides of a web application. This project showcases my proficiency in web development and highlights my ability to work on both front-end and back-end components.
                </p>  
            </div>
         <Link onClick={grhamstaysProject}>
            <div className='grhamstaysimg  About-marginLeft About-marginTop shadow'></div>
            <div className='grhamstaysdiv'>
                 <div className='grhamstaysimgOuterleft'></div>
                <div className='grhamstaysimgOuterright'></div>
            </div>
         </Link>
        </div>
        <div className='col-md-12 mt-5 p-5 d-flex align-items-center justify-content-between'>
             <div className='About-para-section p-3'>
                <h3 className='text-success'>Backend Development</h3>
                <h6 className='text-success mt-3'> Secure Authentication </h6>   
                <p className='text-secondary'>
                <i class="bi bi-backspace-reverse-fill"></i> On the admin side, I implemented robust authentication mechanisms to ensure data security, restricting access to authorized personnel only.
                </p>
                <h6 className='text-success mt-3'> API Development </h6>   
                <p className='text-secondary'>
                <i class="bi bi-backspace-reverse-fill"></i>  I created RESTful APIs to facilitate seamless communication between the client and server, enabling dynamic data updates and real-time interaction.
                </p>
                <h6 className='text-success mt-3'> Database Management </h6>   
                <p className='text-secondary'>
                <i class="bi bi-backspace-reverse-fill"></i>   I designed and implemented the database structure, enabling efficient data storage, retrieval, and management.
                </p>
                <h6 className='text-success mt-3 p-2'> Technologies Used: <span className='text-secondary'>Node.js, Express.js, MongoDB, JWT (JSON Web Tokens), Git</span> </h6>        
            </div>
            <div className='About-para-section p-3'>
                <h3 className='text-success'>Frontend Development</h3>
                <h6 className='text-success mt-3'> User-Centric Design </h6>   
                <p className='text-secondary'>
                <i class="bi bi-backspace-reverse-fill"></i> I played a pivotal role in designing and implementing the user interface of the client side. My focus was on creating an intuitive, user-friendly experience that aligns with modern design trends and best practices.
                </p>
                <h6 className='text-success mt-3'> Responsive Design </h6>   
                <p className='text-secondary'>
                <i class="bi bi-backspace-reverse-fill"></i>   I ensured that the client side was fully responsive, delivering a seamless experience on various devices, from desktops to smartphones.
                </p>
                <h6 className='text-success mt-3'> Interactive Features </h6>   
                <p className='text-secondary'>
                <i class="bi bi-backspace-reverse-fill"></i>    I integrated interactive elements such as forms, dynamic content loading, and user-friendly navigation, enhancing user engagement and satisfaction.
                </p>
                <h6 className='text-success mt-3 p-2'> Technologies Used: <span className='text-secondary'>HTML5, CSS3, JavaScript, React.js, AWS (Amazon Web Services)</span> </h6>        
            </div>  
        </div>
        <div className='col-md-12 p-5 d-flex align-items-center justify-content-between'>
            <p className='text-success fw-bold'>
                
                The successful development of both client and admin sides of this web application resulted in an efficient, user-friendly, and secure system that met the project objectives. The project not only provided me with valuable hands-on experience but also showcased my ability to contribute effectively to a real-world development project.
                This project at DigiRoit Technologies represents a significant milestone in my career, highlighting my proficiency in both frontend and backend development. It reflects my dedication to delivering high-quality, user-centric solutions and demonstrates my adaptability in working with cutting-edge technologies. I am proud to include this project in my portfolio, as it exemplifies my commitment to excellence in web development.
            </p>
        </div>
        <div className='col-md-12  p-5 d-flex  align-items-center justify-content-between'>
            <Link onClick={digiroitwebsiteProject}>
                <div className='digiroitwebsiteProjectimg  About-marginLeft About-marginBottom shadow'></div>
            </Link>
            <div className='About-para-section'>
                <h3 onClick={digiroitwebsiteProject} style={{cursor:'pointer'}} className='text-success'> DigiRoit Technologies Website Template  </h3>
                <Link className='text-decoration-none ' onClick={digiroitwebsiteProject} ><h6  className='text-success mt-2 cursor-pointer'><span className='text-secondary'>Website: -</span>https://endearing-kheer-ba4dfd.netlify.app/</h6> </Link>
                <p className='text-secondary'>
                Welcome to the DigiRoit Technologies Website Template, a cutting-edge web development masterpiece crafted with ReactJS and classic CSS. This visually stunning and highly functional template is designed to bring your tech-savvy brand to life and provide a seamless online experience for your audience.
                </p>  
            </div>
       
        </div>
        <div className='col-md-12 mt-5 p-5 d-flex align-items-center justify-content-between'>
             <div className='About-para-section p-3'>
                <h3 className='text-success'>Sleek Modern Design</h3>
                <p className='text-secondary'>
                <i class="bi bi-backspace-reverse-fill"></i> Our template boasts a sleek and modern design that reflects the innovative and dynamic nature of DigiRoit Technologies. With a clean layout, elegant typography, and a harmonious color palette, it's visually appealing and user-friendly.
                </p>
                <h3 className='text-success'>Customizable Components</h3>
                <p className='text-secondary'>
                <i class="bi bi-backspace-reverse-fill"></i> The power of ReactJS allows you to easily customize and extend this template to meet your specific needs. Build and modify components to tailor your website for your unique offerings and services.
                </p>
            </div>
            <div className='About-para-section p-3'>
                <h3 className='text-success'>Smooth Animations</h3>
                <p className='text-secondary'>
                <i class="bi bi-backspace-reverse-fill"></i>  Delight your visitors with smooth animations and transitions. These subtle yet engaging elements add a touch of sophistication to your website, leaving a lasting impression on your audience.
                </p>
                <h3 className='text-success'>Efficient Performance</h3>
                <p className='text-secondary'>
                <i class="bi bi-backspace-reverse-fill"></i>  We've optimized this template for fast loading times, ensuring a smooth and efficient browsing experience. Keep your visitors engaged without the frustration of slow-loading pages.
                </p>
            </div>  
        </div> 
        <h3 className='text-secondary p-5' >Key Features</h3>
        <div className='col-md-12 p-5 d-flex align-items-center justify-content-between'>
            <p className='text-success fw-bold'>
            Launch your DigiRoit Technologies website with confidence, knowing you have a robust, stylish, and user-friendly template at your disposal. With the power of ReactJS and classic CSS, your online presence will stand out in the competitive technology landscape.
            Explore the limitless possibilities and start crafting your digital future with the DigiRoit Technologies Website Template today!    
             </p>
        </div>
        <div className='col-md-12  p-5 d-flex  align-items-center justify-content-between'>
            <div className='About-para-section'>
                <h3 onClick={MovieDatabaseProject} style={{cursor:'pointer'}} className='text-success'> Movie Database Website  </h3>
                <Link className='text-decoration-none ' onClick={MovieDatabaseProject} ><h6  className='text-success mt-2 cursor-pointer'><span className='text-secondary'>Website: -</span>https://warm-cat-98b4c5.netlify.app/</h6> </Link>
                <p className='text-secondary'>
                I am excited to present my personal project, the Movie Database Website, which I developed as a testament to my passion for web development and my love for movies. This project is a comprehensive online platform that offers movie enthusiasts a rich and user-friendly experience to explore, discover, and engage with their favorite films.
                </p>  
            </div>
            <Link onClick={MovieDatabaseProject}>
                <div className='MovieDatabaseimg  About-marginLeft About-marginTop shadow'></div>
            </Link>
        </div>
        <div className='col-md-12 mt-5 p-5 d-flex align-items-center justify-content-between'>
             <div className='About-para-section p-3'>
                <h3 className='text-success'>Backend Development</h3>
                <p className='text-secondary'>
                <i class="bi bi-backspace-reverse-fill"></i>  For the backend process, the project relies on API fetching from the original TMDB (The Movie Database) APIs. This API integration provides real-time access to a wealth of movie-related data, including movie details, cast information, reviews, and more. It ensures that the website's content is always up-to-date and comprehensive.
                </p>
            </div>
            <div className='About-para-section p-3'>
                <h3 className='text-success'>Frontend Development</h3>
                <p className='text-secondary'>
                <i class="bi bi-backspace-reverse-fill"></i> The frontend of the Movie Database Website is built using React.js, a popular and powerful JavaScript library for building interactive user interfaces. React.js allows for the creation of responsive and dynamic components, ensuring a smooth and engaging user experience.
                </p>
               
            </div>  
        </div> 
        <h3 className='text-secondary p-5' >Key Features</h3>
        <div className='col-md-12 p-5 d-flex align-items-center justify-content-between'>
            <p className='text-success fw-bold'>
                The Movie Database Website boasts an extensive database of movies from various genres, eras, and languages. Users can easily search for their favorite films, discover new releases, and explore hidden gems.
                Each movie listing provides in-depth information, including a synopsis, cast and crew details, release date, genre, and user ratings. This ensures that users have all the information they need to make informed viewing choices.
                The website offers powerful search and filtering options, allowing users to narrow down their movie choices based on various criteria, such as genre, release year, and actor.
                The website offers powerful search and filtering options, allowing users to narrow down their movie choices based on various criteria, such as genre, release year, and actor.
            </p>
        </div>
        <div className='col-md-12  p-5 d-flex  align-items-center justify-content-between'>
             <Link onClick={templateProject}>
                <div className='templateProjectimg  About-marginLeft About-marginBottom shadow'></div>
            </Link>
            <div className='About-para-section'>
                <h3 onClick={templateProject} style={{cursor:'pointer'}} className='text-success'> Website Template  </h3>
                <Link className='text-decoration-none ' onClick={templateProject} ><h6  className='text-success mt-2 cursor-pointer'><span className='text-secondary'>Website: -</span>https://website-templates.onrender.com/</h6> </Link>
                <p className='text-secondary'>
                Introducing a stunning and highly versatile website template meticulously crafted by me, a passionate developer. This template is designed to elevate your web presence with its exceptional responsiveness, dynamic functionalities, and visually captivating CSS features. Whether you're building a personal blog, a business site, or an online portfolio, this template has you covered.
                </p>  
            </div>
        </div>
        <div className='col-md-12 mt-5 p-5 d-flex align-items-center justify-content-between'>
             <div className='About-para-section p-3'>
                <h3 className='text-success'>Frontend Development</h3>
                <h6 className='text-success mt-3'> Responsive Design </h6> 
                <p className='text-secondary'>
                <i class="bi bi-backspace-reverse-fill"></i>  This website template boasts a fully responsive design, ensuring a seamless and enjoyable user experience across a wide range of devices, from desktops and laptops to tablets and smartphones. It adapts effortlessly to different screen sizes and orientations.
                </p>
                <h6 className='text-success mt-3'> CSS Magic </h6> 
                <p className='text-secondary'>
                <i class="bi bi-backspace-reverse-fill"></i>  The CSS styles in this template are carefully designed to stand out. From eye-catching hover effects to beautifully designed buttons and typography, the CSS enhancements add a touch of elegance and professionalism to your website.
                </p>
            </div>
            <div className='About-para-section p-3'>
            <h6 className='text-success mt-3'> Modern UI/UX </h6>
                <p className='text-secondary'>
                <i class="bi bi-backspace-reverse-fill"></i> The frontend of the Movie Database Website is built using React.js, a popular and powerful JavaScript library for building interactive user interfaces. React.js allows for the creation of responsive and dynamic components, ensuring a smooth and engaging user experience.
                </p>
                <h6 className='text-success mt-3'> Smooth Transitions </h6>
                <p className='text-secondary'>
                <i class="bi bi-backspace-reverse-fill"></i>  Implementing smooth page transitions, this template adds an extra layer of sophistication to your website, ensuring that users navigate effortlessly between pages.
                </p>
            </div>  
        </div>
        <h3 className='text-secondary p-5' >Key Features</h3>
        <div className='col-md-12 p-5 d-flex align-items-center justify-content-between'>
            <p className='text-success fw-bold'>
                This website template is a testament to my dedication to web development and my commitment to delivering outstanding user experiences. It combines the power of React.js, responsive design, and captivating CSS features to help you create a visually stunning and highly functional website. Elevate your online presence with this template, and make a lasting impression on your visitors.
               </p>
        </div>
        <div className='col-md-12  p-5 d-flex  align-items-center justify-content-between'>
            <div className='About-para-section'>
                <h3 onClick={FloraFlaternityProject} style={{cursor:'pointer'}} className='text-success'> User-Friendly Interactive Website with HTML, CSS, and JavaScript Locomotive Scroll  </h3>
                <Link className='text-decoration-none ' onClick={FloraFlaternityProject} ><h6  className='text-success mt-2 cursor-pointer'><span className='text-secondary'>Website: -</span>https://amansh23.github.io/FloraFlaternity/</h6> </Link>
                <p className='text-secondary'>
                Welcome to my HTML, CSS, and JavaScript Locomotive Scroll project, where I've combined cutting-edge web technologies to create an immersive and user-friendly interactive experience. This project is a testament to my commitment to providing a seamless and engaging web journey for users
                </p>  
            </div>
            <Link onClick={FloraFlaternityProject}>
                <div className='Floraflaternityimg  About-marginLeft About-marginTop shadow'></div>
            </Link>
        </div>
        <div className='col-md-12 mt-5 p-5 d-flex align-items-center justify-content-between'>
             <div className='About-para-section p-3'>
                <h3 className='text-success'>Frontend Development</h3>
                <h6 className='text-success mt-3'> Locomotive Scroll </h6> 
                <p className='text-secondary'>
                <i class="bi bi-backspace-reverse-fill"></i>  The centerpiece of this project is the implementation of Locomotive Scroll, a JavaScript library that enables smooth and controlled scrolling animations. It allows for captivating parallax effects, easing transitions, and precise control over scroll behavior, enhancing the overall user experience.
                </p>
                <h6 className='text-success mt-3'> Custom CSS Styling </h6> 
                <p className='text-secondary'>
                <i class="bi bi-backspace-reverse-fill"></i>  The project showcases the power of CSS with custom styling that not only enhances the aesthetics but also adds personality to the website. Unique color schemes, typography choices, and stylish transitions contribute to an immersive visual experience.
                </p>
            </div>
            <div className='About-para-section p-3'>
                <h6 className='text-success mt-3'> Responsive Design </h6> 
                <p className='text-secondary'>
                <i class="bi bi-backspace-reverse-fill"></i>  The website is designed to be fully responsive, ensuring that users can enjoy the same level of interactivity and visual appeal across a wide range of devices, from desktops to smartphones and tablets.
                </p>
                <h6 className='text-success mt-3'> JavaScript Enhancements </h6> 
                <p className='text-secondary'>
                <i class="bi bi-backspace-reverse-fill"></i>   JavaScript is used to create dynamic elements, interactive forms, and engaging animations. The use of JavaScript enhances user interaction and adds a layer of interactivity to the website.
                </p>
               
            </div>  
        </div> 
        <h3 className='text-secondary p-5' >Key Features</h3>
        <div className='col-md-12 p-5 d-flex align-items-center justify-content-between'>
            <p className='text-success fw-bold'>
            This project demonstrates my passion for creating user-friendly and interactive web experiences. By harnessing the power of Locomotive Scroll, HTML, CSS, and JavaScript, I've designed a visually captivating website that engages users and guides them through a seamless and captivating journey. It is a testament to the potential of modern web technologies to deliver memorable and user-centric online interactions.
            </p>
        </div>
        <div className='col-md-12  p-5 d-flex  align-items-center justify-content-between'>
            <Link onClick={wecreateProject}>
                <div className='wecreateProjectimg  About-marginLeft About-marginBottom shadow'></div>
            </Link>
            <div className='About-para-section'>
                <h3 onClick={wecreateProject} style={{cursor:'pointer'}} className='text-success'> Immersive Single-Page Website with High-Quality CSS and GSAP Transitions  </h3>
                <Link className='text-decoration-none ' onClick={wecreateProject} ><h6  className='text-success mt-2 cursor-pointer'><span className='text-secondary'>Website: -</span>https://amansh23.github.io/we-create/</h6> </Link>
                <p className='text-secondary'>
                I am delighted to present my latest web development project, an immersive single-page website designed to captivate users with high-quality CSS styling and stunning GSAP (GreenSock Animation Platform) transitions. This project showcases my commitment to creating exceptional web experiences that engage and immerse users in a visually dynamic journey.
                </p>  
            </div>
        </div>
        <div className='col-md-12 mt-5 p-5 d-flex align-items-center justify-content-between'>
             <div className='About-para-section p-3'>
                <h3 className='text-success'>Frontend Development</h3>
                <h6 className='text-success mt-3'> High-Quality CSS Styling </h6> 
                <p className='text-secondary'>
                <i class="bi bi-backspace-reverse-fill"></i>  The project demonstrates the power of CSS with high-quality styling that not only enhances the aesthetics but also elevates the overall user experience. Custom color schemes, typography choices, and exquisite visual details create a visually pleasing and memorable design.
                </p>
                <h6 className='text-success mt-3'> GSAP Transitions </h6> 
                <p className='text-secondary'>
                <i class="bi bi-backspace-reverse-fill"></i>   GSAP, a leading animation library, is utilized to craft seamless and visually stunning transitions between sections and elements. These animations are precisely timed and add a sense of dynamism to the website, making it stand out.
                </p>
            </div>
            <div className='About-para-section p-3'>
            <h6 className='text-success mt-3'> JavaScript Integration </h6>
                <p className='text-secondary'>
                <i class="bi bi-backspace-reverse-fill"></i> JavaScript is used to create dynamic elements, interactive forms, and engaging content animations. The combination of CSS and GSAP animations with JavaScript enhancements results in a highly interactive and visually appealing website.
                </p>
                <h6 className='text-success mt-3'> Interactive Elements </h6>
                <p className='text-secondary'>
                <i class="bi bi-backspace-reverse-fill"></i>  The project incorporates interactive elements that engage users as they scroll through the website. Interactive sliders, dynamic content reveals, and captivating hover effects contribute to an engaging user journey.
                </p>
            </div>  
        </div>
        <h3 className='text-secondary p-5' >Key Features</h3>
        <div className='col-md-12 p-5 d-flex align-items-center justify-content-between'>
            <p className='text-success fw-bold'>
            This project is a testament to my dedication to pushing the boundaries of web development and user experience design. By harnessing the power of high-quality CSS styling and GSAP animations, I've created a visually captivating single-page website that immerses users in a dynamic and engaging online journey. It showcases the potential of modern web technologies to deliver memorable and immersive online interaction
               </p>
        </div>
        <div className='col-md-12  p-5 d-flex  align-items-center justify-content-between'>
            <div className='About-para-section'>
                <h3 onClick={EmiCalculatorProject} style={{cursor:'pointer'}} className='text-success'>  EMI Calculator - Your Financial Planning Companion  </h3>
                <Link className='text-decoration-none ' onClick={EmiCalculatorProject} ><h6  className='text-success mt-2 cursor-pointer'><span className='text-secondary'>Website: -</span>https://amansh23.github.io/Emi-calculator/</h6> </Link>
                <p className='text-secondary'>
                Introducing the EMI Calculator, a practical and user-friendly financial tool created with the perfect blend of HTML, CSS, and JavaScript. This project is designed to empower users to make informed financial decisions by calculating Equated Monthly Installments (EMIs) effortlessly. Whether you're planning a home loan, a car purchase, or any other installment-based financial commitment, this EMI Calculator is your trusted companion.
                </p>  
            </div>
            <Link onClick={EmiCalculatorProject}>
                <div className='EmiCalculatorimg  About-marginLeft About-marginTop shadow'></div>
            </Link>
        </div>
        <div className='col-md-12 mt-5 p-5 d-flex align-items-center justify-content-between'>
             <div className='About-para-section p-3'>
                <h3 className='text-success'>Key Features and Highlights</h3>
                <h6 className='text-success mt-3'> EMI Calculation </h6> 
                <p className='text-secondary'>
                <i class="bi bi-backspace-reverse-fill"></i>   The core functionality of this tool is its ability to calculate EMIs accurately. Users can input the principal loan amount, interest rate, and loan tenure, and the calculator instantly computes the monthly installment, simplifying complex financial calculations
                </p>
                <h6 className='text-success mt-3'> Dynamic Updates </h6> 
                <p className='text-secondary'>
                <i class="bi bi-backspace-reverse-fill"></i>  As users input their data, the EMI amount dynamically updates, providing real-time feedback. This instant feedback helps users adjust their financial plans on the fly and make well-informed decisions.
                </p>
            </div>
            <div className='About-para-section p-3'>
                <h6 className='text-success mt-3'> Interactive Charts </h6> 
                <p className='text-secondary'>
                <i class="bi bi-backspace-reverse-fill"></i>  Visual learners will appreciate the interactive charts that accompany the calculation results. These charts provide a graphical representation of the loan amortization schedule, showcasing the allocation of principal and interest over the loan tenure.
                </p>
                <h6 className='text-success mt-3'> Ease of Integration </h6> 
                <p className='text-secondary'>
                <i class="bi bi-backspace-reverse-fill"></i>   The EMI Calculator can be easily integrated into financial websites, blogs, or applications, providing a valuable tool for users seeking financial guidance.
                </p>
               
            </div>  
        </div> 
        <h3 className='text-secondary p-5' >Key Features</h3>
        <div className='col-md-12 p-5 d-flex align-items-center justify-content-between'>
            <p className='text-success fw-bold'>
            This EMI Calculator project reflects my commitment to creating practical and user-centric web applications that simplify complex financial planning processes. By harnessing the power of HTML, CSS, and JavaScript, I've designed a versatile and accessible tool that empowers users to make informed financial decisions with confidence. Whether you're a financial enthusiast or simply planning your next big purchase, this EMI Calculator is here to help you navigate your financial journey.
            </p>
        </div>
        <div className='col-md-12  p-5 d-flex  align-items-center justify-content-between'>
            <Link onClick={QrCodegeneratorProject}>
                <div className='QrCodegeneratorimg  About-marginLeft About-marginBottom shadow'></div>
            </Link>
            <div className='About-para-section'>
                <h3 onClick={QrCodegeneratorProject} style={{cursor:'pointer'}} className='text-success'> QR Code Generator with Node.js and the qrcode Module  </h3>
                <Link className='text-decoration-none ' onClick={QrCodegeneratorProject} ><h6  className='text-success mt-2 cursor-pointer'><span className='text-secondary'>Website: -</span>https://qrcode-generator-smf1.onrender.com/</h6> </Link>
                <p className='text-secondary'>
                Introducing the QR Code Generator, a practical and efficient utility built using Node.js and the qrcode module. This project empowers users to create QR codes quickly and effortlessly for a wide range of purposes, from sharing contact information and URLs to facilitating contactless transactions. With this user-friendly tool, generating QR codes becomes a seamless experience for anyone.
                </p>  
            </div>
        </div>
        <div className='col-md-12 mt-5 p-5 d-flex align-items-center justify-content-between'>
             <div className='About-para-section p-3'>
                <h3 className='text-success'>Key Features and Highlights</h3>
                <h6 className='text-success mt-3'> Simplified QR Code Creation </h6> 
                <p className='text-secondary'>
                <i class="bi bi-backspace-reverse-fill"></i>  The core functionality of this project is the ability to generate QR codes with ease. Users can input the desired content, such as URLs, text, contact information, or Wi-Fi credentials, and the generator instantly creates a QR code representing that data.
                </p>
                <h6 className='text-success mt-3'> Open Source </h6> 
                <p className='text-secondary'>
                <i class="bi bi-backspace-reverse-fill"></i>   The project is open source, encouraging collaboration and contributions from the developer community to continuously improve and expand its capabilities.
                </p>
            </div>
            <div className='About-para-section p-3'>
            <h6 className='text-success mt-3'> Responsive Design </h6>
                <p className='text-secondary'>
                <i class="bi bi-backspace-reverse-fill"></i> Whether accessed through the CLI or the web-based interface, the project is designed with a responsive layout, ensuring optimal usability on various devices and screen sizes.
                </p>
                <h6 className='text-success mt-3'> Interactive User Interface  </h6>
                <p className='text-secondary'>
                <i class="bi bi-backspace-reverse-fill"></i>   A user-friendly web-based interface is available for those who prefer a graphical interface. This interface offers a straightforward way to create QR codes by simply entering data and adjusting settings.
                </p>
            </div>  
        </div>
        <h3 className='text-secondary p-5' >Key Features</h3>
        <div className='col-md-12 p-5 d-flex align-items-center justify-content-between'>
            <p className='text-success fw-bold'>
            This QR Code Generator project showcases the power of Node.js and the qrcode module to simplify the process of creating QR codes. Whether you're a developer looking to enhance your applications or an individual seeking a convenient tool for generating QR codes, this project provides a user-friendly and efficient solution. Empower your digital and offline interactions with QR codes, and explore the possibilities they offer for efficient information sharing and communication.
               </p>
        </div>    
    </div>
  )
}

export default Projects