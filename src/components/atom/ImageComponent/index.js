import React from "react";
import styled from "styled-components";

export const ImageHolder = styled.img`
  vertical-align: middle;
  height: auto;
  border-radius: ${props => (props.borderRadius ? props.borderRadius : "")};
`;

const ImageContainer = styled.div`
  margin-top: 20px;
`;

const ImageComponent = ({ imageUrl, imageTitle, borderRadius, className }) => {
  return (
    <ImageContainer className={className}>
      <ImageHolder
        src={imageUrl}
        alt={imageTitle}
        borderRadius={borderRadius}
      />
    </ImageContainer>
  );
};

ImageComponent.defaultProps = {
  imageUrl: "https://picsum.photos/400",
  imageTitle: "Placeholder Image"
};

export default ImageComponent;
