import React from "react";
import styled from "styled-components";
import ImageComponent from "../../atom/ImageComponent";
import "./styles.scss";

const CardImageComponent = styled(ImageComponent)`
  height: 200px;
  overflow: hidden;
`;

const CardStyled = styled.div`
  .card-body {
    min-height: 130px;
    padding: 10px;
    p,
    h4 {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .label {
      font-weight: bold;
    }
  }
`;
const CardComponent = ({ menuItem }) => {
  const { name, calories, thumb, time, headline } = menuItem;
  return (
    <CardStyled className="card">
      <div className="card-content">
        <CardImageComponent imageUrl={thumb} imageTitle={name} />
        <div className="card-body">
          <div className="card-title">
            <h4>Name: {name}</h4>
          </div>
          <div className="card-description">
            <p>{headline}</p>
          </div>
          <div className="card-additionalInfo">
            <div className="card-calories">
              <p>
                <span className="label">Calories:</span>
                <span>{calories}</span>
              </p>
            </div>
            <div className="card-preparation">
              <p>Preparation Time: {time}</p>
            </div>
          </div>
        </div>
      </div>
    </CardStyled>
  );
};

export default CardComponent;
