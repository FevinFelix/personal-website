import Navbar from "../components/Navbar";
import ProjectCard from "../components/ProjectCard";
import ProjectCardNoDemo from "../components/ProjectCardNoDemo";
import './Projects.css'
import MemAssistImg from '../images/MemoryAssist.png'
import RecipeImg from '../images/RecipeSuggestion.png'
import SafePassImg from '../images/SafePass.png'
import GithubImg from '../images/githubIcon-circle.png'

export default function Projects() {
    return (
        <>
            <Navbar />
            <main className="main-projects">
                <header>
                    <h1 className="header">A Few Things I've Made...</h1>
                    <h1 className="github">More on my Github: 
                        <a href="https://github.com/FevinFelix" target="_blank" rel="noopener noreferrer">
                            <img className="github-icon" src={GithubImg}></img>
                        </a>
                    </h1>
                </header>
                <div className="cards-container">
                    <ProjectCard imgSrc={MemAssistImg} imgAlt={"Card Image"}
                    title={"Memory Assist - A New Way to Study"}
                    description={"An AI-powered study assistant built by training an LLM on personal DSA notes. It provides responses with both text and image references from the uploaded notes."}
                    button1Text={"Repo"} button2Text={"Demo"}
                    repoLink={"https://github.com/EL132/Memory-Assistant"} demoLink={"https://memory-assistant-97ft.vercel.app/"}
                    />

                    <ProjectCardNoDemo imgSrc={RecipeImg} imgAlt={"Card Image"}
                    title={"Recipe Suggestion With Computer Vision"}
                    description={"Take and upload a picture of the available fruits you have in front of you. The model will analyze what's on the table and recommend tailored recipes."}
                    buttonText={"Repo"}
                    repoLink={"https://github.com/FevinFelix/Recipe-Suggestions-with-Fruit-Object-Detection"}
                    />

                    <ProjectCardNoDemo imgSrc={SafePassImg} imgAlt={"Card Image"}
                    title={"Safe-Pass Password Manager"}
                    description={"Local password manager with multi-layer authentication and advanced hashing functions. Retrieve, delete, and add passwords anytime with secure login credentials."}
                    buttonText={"Repo"}
                    repoLink={"https://github.com/FevinFelix/Safe-Pass-Password-Manager"}
                    />
                </div>
            </main>
        </>
    )
}