import React from 'react';
import styled from 'styled-components';

const MessageContainer = styled.div`
  cursor: no-drop;
  position: absolute;

  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: rgba(0, 0, 0, 0.6);
`;

const Message = styled.div`
  padding: 12px 18px;
  border-radius: 4px;

  color: #020202;
  background-color: #f47c7c;

  font-family: 'Poppins', sans-serif;
`;

/**
 * Component that displays a full-screen error message.
 */
class ErrorMessage extends React.Component<IProps> {
  public render() {
    const { message } = this.props;
    return (
      <MessageContainer>
        <Message>{message}</Message>
      </MessageContainer>
    );
  }
}

export default ErrorMessage;

export interface IProps {
  message?: string;
}
