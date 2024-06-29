import './AboutMe.css';
import './MovingBorderBox.css'

function AboutMe() {
    return (
        <div className="home-bottom">
            <div className="border">
                <div className="paragraph-container">
                    <p className="p1 chivo">
                        I'm currently a CS student at <span class="yellow">Georgia Tech</span> interested in <span class="orange">cloud development</span> and <span class="orange">data engineering.</span>
                    </p>
                    <p className="dots">···</p>
                    <p className="p2 chivo">
                        In my free time, I love <span class="yellow">reading</span> fantasy and thriller books, watching <span class="yellow">F1 races</span>, and learning about anything <span class="yellow">ancient history</span> related.
                    </p>
                    <p className="dots">···</p>
                    <p className="p3 chivo">
                        I thrive in collaborative environments and enjoy the challenge that comes with learning new skills.
                    </p>
                </div>
            </div>
        </div>
    );
  }
  
  export default AboutMe;