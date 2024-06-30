import './ProjectCard.css'

function ProjectCard({
    imgSrc,
    imgAlt,
    title,
    description,
    button1Text,
    button2Text,
    repoLink,
    demoLink,
}) {
    
    return (
        <div className='container'>
            <div className="card">
                <img 
                    src={imgSrc} 
                    alt={imgAlt}
                    className='img'>
                </img>
                <h1 className='title'>{title}</h1>
                <p className='description'>{description}</p>
                <div className='button-container'>
                    <a 
                        href={repoLink}
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className='btn'>{button1Text}
                    </a>
                    <a 
                        href={demoLink}
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className='btn'>{button2Text}
                    </a>
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;