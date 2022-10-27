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

export const BlockWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 0;
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
  margin-bottom: 10px;
`;

export const H3 = styled.h3`
  color: ${({ theme: { colors: { primary } } }) => primary};
  font-weight: ${({ fontWeight }) => fontWeight || 300};
  font-size: 48px;
`;

export const Span = styled.span`
  color: ${({ theme: { colors: { primary } } }) => primary};
  font-weight: 500;
  font-size: 20px;
`;

export const CardWrap = styled.div`
  width: 60%;
  display: flex;
  justify-content: space-between;
`;
