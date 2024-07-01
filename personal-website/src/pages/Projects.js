import Navbar from "../components/Navbar";
import ProjectCard from "../components/ProjectCard";
import ProjectCardNoDemo from "../components/ProjectCardNoDemo";
import './Projects.css'
import MemAssistImg from '../images/MemoryAssist.png'

export default function Projects() {
    return (
        <>
            <Navbar />
            <main className="main-projects">
                <header>
                    <h1 className="header">A Few Things I've Made...</h1>
                </header>
                <div className="cards-container">
                    <ProjectCard imgSrc={MemAssistImg} imgAlt={"Card Image"}
                    title={"Memory Assist"}
                    description={"An AI-powered study assistant built by training an LLM on personal DSA notes. It provides responses with both text and image references from the uploaded notes."}
                    button1Text={"Repo"} button2Text={"Demo"}
                    repoLink={"https://github.com/EL132/Memory-Assistant"} demoLink={"https://memory-assistant-97ft.vercel.app/"}
                    />

                    <ProjectCardNoDemo imgSrc={MemAssistImg} imgAlt={"Card Image"}
                    title={"Memory Assist"}
                    description={"An AI-powered study assistant built by training an LLM on personal DSA notes. It provides responses with both text and image references from the uploaded notes."}
                    buttonText={"Repo"}
                    repoLink={"https://github.com/EL132/Memory-Assistant"}
                    />

                    <ProjectCardNoDemo imgSrc={MemAssistImg} imgAlt={"Card Image"}
                    title={"Memory Assist"}
                    description={"An AI-powered study assistant built by training an LLM on personal DSA notes. It provides responses with both text and image references from the uploaded notes."}
                    buttonText={"Repo"}
                    repoLink={"https://github.com/EL132/Memory-Assistant"}
                    />

                </div>
            </main>
        </>
    )
}