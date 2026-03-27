import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Flutter Developer</h4>
                <h5>Freelance</h5>
              </div>
              <h3>2022</h3>
            </div>
            <p>
              Developed cross-platform mobile apps for iOS & Android using
              Flutter & Dart. Integrated Firebase for auth, real-time database,
              and cloud functions. Implemented state management using Provider & GetX.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Flutter & Backend Developer</h4>
                <h5>Startup Project</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              Built a full-stack mobile health platform — Flutter frontend with
              a FastAPI + Python backend. Integrated ML-based disease prediction
              APIs and designed a scalable REST API architecture.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Flutter & Backend Developer</h4>
                <h5>Self-Employed</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Delivering production-grade Flutter apps and Node.js/Python
              backends. Specializing in real-time features, Firebase integration,
              REST APIs, and clean architecture patterns (BLoC / Clean Arch).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
