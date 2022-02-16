
import Header from "../components/Header";
import Footer from "../components/Footer";
import Project from "../components/Project";

export default function Projects() {

    const styles = {
        height: '85vh',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center'
    }

    const projects = [
        <Project />,
        <Project />,
        <Project />
    ];

    return (
        <div>
            <Header />
            <div style={styles}>
                {projects}
            </div>
            <Footer />
        </div>
    );
}