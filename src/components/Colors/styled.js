import styled from 'styled-components';

export const Wrap = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.white};
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background-color: ${(props) => props.theme.colors.whiteSmoke};
  width: 90vw;
  height: 150vh;
  border-radius: 56px;
  padding: 48px 58px;
  margin: 75px 50px;
`;

export const Title = styled.h1`
  font-family: ${(props) => props.theme.fonts.ubuntu};
  color: ${(props) => props.theme.colors.primary};
  font-size: 48px;
  font-weight: ${({ fontWeight }) => fontWeight || 600};

  & span {
    color: ${(props) => props.theme.colors.gray2};
  }
`;

export const SquareWrap = styled.div`
  width: ${({ width }) => width || '100%'};
  display: flex;
  justify-content: space-between;
  align-items: center;

`;
