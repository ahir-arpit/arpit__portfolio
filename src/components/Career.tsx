import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br />
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Flutter Developer</h4>
                <h5>Project</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Built Mintify, a cross-platform personal finance app for iOS &amp;
              Android using Flutter & Dart. Integrated Firebase for auth and
              real-time data sync. Implemented budget tracking, daily expense
              management, and savings goal features with Provider &amp; GetX.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Flutter Developer</h4>
                <h5>Controller</h5>
              </div>
              <h3>2026</h3>
            </div>
            <p>
              Built a Flutter-based RC car controller with dual-mode Joystick &amp;
              D-Pad navigation and adjustable speed control (0–100%). Streamed
              live telemetry from Ultrasonic, IR &amp; PIR sensors with real-time
              obstacle detection that auto-blocks forward movement for safety.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>AI/NLP Developer</h4>
                <h5>AI Project</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Built LexAssist AI, a professional-grade legal document analysis
              engine using NLP &amp; Transformer models. Supports contract,
              policy &amp; agreement uploads with instant insights — risk clause
              detection, key entity extraction, compliance scoring, and
              plain-language summarization.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
