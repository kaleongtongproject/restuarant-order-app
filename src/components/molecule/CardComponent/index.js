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
  const { name, price, image, preparationTime, description } = menuItem;
  return (
    <CardStyled>
      <div className="card">
        <div className="card-content">
          <CardImageComponent imageUrl={image} imageTitle={name} />
          <div className="card-body">
            <div className="card-title">
              <h4>Name: {name}</h4>
            </div>
            <div className="card-price">
              <p>
                <span className="label">Price:</span>
                <span>{price}</span>
              </p>
            </div>
            <div>
              <p>Preparation Time: {preparationTime}</p>
            </div>
            <div>
              <p>{description}</p>
            </div>
          </div>
        </div>
      </div>
    </CardStyled>
  );
};

export default CardComponent;
