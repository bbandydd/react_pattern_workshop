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
      color: #fe3e00;
    }
  }
`;

export const Content = styled.div`
  padding: 15px;
`;
