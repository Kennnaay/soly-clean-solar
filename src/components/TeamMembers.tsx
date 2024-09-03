import React, { useState } from "react";
import Card from "./Card";
import "bootstrap/dist/css/bootstrap.min.css";
import "./TeamMembers.css";
import ModalBtn from "./OffCampus";
import wiringURL from "../assets/wiring.png";
import jackCAD from "../assets/jackCAD.png";
import kennyCode from "../assets/kennyCode.png";
import wire1 from "../assets/wire1.png";
import Sophie from "../assets/Sophie.jpg";
import NathanCutting from "../assets/NathanCutting.png";
import HaydenCont from "../assets/HaydenCont.png";
import MitchCont from "../assets/TeamPic.png";
import MitchFace from "../assets/MitchFace.png";

interface TeamMembers {
  name: string;
  majors: string[];
  picURL: string;
  description: string;
  btnTitle: string;
  btnDescription: string;
  contributionURL: string;
}

interface PictureUrls {
  mitchURL: string;
  georgiaURL: string;
  jackURL: string;
  nathanURL: string;
  kennyURL: string;
  sophieURL: string;
  haydenURL: string;
  jackCAD: string;
  kennyCode: string;
  wire1: string;
}

function Cards({
  kennyURL,
  mitchURL,
  georgiaURL,
  jackURL,
  nathanURL,
  sophieURL,
  haydenURL,
  jackCAD,
  kennyCode,
  wire1,
}: PictureUrls) {
  // use state thing
  const [selectedMajor, setSelectedMajor] = useState<string | null>(null);

  // team member data
  const teamMembers: TeamMembers[] = [
    {
      name: "Mitchell Kirby",
      majors: ["Environmental Engineering"],
      picURL: mitchURL,
      description:
        "As the original visionary, Mitch not only came up with the project idea but also led the team week after week, guiding them through the journey of transforming his ideas and visions into tangible realities.",
      btnTitle: "Mitch's Contributions",
      btnDescription: "Bringing a hodgepodge group of various majors and ensuring everyone works together effectively is no easy task. But Mitch was able to do it to perfection. I mean, look at that team! ",
      contributionURL: MitchCont,
    },
    {
      name: "Georgia Danehy",
      majors: ["Computer Engineering", "Computer Science"],
      picURL: georgiaURL,
      description:
        "Beyond being the Director of Internal Operations for Makers, she also happens to be our certified hardware expert! Georgia led the integration of hardware and software, ensuring the behind-the-scenes magic worked as expected.",
      btnTitle: "Georgia's Contributions",
      btnDescription:
        "Throughout her tenure at Sol'y Clean Solar, Georgia distinguished herself not just as a leader, but as a seasoned mentor, guiding each member of her team with expertise. As the sole Computer Engineering/Computer Science major, Georgia's contributions were pivotal in ensuring the excellence of Sol'y Clean Solar's electrical components. Below is an example of one of her many wirings.",
      contributionURL: wiringURL,
    },
    {
      name: "Kenny Nguyen",
      majors: ["Computer Science"],
      picURL: kennyURL,
      description:
        "As the lead software developer, Kenny assisted in integrating software with hardware alongside Georgia. He also took the reins in crafting this very website, creating a digital platform that embodies our hard work on this year-long project!",
      btnTitle: "Kenny's Contributions",
      btnDescription:
        "Below is actually the source code for the navbar at the top of the page! Kenny used a combination of React, SCSS, and other libraries to make this website look clean and spiffy! ",
      contributionURL: kennyCode,
    },
    {
      name: "Sophie Beitel",
      majors: ["Environmental Engineering", "Mechanical Engineering"],
      picURL: sophieURL,
      description:
        " Without Sophie's insight, the project would have had a hard time getting off the ground. In the early stages, she was a key factor in, not only design, but also in strategic planning and implementation. Her versatility and leadership skills shined bright during her time with the project.",
      btnTitle: "Sophie's Contributions",
      btnDescription:
        "Below, is a picture of Sophie in action! Testing a linear actuator's ability to hold the weight of the solar panel!",
      contributionURL: Sophie,
    },
    {
      name: "Jack Nuttall",
      majors: ["Mechanical Engineering"],
      picURL: jackURL,
      description:
        "While he's not moving massive amounts of weight at the gym, Jack is half of the mechanical team, working with Hayden and Nathan to create the Solar Panel Design.",
      btnTitle: "Jack's Contributions",
      btnDescription:
        "During the course of the project, Jack seriously flexed his Mechanical Engineering muscles co-leading the design and implementation of all the moving parts of the solar panel. Below is Jack's CAD of the spinning cleaner! ",
      contributionURL: jackCAD,
    },
    {
      name: "Nathan Chun",
      majors: ["Mechanical Engineering"],
      picURL: nathanURL,
      description:
        "Along with Jack and Hayden, Nathan spearheaded all the mechanics that went into this project. If it moves, Nathan played a crucial role in its design and planning process.",
      btnTitle: "Nathan's Contributions",
      btnDescription:
        "Below we've got an action shot of Nathan cutting and shaping the framing. This framing would go on to be used to reinforce the solar panel's structural integrity.",
      contributionURL: NathanCutting,
    },
    {
      name: "Hayden Ranshaw",
      majors: ["Industrial and Systems Engineering"],
      picURL: haydenURL,
      description:
        "Joining the team in the latter half of the project, Hayden's continued contributions to the mechanical design team, as well as his expertise in troubleshooting and problem-solving, greatly improved the team's efficiency.",
      btnTitle: "Hayden's Contributions",
      btnDescription:
        "Shown below is the team testing out a couple of Hayden's ideas for the spinner. Underneath the panel is actually a large wooden spinner which rotates the panel to any desired orientation.",
      contributionURL: HaydenCont,
    },
  ];

  // all possible majors
  const majors = [
    "Environmental Engineering",
    "Computer Science",
    "Computer Engineering",
    "Mechanical Engineering",
    "Industrial and Systems Engineering",
  ];

  // filter thing
  const filteredResults = selectedMajor
    ? teamMembers.filter((member) => member.majors.includes(selectedMajor))
    : teamMembers;

  // reset filter
  const resetFilters = () => {
    setSelectedMajor(null);
  };

  return (
    <div className="text">
      <h2 className="heading__words"> Meet the Team</h2>
      <div
        className="majorButtons-container"
        style={{ display: "flex", justifyContent: "flex-end" }}
      >
        {majors.map((major) => (
          <button
            className="majorButtons"
            key={major}
            onClick={() => setSelectedMajor(major)}
          >
            {major}
          </button>
        ))}
        <button className="majorButtons" onClick={resetFilters}>
          See All
        </button>
      </div>
      <div className="wrapper">
        {filteredResults.map((member) => (
          <Card
            key={member.name}
            title={member.name}
            description={member.description}
            imageUrl={member.picURL}
            btnTitle={member.btnTitle}
            btnDescription={member.btnDescription}
            contributionURL={member.contributionURL}
          />
        ))}
      </div>
    </div>
  );
}

export default Cards;
