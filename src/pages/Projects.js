
import Header from "../components/Header";
import Footer from "../components/Footer";
import Project from "../components/Project";

export default function Projects() {

    const projects = [
        <Project 
            key='1' 
            image="https://thumbs.dreamstime.com/b/jet-plane-icon-jet-plane-icon-blue-white-background-120405606.jpg" desc="the-travel-guide-website"
            link="https://the-traveler-guide.netlify.app/"
        />
    ];

    return (
        <div>
            <Header />
            <div className="proj-container">
                {projects}
            </div>
            <Footer />
        </div>
    );
}