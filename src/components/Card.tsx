import React from "react";
import "../Card.scss";
import CardButton from "./OffCampus";
interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
  btnTitle: string;
  btnDescription: string;
  contributionURL: string;
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  imageUrl,
  btnTitle,
  btnDescription,
  contributionURL,
}) => {
  return (
    <div className="card">
      <div className="card__body">
        <img src={imageUrl} alt="Not found" className="card__image" />
        <h2 className="card__title">{title}</h2>
        <p className="card__description">{description}</p>
      </div>
      <CardButton
        buttonDescription={btnDescription}
        btnTitle={btnTitle}
        contributionURL={contributionURL}
      ></CardButton>
    </div>
  );
};

export default Card;
