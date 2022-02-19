
import Header from "../components/Header";
import Footer from "../components/Footer";
import Project from "../components/Project";

export default function Projects() {

    const mobile = {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '20%'
    }

    const deskTop = {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '5%'
    }

    const projects = [
        <Project />,
        <Project />,
        <Project />
    ];

    return (
        <div>
            <Header />
            <div style={window.screen.width >= 950 ? deskTop : mobile}>
                {projects}
            </div>
            <Footer />
        </div>
    );
}