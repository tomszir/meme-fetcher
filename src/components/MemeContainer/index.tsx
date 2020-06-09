import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

import { Meme, MemeAxiosResponse } from './types';

import Thumbnail from './Thumbnail';
import ErrorMessage from '../ErrorMessage';

// This is just some random API that I found on the internet.
const API_URL = 'https://meme-api.herokuapp.com/gimme';

const Title = styled.h1`
  color: #f1f1f1;
  font-family: 'Poppins', sans-serif;
  margin-bottom: 24px;
`;

const MemeWrapper = styled.div`
  flex: 1;

  width: 100%;
  max-width: 960px;

  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;
`;

/**
 * The main component that contains all other Meme components.
 */
class MemeContainer extends React.Component<{}, IState> {
  state: Readonly<IState> = {
    meme: null,
    error: null,
    isLoading: true,
  };

  /**
   * Fetches a (random) meme from the provided meme API & stores it in the state.
   */
  public fetchRandomMeme(): void {
    axios
      .get(API_URL)
      .then(({ data }: MemeAxiosResponse) => {
        if (this.state.meme && data.url == this.state.meme.url) {
          return this.fetchRandomMeme();
        }

        this.setState({
          meme: data,
          isLoading: false,
        });
      })
      .catch((err) => {
        console.error(err);
        this.setState({
          error: err.message,
        });
      });
  }

  public componentDidMount() {
    this.fetchRandomMeme();
    document.addEventListener('keydown', (e) => this.handleKeypress(e), false);
  }

  public componentWillUnmount() {
    document.removeEventListener(
      'keydown',
      (e) => this.handleKeypress(e),
      false
    );
  }

  public handleKeypress(e: KeyboardEvent): void {
    if (e.keyCode == 32) this.fetchRandomMeme();
  }

  public render() {
    const { isLoading, error, meme } = this.state;

    return (
      <MemeWrapper>
        {!isLoading && meme && (
          <>
            <Title>{meme.title}</Title>
            <Thumbnail onClick={() => this.fetchRandomMeme()} meme={meme} />
          </>
        )}
        {error && <ErrorMessage message={error} />}
      </MemeWrapper>
    );
  }
}

export default MemeContainer;

export interface IState {
  meme?: Meme;
  error?: string;
  isLoading?: boolean;
}
