import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Timeline from "./timeline";


export default function NewBody(){
    return(
        <div className="bg">
            <div className="con-slider-container">
                    <div className="con-slide newbody">
                    <div className="real-container">
                        <div>
                            <h1 className="newbody-header">Year 2021-22</h1>
                        </div>

                        <div className="newbody-members">                            
                            <div className="lead1">
                            <div className="faculty memb">
                                <img src="https://res.cloudinary.com/db5gjqx6a/image/upload/v1649086255/Wildbeats-ppl/panchami-modified_wvr9ph.png" className="mentor-img" alt=""/>
                                <h1 className="name">Dr. Panchami</h1>
                                <h4>Faculty In-Charge</h4>
                            </div>
                                <div className="memb">
                                    <img src="https://res.cloudinary.com/db5gjqx6a/image/upload/v1648877616/Wildbeats-ppl/kishore_lvogm0.png" className="mentor-img" alt=""/>
                                    <h1 className="name">Agirishetty Kishore</h1>
                                    <h4>Mentor</h4>
                                </div>
                                <div>
                                    <img src="https://res.cloudinary.com/db5gjqx6a/image/upload/v1648877550/Wildbeats-ppl/Chandrima_ezsqhx.png" className="mentor-img" alt=""/>
                                    <h1 className="name">Chandrima Jayaram</h1>
                                    <h4>Mentor</h4>
                                </div>
                                <div>
                                    <img src="https://res.cloudinary.com/db5gjqx6a/image/upload/v1648877613/Wildbeats-ppl/Abhimanyu_keyn32.png" className="leadimg" alt=""/>
                                    <h1 className="name">Abhimanyu Kumbhar</h1>
                                    <h4>Lead</h4>
                                    
                                </div>
                                <div>
                                    <img src="https://res.cloudinary.com/db5gjqx6a/image/upload/v1648877574/Wildbeats-ppl/Abhishek_lwcsbz.png" className="leadimg" alt=""/>
                                    <h1 className="name">Abhishek Patil</h1>
                                    <h4>Lead</h4>
                                    
                                </div>
                                <div>
                                    <img src="https://res.cloudinary.com/db5gjqx6a/image/upload/v1648877572/Wildbeats-ppl/jeet_tofakg.png" className="leadimg" alt=""/>
                                    <h1 className="name">Jeet Shah</h1>
                                    <h4>Lead</h4>
                                    
                                </div>
                                <div>
                                    <img src="https://res.cloudinary.com/db5gjqx6a/image/upload/v1648877606/Wildbeats-ppl/Margani_h3bbgs.png" className="leadimg" alt=""/>
                                    <h1 className="name">Margani Rohith</h1>
                                    <h4>Lead</h4>
                                    
                                </div>
                                <div>
                                    <img src="https://res.cloudinary.com/db5gjqx6a/image/upload/v1648877584/Wildbeats-ppl/nishant_wjr83k.png" className="leadimg" alt=""/>
                                    <h1 className="name">Nishant Kumar</h1>
                                    <h4>Lead</h4>

                                </div>
                                <div>
                                    <img src="https://res.cloudinary.com/db5gjqx6a/image/upload/v1648877693/Wildbeats-ppl/Swani_rjxxrd.png" className="leadimg" alt=""/>
                                    <h1 className="name">Swani Didde</h1>
                                    <h4>Lead</h4>
                                    
                                </div>
                                <div>
                                    <img src="https://res.cloudinary.com/db5gjqx6a/image/upload/v1648877587/Wildbeats-ppl/amrutha_xda3zs.png" className="leadimg" alt=""/>
                                    <h1 className="name">Amrutha Reddy</h1>
                                    <h4>Lead</h4>
                                    
                                </div>
                                <div>
                                    <img src="https://res.cloudinary.com/db5gjqx6a/image/upload/v1648877587/Wildbeats-ppl/priyanshu_ioqwjh.png" className="leadimg" alt=""/>
                                    <h1 className="name">Priyanshu Gupta</h1>
                                    <h4>Lead</h4>
                                    
                                </div>
                                <div>
                                    <img src="https://res.cloudinary.com/db5gjqx6a/image/upload/v1648877585/Wildbeats-ppl/Harsha_j6s1lp.png" className="leadimg" alt=""/> 
                                    <h1 className="name">Harsha Kovvada</h1>
                                    <h4>Lead</h4>
                                </div>
                                <div>
                                    <img src="https://res.cloudinary.com/db5gjqx6a/image/upload/v1648877584/Wildbeats-ppl/kathyayani_a3qd76.png" className="leadimg" alt=""/>
                                    <h1 className="name">Kathyayani Bolgum</h1>
                                    <h4>Lead</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
            </div>
            <Timeline />
         </div>
    )
}