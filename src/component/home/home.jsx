import "./home.css"
export default function home() {
  return (
    <div className="homeContainer">
      <div className="intro">
      <img src="/assets/person/2.jpg" alt="" className="introBgPic" />

        {/* <div className="blackBox"></div> */}

        <div className="details">
          <div className="mainLogO">

            <img src="/assets/Skynet.svg" alt="" className="mainLogo" />
          </div>

          {/* <div className="introText">
            Welcome to our esteemed university, where knowledge and opportunity converge.
            Join our vibrant academic community to explore, discover, and excel.
            Unleash your potential through cutting-edge research, expert faculty, and state-of-the-art facilities.
            Prepare to shape your future and make a lasting impact in a dynamic world.
          </div> */}

          <button className="buttonAdd" onClick={() => window.alert('Admission Done')}>ADMISSION</button>

        </div>

      </div>
      <div className="course">
        <h1 className="courseTitle">COURSES</h1>
        <div className="courseContainer">
          <div className="oneone">


            <div className="btech">
              <h2>BTech</h2>
              <h4 className="btechData">A Bachelor of Technology (BTech) degree equips students with specialized technical skills, theoretical knowledge, and problem-solving abilities in engineering fields. It offers diverse career opportunities, innovation-driven learning, and a foundation for technological advancements in various industries.</h4>
            </div>
            <div className="bcom">


              <h2>BCom</h2>
              <h4 className="bcomData">A Bachelor of Commerce (BCom) degree equips students with knowledge in business, accounting, finance, and economics. It offers opportunities in various industries, providing a foundation for careers in finance, marketing, management, and entrepreneurship.</h4>
            </div>
            <div className="masters">
              <h2>Masters</h2>
              <h4 className="mastersData">
                Pursuing a master's degree in college offers advanced knowledge, specialized skills, and career advancement opportunities. It fosters personal growth, research excellence, and opens doors to new networks, professional collaborations, and future leadership roles.</h4>

            </div>
          </div>
        </div>
        <div className="alumni">
          <h1 className="alumniTitle">ALUMNI</h1>
          <div className="alumniContainer">
            <div className="alumniCard1">
              <img src="/assets/person/3.jpeg" alt="" className="alumniPic" />
              <h3 className="alumnidata1">Aman Goodman</h3>
              <span className="studentReview1">I am thrilled to share my positive experience as a student at this university. The dedicated faculty and cutting-edge resources have enriched my learning journey. The supportive and inclusive campus community fosters personal growth, and the emphasis on research and innovation prepares us to make a meaningful impact in our chosen fields.</span>
            </div>
            <div className="alumniCard2">
              <img src="/assets/person/4.jpeg" alt="" className="alumniPic" />
              <h3 className="alumnidata1">Jeorge Lukhas</h3>
              <span className="studentReview1">The dedicated faculty and state-of-the-art facilities have provided me with an exceptional learning experience. I highly recommend this university for its commitment to excellence and the transformative impact it has on its students.</span>
            </div>
            <div className="alumniCard3">
              <img src="/assets/person/7.jpeg" alt="" className="alumniPic" />
              <h3 className="alumnidata1">Harsha Reddy</h3>
              <span className="studentReview1">I absolutely love my university! The campus is stunning, and the faculty is top-notch. The courses are engaging and challenging, fostering both personal and academic growth. The supportive community and numerous extracurricular activities make for a well-rounded college experience. I'm grateful for the opportunities and lifelong friendships I've gained here.</span>
            </div>
          </div>
        </div>


      </div>
      
      </div>
      )
}
