import React, { useState } from "react";
import styled from "styled-components";
import ImageComponent from "../../atom/ImageComponent";
import "./styles.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

const Icon = styled(FontAwesomeIcon)`
  margin: 0 5px;
`;

const Toggle = styled.div`
  height: 170px;
  display: flex;
  justify-content: center;
  align-items: center;

  .actions {
    height: 50px;
    width: 150px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background: white;
    border-radius: 25px;
    color: black;
  }
`;

const CardImageComponent = styled(ImageComponent)`
  text-align: center;
  img {
    object-fit: contain;
    max-width: 150px;
    height: 170px;
  }
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CardStyled = styled.div`
  .card-content {
    padding: 10px;

    .card-body {
      .label {
        font-weight: bold;
      }
      .card-title {
        height: 38px;
        color: #333;
      }
      .card-description {
        color: #cecece;
        font-size: 13px;
        height: 30px;
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

    &:hover {
      background-color: #333;
      color: #eee;

      .card-title {
        color: #eee;
      }
    }
  }
`;

const CardComponent = ({ menuItem, dispatch, cartItem }) => {
  const { name, calories, thumb, time, headline, id } = menuItem;
  /*const dummyImg =
  ("https://media-cdn.tripadvisor.com/media/photo-s/12/8b/1c/f1/our-new-logo.jpg");
  */
  const imageUrl = `/images/${thumb}`;

  const [hover, setHover] = useState(false);

  const increment = () => dispatch({ type: "increment", payload: { id } });

  const decrement = () => dispatch({ type: "decrement", payload: { id } });

  return (
    <CardStyled className="card">
      <div
        className="card-content"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        {hover ? (
          <Toggle>
            <div className="actions">
              <Icon icon={faPlus} onClick={increment} />
              {cartItem || 0}
              <Icon icon={faMinus} onClick={decrement} />
            </div>
          </Toggle>
        ) : (
          <CardImageComponent imageUrl={imageUrl} imageTitle={name} />
        )}
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
