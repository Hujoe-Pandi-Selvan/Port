function ProjectCard(props){

    return(
        <>
        <section class="Projects" id="projects">
    
        <div className="card m-2  border-1  " style={{width: "18rem", backgroundColor: "rgb(42, 40, 40)"}}>
        <img
          src={props.image}
          style={{height: "30vh"}} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="text-white">{props.projecttext}

          </p>
          <a href={props.link} target="_blank"
            className="btn  btn-outline-light">View Project</a>
        </div>
      </div>
      </section>
        </>
    )

}

export default ProjectCard;