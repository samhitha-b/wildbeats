import React, { useState } from "react";
import Men from "./mentor";
import Collapsible from 'react-collapsible';
import Led19 from "./lead19";

// import bivek from "../images/bivek.png";
// import rahul from "../images/rahul.png";

// import keerthi from "../images/Keerthi.png";
// import mekala from "../images/Mekala.png";

// import sai from "../images/sai.png";
// import srija from "../images/srija.png";
// import sandeep from "../images/sandeep.png";
// import pushpak from "../images/pushpak.png";


export default function Time(){

    const [timeHover, setTimeHover] = useState(0);

    return(
        <div className="container">
            <div className="timeline">
                <ul>
                    <li>
                        <div onMouseEnter = {() => setTimeHover(1)} onMouseLeave = {() => setTimeHover(0)}>
                            <Collapsible 
                                trigger="2020-21" 
                                className="timeline-content" 
                                open = {timeHover === 1 ? true : false}
                            >
                                {/* <Men /> */}
                                {/* <Led20 /> */}
                                <div className="mentor">
                                    <div>
                                        <img src="https://res.cloudinary.com/db5gjqx6a/image/upload/v1648877605/Wildbeats-ppl/bivek_yq4xob.png" className="mentor-img"/>
                                        <h1>Bivek Paul</h1>
                                        <h4>Mentor</h4>
                                    </div>
                                    <div>
                                        <img src="https://res.cloudinary.com/db5gjqx6a/image/upload/v1648877736/Wildbeats-ppl/rahul_u0w4eq.png" className="mentor-img"/>
                                        <h1>Rahul Nayak B.V</h1>
                                        <h4>Mentor</h4>
                                    </div>
                                </div>
                            </Collapsible>
                        </div>
                        
                    </li>
                    <li>
                        <div onMouseEnter = {() => setTimeHover(2)} onMouseLeave = {() => setTimeHover(0)} >
                            <Collapsible 
                                trigger="2019-20"
                                className="timeline-content"
                                open = {timeHover === 2 ? true : false}
                            >
                                {/* <Men /> */}
                                
                                <div className="mentor">
                                    <div>
                                        <img src="https://res.cloudinary.com/db5gjqx6a/image/upload/v1648877600/Wildbeats-ppl/Keerthi_kftxcp.png" className="mentor-img"/>
                                        <h1>Keerthi Sreenivas</h1>
                                        <h4>Mentor</h4>
                                    </div>
                                    <div>
                                        <img src="https://res.cloudinary.com/db5gjqx6a/image/upload/v1648877721/Wildbeats-ppl/Mekala_qpb2yn.png" className="mentor-img"/>
                                        <h1>Mekala Bhargav</h1>
                                        <h4>Mentor</h4>
                                    </div>
                                </div>
                                {/* <Led19 /> */}
                                
                                <div className="lead">
                                    <div className="lead1-19">
                                        <div>
                                            <img src="https://res.cloudinary.com/db5gjqx6a/image/upload/v1648877546/Wildbeats-ppl/deepesh_lfcyvk.png" className="leadimg"/>
                                            <h1>Deepesh Sharma</h1>
                                            <h4>Lead</h4>
                                        </div>
                                        <div>
                                            <img src="https://res.cloudinary.com/db5gjqx6a/image/upload/v1648877547/Wildbeats-ppl/sangeetha_dz2rhj.png" className="leadimg"/>
                                            <h1>Sangeetha Suresh</h1>
                                            <h4>Lead</h4>
                                        </div>
                                        
                                    </div>
                                    <div className="lead1-19">
                                        <div>
                                            <img src="https://res.cloudinary.com/db5gjqx6a/image/upload/v1648877605/Wildbeats-ppl/bivek_yq4xob.png" className="leadimg"/>
                                            <h1>Bivek Paul</h1>
                                            <h4>Lead</h4>
                                        </div>
                                        <div>
                                            <img src="https://res.cloudinary.com/db5gjqx6a/image/upload/v1648877580/Wildbeats-ppl/anurag_rxmeuz.png" className="leadimg"/>
                                            <h1>Anurag Reddy</h1>
                                            <h4>Lead</h4>
                                        </div>
                                        
                                        
                                    </div>
                                    <div className="lead1-19">
                                        <div>
                                            <img src="https://res.cloudinary.com/db5gjqx6a/image/upload/v1648877544/Wildbeats-ppl/tumun_qi6gwq.png" className="leadimg"/>
                                            <h1>Tumun Shaily</h1>
                                            <h4>Lead</h4>
                                        </div>
                                    </div>
                                </div>



                            </Collapsible>
                        </div>
                    </li>
                    <li>
                        <div onMouseEnter = {() => setTimeHover(3)} onMouseLeave = {() => setTimeHover(0)} >
                            <Collapsible 
                                trigger="2018-19" 
                                className="timeline-content"
                                open = {timeHover === 3 ? true : false}
                            >
                                {/* <Men /> */}
                                <div className="mentor">
                                    <div>
                                        <img src="https://res.cloudinary.com/db5gjqx6a/image/upload/v1648877544/Wildbeats-ppl/sai_dnbthd.png" className="mentor-img"/>
                                        <h1>Sai Surya Kiran</h1>
                                        <h4>Mentor</h4>
                                    </div>
                                    <div>
                                        <img src="https://res.cloudinary.com/db5gjqx6a/image/upload/v1648877547/Wildbeats-ppl/sandeep_da7tes.png" className="mentor-img"/>
                                        <h1>Sandeep Kumar</h1>
                                        <h4>Mentor</h4>
                                    </div>
                                </div>
                            </Collapsible>
                        </div>
                    </li>
                    <li>
                        <div onMouseEnter = {() => setTimeHover(4)} onMouseLeave = {() => setTimeHover(0)} >
                            <Collapsible 
                                trigger="2017-18"
                                className="timeline-content"
                                open = {timeHover === 4 ? true : false}
                            >
                                {/* <Men /> */}
                                <div className="mentor">
                                    <div>
                                        <img src="https://res.cloudinary.com/db5gjqx6a/image/upload/v1648877543/Wildbeats-ppl/pushpak_bq9zjx.png" className="mentor-img"/>
                                        <h1>Pushpak Raj</h1>
                                        <h4>Mentor</h4>
                                    </div>
                                    <div>
                                        <img src="https://res.cloudinary.com/db5gjqx6a/image/upload/v1648877551/Wildbeats-ppl/srija_b7gbcq.png" className="mentor-img"/>
                                        <h1>Srija Munjuluri</h1>
                                        <h4>Mentor</h4>
                                    </div>
                                </div>
                            </Collapsible>
                        </div>
                    </li>

                </ul>

            </div>

        </div>
    )
}