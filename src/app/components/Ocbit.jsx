import Image from "next/image";
import "../components/Ocbit.css"

const Ocbit = () => {
    return (
        <div>
              <div className="container">
        <div className="hero-circle">
              <Image className="inner-img" width={200} height={200} alt="html" src="/images/about-removebg-preview.png" ></Image>
          <div className="hero-rotate" id="circle">
       
            <div className="planet">
      <Image className="photo-orbit" width={200} height={200} alt="html" src="/images/html.jpg" ></Image>

            </div>
        
           
            <div className="planet">
            <Image className="photo-orbit" width={200} height={200} alt="html" src="/images/CSS-Logo.png" ></Image>
            </div>
          
            <div className="planet">
            <Image className="photo-orbit" width={200} height={200} alt="html" src="/images/javascript_logo.png" ></Image>
            </div>
          
            <div className="planet">
            <Image className="photo-orbit" width={200} height={200} alt="html" src="/images/react.png" ></Image>
            </div>

              
          </div>
        
        </div>
  </div>
        </div>
    );
};

export default Ocbit;