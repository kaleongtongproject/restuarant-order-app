import React from "react";
import styled from "styled-components";
import ImageComponent from "../../atom/ImageComponent";
import "./styles.scss";

const CardImageComponent = styled(ImageComponent)`
  text-align: center;
  img {
    max-height: 150px;
    max-width: 150px;
  }
`;

const CardStyled = styled.div`
  .card-content {
    padding: 10px;
    .card-body {
      .label {
        font-weight: bold;
      }
      .card-title {
        color: #333;
      }
      .card-description {
        color: #cecece;
        font-size: 13px;
      }
      .card-additionalInfo {
        display: flex;
        justify-content: space-between;
        font-size: 10px;
        > p {
          display: inline-block;
        }
      }
    }
  }
`;
const CardComponent = ({ menuItem, add }) => {
  const { name, calories, thumb, time, headline, id } = menuItem;
  const dummyImg =
    "https://media-cdn.tripadvisor.com/media/photo-s/12/8b/1c/f1/our-new-logo.jpg";
  return (
    <CardStyled className="card" onClick={() => add(id)}>
      <div className="card-content">
        <CardImageComponent imageUrl={dummyImg} imageTitle={name} />
        <div className="card-body">
          <div className="card-title">
            <h4>{name}</h4>
          </div>
          <div className="card-description">
            <p>{headline}</p>
          </div>
          <div className="card-additionalInfo">
            <p className="card-calories">
              <span className="label">Calories: </span>
              <span>{calories}</span>
            </p>
            <p className="card-preparation">
              <span className="label">Time: </span>
              <span>{time}</span>
            </p>
          </div>
        </div>
      </div>
    </CardStyled>
  );
};

export default CardComponent;
