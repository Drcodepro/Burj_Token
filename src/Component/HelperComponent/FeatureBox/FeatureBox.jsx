
import "./FeatureBox.css";
import burj_logo from "../../../assets/Image/burj-token.webp";
import { useRef ,useEffect} from "react";

export const FeatureBox =(props)=>{
    const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
        else{
            entry.target.classList.remove('animate');
        }
      });
    },{ threshold: 0.3 });

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);
    return(
        <div className="Feature-box" ref={elementRef}>
            <img src={burj_logo} alt="logo" className="Feature-logo"/>
            <h1 className="Feature-heading">{props.FeatureName}</h1>
            <p className="Feature-info">{props.FeatureInfo}</p>
        </div>
    )
}