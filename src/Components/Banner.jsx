import "../App.css"
import resume from '../Components/pics/resumepic.jpg'
import resumepdf from '../Components/pics/Resume (Hujoe Pandi Selvan)  copy.pdf'
function Banner(){
  
    return(
        <>
       <section className="bannersection">
    <div className=" container d-flex justify-content-around flex-wrap-reverse align-items-center  p-4">
      <div id="hero">
        <h1 className="pb-3 text-light">HEY, THIS IS <span style={{color: "rgb(255, 94, 0)", fontWeight:"800"}}>HUJOE</span></h1>
        <a href="https://drive.google.com/file/d/1Q5ZcpW1iwdhUlwbcuNrQ9yXv0KrNiz24/view?usp=sharing"  rel="noreferrer" id="download_btn" target="_blank"  className="btn_get_star text-black abutton pb-2" style={{ fontWeight:"800"}}>View Resume</a>
      </div>

      <div className="img-container">
        <img className="hujoe"
          src={resume}
          style={{height: "350px", width: "270px"}} alt="pic"/>
      </div>

    </div>

  </section>
        </>
    )
}
export default Banner;