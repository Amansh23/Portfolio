import React from 'react'
import { Link } from 'react-router-dom'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


const Home = () => {


  const mailRedirect = () => {
    window.open('mailto:amansharma1503@gmail.com?subject=subject&body=body');
  }

  const linkedinRedirect = () =>{
      window.open('https://www.linkedin.com/in/amansharma1503/')
  }

  const instaRedirect = () =>{
    window.open('https://www.instagram.com/_aman_2309/')
  }

  const githubRedirect = () =>{
      window.open('https://github.com/Amansh23')
  }

  
  const twitterRedirect = () =>{
    window.open('https://twitter.com/aman_sharma2309')
 }
 

 const facebookRedirect = () =>{
  window.open('https://www.facebook.com/profile.php?id=100004118773570')
 }
 
 const websiteopenerDigiroit = () => {
  window.open(' https://www.digiroit.com/ ')
 }

 const websiteopenerSIRT = () => {
  window.open('  https://www.sirtbhopal.ac.in/ ')
 }
  
 const  websiteopenerSchool = () => {
  window.open('  https://mvmchhatarpur.org/ ')
 }

 const grhamstaysProject = () => {
  window.open("https://grhamstays.com/")
 }
 
 const digiroitwebsiteProject = () => {
  window.open("https://endearing-kheer-ba4dfd.netlify.app/")
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
 
 const challengein1hourProject = () => {
  window.open("https://amansh23.github.io/mobileviewport/")
 }
 
 const QrCodegeneratorProject = () => {
  window.open("https://qrcode-generator-smf1.onrender.com/")
 }

 const MernCertificate = () => {
  window.open("https://drive.google.com/file/d/145NKOivOEQBB5bxj-TUqdgzBR3jKxk0d/view?usp=sharing")
 }
 

 const FrontEndCertificate = () => {
  window.open("https://drive.google.com/file/d/13yg-0yZnuklXBA3-YxejM4Wuo1xRMm7w/view?usp=sharing")
 }


 const BackEndCertificate = () => {
  window.open("https://drive.google.com/file/d/142RdfRRjNszdaCLebhpP4-HHVkTxVPIg/view?usp=sharing")
 }




  return (
    <div className='d-flex flex-column align-items-center'>
    <div className='col-md-12 p-5 homepage'>
        <div className=' p-2 About-marginBottom section1-home position-relative  '>
            <div className='w-25 h-100 bg-secondary shadow rounded-start-4'>
              <div className='w-100 h-100 bg-secondary ms-5 section1-home-skew'></div>
            </div>
            <img className='imgpostion'
            alt='HomeImage'
                 src='/homeimage.png'
            />
        </div>
        <div className=' p-5 homepage-section-2 '>
          <div className=' d-flex flex-column align-items-end justify-content-center'>
            <h2 className='text-success text-end'>- HII, I'M Aman Sharma</h2>
            <h4 className='text-dark text-end ms-4'>FullStack Developer</h4>
            <p className='text-end  mt-3 fw-medium text-secondary homepage-section-2-p'>
             Innovative FrontEnd & BackEnd Developer looking for a chance to advance my career with reputable brands. knowledge of ReactJS, NodeJS, HTML, Css, JavaScript, TypeScript, MongoDB, MySQL, RestFull-API'S, AdobeXD, Figma, UI/UX Development & Designing, Responsive Designs, C and Many More.
            </p>
          </div>
        </div>
         <div className='p-5 ms-2 professionalhandle '>
            <Link onClick={linkedinRedirect}>
              <button className='btn btn-outline-success p-2'>
                  <i class="bi bi-linkedin"></i>
                </button>
              </Link>
              <Link onClick={githubRedirect}>
              <button className='btn btn-outline-success p-2'>
                <i class="bi bi-github"></i>
                </button>
              </Link>
              <Link onClick={mailRedirect}>
              <button className='btn btn-outline-success  p-2'>
                <i class="bi bi-envelope-at-fill"></i>
                </button>
              </Link>
              
         </div>
    </div>
    <div className='col-md-12 w-100 h-100 p-5 d-flex flex-column align-items-center '>
      <h2 className='text-success fw-bold'>About ME</h2>
      <div className='col-md-12 w-100 p-2 ms-4 d-flex align-items-center justify-content-between mt-5'>
            <div>
              <h4 className='d-flex align-items-center '>Personal information <span className='fs-6 mt-1 ms-3'><i class="bi bi-info-circle-fill"></i></span> </h4>
              <div className='homepage-experience-section mt-5 '>
                <div>
                   <h6 className='text-dark'><span className='text-secondary'>First Name -</span> Aman </h6>
                   <h6 className='text-dark mt-3'><span className='text-secondary'>Last Name -</span> Sharma </h6>
                   <h6 className='text-dark mt-3'><span className='text-secondary'>Freelancer -</span> Part Time </h6>
                   <h6 className='text-dark mt-3'><span className='text-secondary'>Gender -</span> Male </h6>
                   <h6 className='text-dark mt-3'><span className='text-secondary'>Email -</span> amansharma1503@gmail.com </h6>
                 </div>
                <div className='About-marginTop'>
                <h6 className='text-dark'><span className='text-secondary'>Age -</span> 23 </h6>
                <h6 className='text-dark mt-3'><span className='text-secondary'>Nationallity -</span> Indian </h6>
                <h6 className='text-dark mt-3'><span className='text-secondary'>Language -</span> Hindi , English </h6>
                <h6 className='text-dark mt-3'><span className='text-secondary'>Phone -</span> +916263571539 </h6>
                </div>
              </div>
            </div>
            <div className='p-5'>
                 <div>
                 <button className='btn btn-outline-success p-3'>
                    <span className=' fs-3 fw-bold'>3</span> Months+ <br/> - Experience
                  </button>
                  <button className='btn btn-outline-success ms-3 p-3'>
                    <span className=' fs-3 fw-bold'>25 +</span><br/> - Completed Projects
                  </button>
                 </div>
                 <div className='mt-3'>
                 <button className='btn btn-outline-success p-3'>
                    <span className='fs-3 fw-bold'>100 + </span><br/> Connections
                  </button>
                  <button className='btn btn-outline-success ms-3 p-3'>
                    <span className=' fs-3 fw-bold'>4 + </span><br/> Ceritified Certificates
                  </button>
                 </div>
            </div>
            <div className='p-5  h-100 socialhandle'>
            <Link onClick={twitterRedirect}>
              <button className='btn btn-outline-success p-2 mb-5'>
                  <i class="bi bi-twitter-x"></i>
                </button>
              </Link>
              <Link onClick={instaRedirect}>
              <button className='btn btn-outline-success p-2 mb-5'>
                <i class="bi bi-instagram"></i>
                </button>
              </Link>
              <Link onClick={facebookRedirect}>
              <button className='btn btn-outline-success p-2 mb-5 '>
                  <i class="bi bi-facebook"></i>
                </button>
              </Link>
            </div>
      </div>
    </div>
     <div className='col-md-12 p-5  d-flex flex-column justify-content-center align-items-center'> 
     <h2 className='text-success fw-bold'>My Skills</h2>
        <div className='w-75 mt-5 d-flex justify-content-between align-items-center flex-wrap' >
        <div style={{ textAlign: "center", marginLeft: "10px" }}>
                  <div style={{ width: 100 }}>
                    <CircularProgressbar
                      value={80}
                      className='text-success mb-3'
                      text={`80%`}
                      styles={{
                        path: {
                          stroke: '#198754', 
                        },
                        text: {
                          fill: '#198754', 
                          fontWeight: '700',
                        },
                      }}
                    />
                    <h6 className='text-success'>ReactJS</h6>
                  </div>
                </div>
            <div style={{textAlign:"center",marginLeft:"10px"}}>
                <div style={{ width: 100 }}>                
                  <CircularProgressbar  
                    value={80} 
                    className='text-success mb-3'
                    text={`80%`}
                    styles={{  path: {
                           stroke: '#198754',
                       }, text: {
                      fill: '#198754',
                      fontWeight:'700'
                        },
                      }}
                  />
                  <h6 className='text-success'>NodeJS</h6>
                </div>
            </div>
            <div style={{textAlign:"center",marginLeft:"10px"}}>
                <div style={{ width: 100 }}>
                  <CircularProgressbar  
                    className='text-success mb-3'
                    value={85}
                    styles={{  path: {
                      stroke: '#198754',
                  }, text: {
                      fill: '#198754',
                      fontWeight:'700'
                        },
                      }}
                    text={`85%`}
                  />
                <h6 className='text-success'>HTML</h6>
                </div>
            </div>
            <div style={{textAlign:"center",marginLeft:"10px"}}>
                <div style={{ width: 100 }}>
                  <CircularProgressbar  
                    value={85} 
                    className='text-success mb-3'
                    text={`85%`}
                    styles={{  path: {
                      stroke: '#198754',
                  },text: {
                      fill: '#198754',
                      fontWeight:'700'
                        },
                      }}
                  />
                <h6 className='text-success'>CSS</h6>
                </div>
            </div>
            <div style={{textAlign:"center",marginLeft:"10px"}}>
                <div style={{ width: 100 }}>
                  <CircularProgressbar
                    className='text-success mb-3'  
                    value={79} 
                    text={`79%`}
                    styles={{  path: {
                      stroke: '#198754',
                  },text: {
                      fill: '#198754',
                      fontWeight:'700'
                        },
                      }}
                  />
                <h6 className='text-success'>JavaScript</h6>
                </div>
            </div>
        </div>
        <div className='w-75 mt-5 d-flex justify-content-between align-items-center flex-wrap' >
            <div style={{textAlign:"center",marginLeft:"10px"}}>
                <div style={{ width: 100 }}>
                  <CircularProgressbar  
                    value={70} 
                    className='text-success mb-3'
                    text={`70%`}
                    styles={{  path: {
                      stroke: '#198754',
                  },text: {
                      fill: '#198754',
                      fontWeight:'700'
                        },
                      }}
                  />
                <h6 className='text-success'>TypeScript</h6>
                </div>
            </div>
            <div style={{textAlign:"center",marginLeft:"10px"}}>
                <div style={{ width: 100 }}>                
                  <CircularProgressbar  
                    value={75} 
                    className='text-success mb-3'
                    text={`75%`}
                    styles={{ path: {
                      stroke: '#198754',
                  }, text: {
                      fill: '#198754',
                      fontWeight:'700'
                        },
                      }}
                  />
                  <h6 className='text-success'>MongoDB</h6>
                </div>
            </div>
            <div style={{textAlign:"center",marginLeft:"10px"}}>
                <div style={{ width: 100 }}>
                  <CircularProgressbar  
                    className='text-success mb-3'
                    value={70} 
                    text={`70%`}
                    styles={{  path: {
                      stroke: '#198754',
                  },text: {
                      fill: '#198754',
                      fontWeight:'700'
                        },
                      }}
                  />
                <h6 className='text-success'>MySQL</h6>
                </div>
            </div>
            <div style={{textAlign:"center",marginLeft:"10px"}}>
                <div style={{ width: 100 }}>
                  <CircularProgressbar  
                    value={70} 
                    className='text-success mb-3'
                    text={`70%`}
                    styles={{ path: {
                      stroke: '#198754',
                  }, text: {
                      fill: '#198754',
                      fontWeight:'700'
                        },
                      }}
                  />
                <h6 className='text-success'>RestFull API's</h6>
                </div>
            </div>
            <div style={{textAlign:"center",marginLeft:"10px"}}>
                <div style={{ width: 100 }}>
                  <CircularProgressbar
                    className='text-success mb-3'  
                    value={77} 
                    text={`77%`}
                    styles={{  path: {
                      stroke: '#198754',
                  },text: {
                      fill: '#198754',
                      fontWeight:'700'
                        },
                      }}
                  />
                <h6 className='text-success'>Redux</h6>
                </div>
            </div>
        </div>
        <div className='w-75 mt-5 d-flex justify-content-between align-items-center flex-wrap' >
            <div style={{textAlign:"center",marginLeft:"10px"}}>
                <div style={{ width: 100 }}>
                  <CircularProgressbar  
                    value={85} 
                    className='text-success mb-3'
                    text={`85%`}
                    styles={{  path: {
                      stroke: '#198754',
                  },text: {
                      fill: '#198754',
                      fontWeight:'700'
                        },
                      }}
                  />
                <h6 className='text-success'>Figma</h6>
                </div>
            </div>
            <div style={{textAlign:"center",marginLeft:"10px"}}>
                <div style={{ width: 100 }}>                
                  <CircularProgressbar  
                    value={90} 
                    className='text-success mb-3'
                    text={`90%`}
                    styles={{ path: {
                      stroke: '#198754',
                  }, text: {
                      fill: '#198754',
                      fontWeight:'700'
                        },
                      }}
                  />
                  <h6 className='text-success'> UI/UX </h6>
                </div>
            </div>
            <div style={{textAlign:"center",marginLeft:"10px"}}>
                <div style={{ width: 100 }}>
                  <CircularProgressbar  
                    className='text-success mb-3'
                    value={90} 
                    text={`90%`}
                    styles={{ path: {
                      stroke: '#198754',
                  }, text: {
                      fill: '#198754',
                      fontWeight:'700'
                        },
                      }}
                  />
                <h6 className='text-success'>Responsiveness</h6>
                </div>
            </div>
            <div style={{textAlign:"center",marginLeft:"10px"}}>
                <div style={{ width: 100 }}>
                  <CircularProgressbar  
                    value={50} 
                    className='text-success mb-3'
                    text={`50%`}
                    styles={{  path: {
                      stroke: '#198754',
                  },text: {
                      fill: '#198754',
                      fontWeight:'700'
                        },
                      }}
                  />
                <h6 className='text-success'>C</h6>
                </div>
            </div>
            <div style={{textAlign:"center",marginLeft:"10px"}}>
                <div style={{ width: 100 }}>
                  <CircularProgressbar
                    className='text-success mb-3'  
                    value={90} 
                    text={`90%`}
                    styles={{  path: {
                      stroke: '#198754',
                  },text: {
                      fill: '#198754',
                      fontWeight:'700'
                        },
                      }}
                  />
                <h6 className='text-success'>AdobeXD</h6>
                </div>
            </div>          
        </div>
     </div>
     <div className='col-md-12 p-5  d-flex flex-column justify-content-center align-items-center'>
           <h2 className='text-success fw-bold'>Experience & Education</h2>
          <div className=' w-100 p-2 mt-5 homepage-experience-section '>
            <div className='col-md-6 p-2 d-flex flex-column justify-content-center align-items-between'>
                      <div className='d-flex w-100 p-2'>
                           <div className='d-flex flex-column justify-content-center align-items-center'>
                                   <button className='btn btn-outline-success  rounded-5'>
                                      <i class="bi bi-front"></i>
                                    </button>
                                   <div style={{height:"5vmax",width:"2px" ,opacity:"0.5"}} className='bg-secondary rounded-bottom-5'></div>
                           </div>
                           <div className='w-75 p-2 ms-5 d-flex flex-column justify-content-start align-items-start'>
                                  <h6>Oct - 2023 <span className='text-success fw-bold'> Present </span> </h6>
                                  <h5>Working as a FullStack Developer</h5>
                                  <h6> At Digiroit technologies PVT LTD</h6>
                                  <Link className='text-secondary text-decoration-none' onClick={websiteopenerDigiroit}><span className='text-success'>Visit - </span>https://www.digiroit.com/</Link>
                           </div>
                      </div>
                      <div className='d-flex w-100 p-2'>
                           <div className='d-flex flex-column justify-content-center align-items-center'>
                                   <button className='btn btn-outline-success  rounded-5'>
                                      <i class="bi bi-fuel-pump-fill"></i>
                                    </button>
                                   <div style={{height:"5vmax",width:"2px" ,opacity:"0.5"}} className='bg-secondary rounded-bottom-5'></div>
                           </div>
                           <div className='w-75 p-2 ms-5 d-flex flex-column justify-content-start align-items-start'>
                                  <h6>Aug - 2023<span className='text-success fw-bold'> Till </span> Oct - 2023 </h6>
                                  <h5>Working as a FullStack Developer trainee ( Paid ) </h5>
                                  <h6> At Digiroit technologies PVT LTD</h6>
                                  <Link className='text-secondary text-decoration-none' onClick={websiteopenerDigiroit}><span className='text-success'>Visit - </span>https://www.digiroit.com/</Link>
                           </div>
                      </div>
            </div>
            <div className='col-md-6  p-2 d-flex flex-column justify-content-center align-items-between'>
                        <div className='d-flex w-100 '>
                              <div className='d-flex flex-column justify-content-center align-items-center'>
                                        <button className='btn btn-outline-success  rounded-5'>
                                            <i class="bi  bi-mortarboard-fill"></i>
                                          </button>
                                        <div style={{height:"5vmax", width:"2px" ,opacity:"0.5" }} className='bg-secondary rounded-bottom-5'></div>
                              </div>
                              <div className='p-2 ms-5 d-flex flex-column justify-content-start align-items-start'>
                                        <h6>Aug - 2019 <span className='text-success fw-bold'> Till </span> july - 2023 </h6>
                                        <h5>Bachelor of Technology (B.Tech)</h5>
                                        <h6> At Sagar Institute of Research and Technology</h6>
                                        <h6> With No Backlogs</h6>
                                        <Link className='text-secondary text-decoration-none' onClick={websiteopenerSIRT}><span className='text-success'>Visit - </span>https://www.sirtbhopal.ac.in/</Link>
                              </div>
                        </div>
                        <div className='d-flex w-100 '>
                              <div className='d-flex flex-column justify-content-center align-items-center'>
                                        <button className='btn btn-outline-success  rounded-5'>
                                            <i class="bi bi-fire"></i>
                                          </button>
                                        <div style={{height:"5vmax",width:"2px" ,opacity:"0.5"}} className='bg-secondary rounded-bottom-5'></div>
                              </div>
                              <div className='p-2 ms-5 d-flex flex-column justify-content-start align-items-start'>
                                        <h6>June - 2017 <span className='text-success fw-bold'> Till </span> June - 2018 </h6>
                                        <h5> Higher Secondary School (12th)</h5>
                                        <h6> mvmchhatarpur (CBSE) </h6>
                                        <h6> with 75% </h6>
                                        <Link className='text-secondary text-decoration-none' onClick={websiteopenerSchool}><span className='text-success'>Visit - </span>https://mvmchhatarpur.org/</Link>
                              </div>
                        </div>
                        <div className='d-flex w-100 '>
                              <div className='d-flex flex-column justify-content-center align-items-center'>
                                        <button className='btn btn-outline-success rounded-5'>
                                            <i class="bi bi-briefcase-fill"></i>
                                          </button>
                                        <div style={{height:"5vmax",width:"2px" ,opacity:"0.5"}} className='bg-secondary rounded-bottom-5'></div>
                              </div>
                              <div className='ms-5 p-2 d-flex flex-column justify-content-start align-items-start'>
                                        <h6>June - 2015 <span className='text-success fw-bold'> Till </span> June - 2016 </h6>
                                        <h5>Secondary School (10th) </h5>
                                        <h6> mvmchhatarpur (CBSE) </h6>
                                        <h6> with 8.0 CGPA </h6>
                                        <Link className='text-secondary text-decoration-none' onClick={websiteopenerSchool}><span className='text-success'>Visit - </span>https://mvmchhatarpur.org/</Link>
                              </div>
                        </div>
            </div>      
          </div>            
     </div>
     <div className='col-md-12 p-5  d-flex flex-column justify-content-center align-items-center'>
       <h2 className='text-success fw-bold'>Projects</h2>
         <div className='cd-md-12 p-5 d-flex flex-wrap align-item-center justify-content-center'>
             <button onClick={grhamstaysProject} className='btn btn-light mt-4 mx-2 p-3 d-flex justify-content-center align-items-center'>
             <img
                  src="/grhamStays.png"
                  alt='grhamStays'
                  className="bd-placeholder-img mx-3 card-img rounded-2"
                  style={{boxShadow: "0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19)",width:"300px"}}
                />
              </button>
              <button onClick={digiroitwebsiteProject} className='btn btn-light mt-4 mx-2 p-3 d-flex justify-content-center align-items-center'>
             <img
                  src="/digiroitwebsite.png"
                  alt='digiroitwebsite'
                  className="bd-placeholder-img mx-3 card-img rounded-2"
                  style={{boxShadow: "0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19)",width:"300px"}}
                />
              </button>
              <button onClick={MovieDatabaseProject} className='btn btn-light mt-4 mx-2 p-3 d-flex justify-content-center align-items-center'>
             <img
                  src="/MovieDatabase.png"
                  alt='MovieDatabase.png'
                  className="bd-placeholder-img mx-3 card-img rounded-2"
                  style={{boxShadow: "0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19)",width:"300px"}}
                />
              </button>
              <button onClick={templateProject} className='btn btn-light mt-4 mx-2 p-3 d-flex justify-content-center align-items-center'>
             <img
                  src="/templateProject.png"
                  alt='templateProject.png'
                  className="bd-placeholder-img mx-3 card-img rounded-2"
                  style={{boxShadow: "0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19)",width:"300px"}}
                />
              </button>
              <button onClick={FloraFlaternityProject} className='btn btn-light mt-4 mx-2 p-3 d-flex justify-content-center align-items-center'>
             <img
                  src="/FloraFlaternity.png"
                  alt='FloraFlaternity.png'
                  className="bd-placeholder-img mx-3 card-img rounded-2"
                  style={{boxShadow: "0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19)",width:"300px"}}
                />
              </button>
              <button onClick={wecreateProject} className='btn btn-light mt-4 mx-2 p-3 d-flex justify-content-center align-items-center'>
             <img
                  src="/wecreate.png"
                  alt='wecreate.png'
                  className="bd-placeholder-img mx-3 card-img rounded-2"
                  style={{boxShadow: "0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19)",width:"300px"}}
                />
              </button>
              <button onClick={challengein1hourProject} className='btn btn-light mt-4 mx-2 p-3 d-flex justify-content-center align-items-center'>
             <img
                  src="/challengein1hour.png"
                  alt='challengein1hour'
                  className="bd-placeholder-img mx-3 card-img rounded-2"
                  style={{boxShadow: "0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19)",width:"300px"}}
                />
              </button>
              <button onClick={EmiCalculatorProject} className='btn btn-light mt-4 mx-2 p-3 d-flex justify-content-center align-items-center'>
             <img
                  src="/Emi-calculator.png"
                  alt='Emi-calculator'
                  className="bd-placeholder-img mx-3 card-img rounded-2"
                  style={{boxShadow: "0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19)",width:"300px"}}
                />
              </button>
              <button onClick={QrCodegeneratorProject} className='btn btn-light mt-4 mx-2 p-3 d-flex justify-content-center align-items-center'>
             <img
                  src="/QrCode_generator.png"
                  alt='QrCode_generator'
                  className="bd-placeholder-img mx-3 card-img rounded-2"
                  style={{boxShadow: "0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19)",width:"300px"}}
                />
              </button>
          </div>  
     </div>
     <div className='col-md-12 p-5 d-flex flex-column justify-content-center align-items-center'>
       <h2 className='text-success fw-bold'>Certified Certificates</h2>
         <div className='cd-md-12 p-5 d-flex flex-wrap align-item-center justify-content-center'>
             <button onClick={MernCertificate} className='btn btn-light mt-4 mx-2 p-3 d-flex justify-content-center align-items-center'>
             <img
                  src="/Mern Certificate.jpg"
                  alt='Mern Certificate'
                  className="bd-placeholder-img mx-3 card-img rounded-2"
                  style={{boxShadow: "0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19)",width:"300px"}}
                />
              </button>
              <button onClick={BackEndCertificate} className='btn btn-light mt-4 mx-2 p-3 d-flex justify-content-center align-items-center'>
             <img
                  src="/BackEnd Certificate.jpg"
                  alt='BackEnd Certificate'
                  className="bd-placeholder-img mx-3 card-img rounded-2"
                  style={{boxShadow: "0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19)",width:"300px"}}
                />
              </button> 
              <button onClick={FrontEndCertificate} className='btn btn-light mt-4 mx-2 p-3 d-flex justify-content-center align-items-center'>
             <img
                  src="/FrontEnd Certificate.jpg"
                  alt='FrontEnd Certificate'
                  className="bd-placeholder-img mx-3 card-img rounded-2"
                  style={{boxShadow: "0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19)",width:"300px"}}
                />
              </button>     
          </div>  
     </div>                 
     
    </div>
  )
}

export default Home