import styled from 'styled-components';

export const Menu = styled.div`
  display: flex;
  align-items: center;
  background: #333;
  padding: 15px;

  > a {
    color: #fff;
    text-decoration: none;
    font-weight: bold;

    &:not(:last-child) {
      margin-right: 40px;
    }

    &.active {
      color: rgb(255, 195, 0);
      border-bottom: 3px solid rgb(255, 195, 0);
    }
  }
`;

export const Content = styled.div`
  padding: 15px;
`;
