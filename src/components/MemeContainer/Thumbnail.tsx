import React from 'react';
import styled from 'styled-components';

import { Meme } from './types';

const ImageContainer = styled.div`
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const ImageOverlay = styled.div`
  cursor: pointer;

  display: none;
  position: absolute; 

  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  padding: 12px;
  border-radius: 4px;

  align-items: center;
  justify-content: center;

  text-align: center;

  font-size: 24px;
  font-family: 'Poppins', sans-serif;

  color: #f1f1f1;
  background-color: rgba(0, 0, 0, 0.75);

  &:hover {
    display: flex;
  }
`;

const Image = styled.img`
  max-width: 100%;
  max-height: 80vh;

  object-fit: contain;

  border-radius: 4px;

  &:hover + ${ImageOverlay} {
    display: flex;
  }
`;

/**
 * A component that displays the Meme's thumbnail image.
 */
class Thumbnail extends React.Component<IProps> {
  public render() {
    const { meme, onClick } = this.props;

    return (
      <ImageContainer>
        <Image src={meme.url} />
        <ImageOverlay onClick={onClick}>
          Click me or press SPACE to refresh!
        </ImageOverlay>
      </ImageContainer>
    );
  }
}

export default Thumbnail;

export interface IProps {
  meme: Meme;
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}
