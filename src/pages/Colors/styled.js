import styled from 'styled-components';

export const Wrap = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  background-color: ${({ theme: { colors: { white } } }) => white};
`;

export const ContentWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background-color: ${({ theme: { colors: { whiteSmoke } } }) => whiteSmoke};
  width: 90vw;
  border-radius: 56px;
  padding: 48px 58px;
  margin: 75px 50px;
`;

export const Title = styled.h1`
  font-family: ${({ theme: { fonts: { ubuntu } } }) => ubuntu};
  color: ${({ theme: { colors: { primary } } }) => primary};
  font-size: 48px;
  font-weight: ${({ fontWeight }) => fontWeight || 600};

  & span {
    color: ${({ theme: { colors: { gray2 } } }) => gray2};
  }
`;

export const H2 = styled.h2`
  font-family: ${({ theme: { fonts: { ubuntu } } }) => ubuntu};
  color: ${({ theme: { colors: { gray2 } } }) => gray2};
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 15px;
`;

export const SquareWrap = styled.div`
  width: ${({ width }) => width || '100%'};
  display: flex;
  justify-content: space-between;
  align-items: center;

`;

export const BlockWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 0;
`;
