import React from "react";
import lightVid from "../assets/lights.mp4";
import phoneVid from "../assets/phone.mp4";
import VideoWithTextLeft from "./ProjectPageVidLeft";
import VideoWithTextRight from "./ProjectPageVidRight";
const Projects: React.FC = () => {
  return (
    <div className="page-container">
      <VideoWithTextLeft
        bigString="Optimal Tilt Angle"
        smallString="Design"
        description="In the realm of solar energy, where every photon counts, the angle
    and direction of your panels wield significant influence over your
    energy yield.With six hours of sunlight daily, a properly angled panel setup can generate between
    546 to 874 kWh annually. By fine-tuning the angle and direction to
    perfection, you can amplify this output by up to 10%, potentially
    adding 88 kWh to your yearly energy harvest. It's not just about
    harnessing sunlight; it's about harnessing it optimally. Every
    adjustment toward the optimal angle isn't just a tweak; it's an
    investment in unlocking the full potential of solar energy for your
    home and for the environment."
        vidURL={lightVid}
        buttonDescription="Meet the Designers"
      />
      <VideoWithTextRight
        bigString="Behind the Scenes Software & Hardware"
        smallString="Data"
        description="To make the solar panel do what we wanted it to do, the team utilized a variety of hardware and
         software components working in tandem. Combining the contributions of the hardware and software teams was no easy task.
          The hardware components relied completely on the software components because without the proper 
        signals being sent to the linear actuators or motors, the panel wouldn't move. On the other hand, the software components
        also relied on the hardware components due to their limitations and general capabilities. If we try to send too strong of a signal, we run the risk of short circuiting."
        vidURL={phoneVid}
      />
    </div>
  );
};

export default Projects;
