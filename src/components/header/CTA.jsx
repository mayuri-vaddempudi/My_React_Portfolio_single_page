import React from "react";
import Mayuri_Vaddempudi_CV from "../../assets/Mayuri_Vaddempudi_CV.pdf"

export default function CTA() {
    return (
        <div className="cta">
            <a href={Mayuri_Vaddempudi_CV} download className="btn">Download CV</a>
            <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
    )
}