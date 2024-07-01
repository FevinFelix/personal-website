import './ProjectCard.css'

function ProjectCard({
    imgSrc,
    imgAlt,
    title,
    description,
    buttonText,
    repoLink,
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
                        className='btn'>{buttonText}
                    </a>
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;