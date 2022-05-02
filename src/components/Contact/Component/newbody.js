import React from "react";
import Fac from "./faculty";
import Men from "./mentor";
import Led from "./lead";


export default function B(){
    return(
        <div className="bg">
            <div className="newbody">
                <div>

                    <div>
                        <h1 className="newbody-header">Year 2021-22</h1>
                    </div>

                    <div className="newbody-members">
                        {/* <Fac /> */}
                        <div className="faculty">
                            <img src="https://res.cloudinary.com/db5gjqx6a/image/upload/v1649086255/Wildbeats-ppl/panchami-modified_wvr9ph.png" className="faculty-img"/>
                            <h1>Dr. Panchami V</h1>
                            <h4>Faculty In-Charge</h4>
                        </div>
                        {/* <Men /> */}


                        <div className="mentor-newbody">
                            <div>
                                <img src="https://res.cloudinary.com/db5gjqx6a/image/upload/v1648877616/Wildbeats-ppl/kishore_lvogm0.png" className="mentor-img"/>
                                <h1>Agirishetty Kishore</h1>
                                <h4>Mentor</h4>
                            </div>
                            <div>
                                <img src="https://res.cloudinary.com/db5gjqx6a/image/upload/v1648877550/Wildbeats-ppl/Chandrima_ezsqhx.png" className="mentor-img"/>
                                <h1>Chandrima Jayaram</h1>
                                <h4>Mentor</h4>
                            </div>
                        </div>
                        {/* <Led /> */}


                        <div className="lead">
                            <div className="lead1">
                                
                                <div>
                                    <img src="https://res.cloudinary.com/db5gjqx6a/image/upload/v1648877613/Wildbeats-ppl/Abhimanyu_keyn32.png" className="leadimg"/>
                                    <h1>Abhimanyu Kumbhar</h1>
                                    <h4>Lead</h4>
                                    
                                </div>
                                <div>
                                    <img src="https://res.cloudinary.com/db5gjqx6a/image/upload/v1648877574/Wildbeats-ppl/Abhishek_lwcsbz.png" className="leadimg"/>
                                    <h1>Abhishek Patil</h1>
                                    <h4>Lead</h4>
                                    
                                </div>
                                <div>
                                    <img src="https://res.cloudinary.com/db5gjqx6a/image/upload/v1648877572/Wildbeats-ppl/jeet_tofakg.png" className="leadimg"/>
                                    <h1>Jeet Shah</h1>
                                    <h4>Lead</h4>
                                    
                                </div>
                                <div>
                                    <img src="https://res.cloudinary.com/db5gjqx6a/image/upload/v1648877606/Wildbeats-ppl/Margani_h3bbgs.png" className="leadimg"/>
                                    <h1>Margani Rohith</h1>
                                    <h4>Lead</h4>
                                    
                                </div>
                                <div>
                                    <img src="https://res.cloudinary.com/db5gjqx6a/image/upload/v1648877584/Wildbeats-ppl/nishant_wjr83k.png" className="leadimg"/>
                                    <h1>Nishant Kumar</h1>
                                    <h4>Lead</h4>

                                </div>
                                <div>
                                    <img src="https://res.cloudinary.com/db5gjqx6a/image/upload/v1648877693/Wildbeats-ppl/Swani_rjxxrd.png" className="leadimg"/>
                                    <h1>Swani Didde</h1>
                                    <h4>Lead</h4>
                                    
                                </div>
                                <div>
                                    <img src="https://res.cloudinary.com/db5gjqx6a/image/upload/v1648877587/Wildbeats-ppl/amrutha_xda3zs.png" className="leadimg"/>
                                    <h1>Amrutha Reddy</h1>
                                    <h4>Lead</h4>
                                    
                                </div>
                                <div>
                                    <img src="https://res.cloudinary.com/db5gjqx6a/image/upload/v1648877587/Wildbeats-ppl/priyanshu_ioqwjh.png" className="leadimg"/>
                                    <h1>Priyanshu Gupta</h1>
                                    <h4>Lead</h4>
                                    
                                </div>
                                <div>
                                    <img src="https://res.cloudinary.com/db5gjqx6a/image/upload/v1648877585/Wildbeats-ppl/Harsha_j6s1lp.png" className="leadimg"/> 
                                    <h1>Harsha Kovvada</h1>
                                    <h4>Lead</h4>
                                </div>
                                <div>
                                    <img src="https://res.cloudinary.com/db5gjqx6a/image/upload/v1648877584/Wildbeats-ppl/kathyayani_a3qd76.png" className="leadimg"/>
                                    <h1>Kathyayani Bolgum</h1>
                                    <h4>Lead</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}