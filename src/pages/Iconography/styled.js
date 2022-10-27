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
  justify-content: space-between;
  background-color: ${({ theme: { colors: { whiteSmoke } } }) => whiteSmoke};
  width: 90vw;
  border-radius: 56px;
  padding: 48px 58px;
  margin: 75px 50px;
`;

export const BlockWrap = styled.div`
  width: 85%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin: 20px 0;
`;

export const IconsBlockWrap = styled.div`
  margin-bottom: 65px;

  &:last-child {
    margin-bottom: 0;
  }

  & div {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 475px;
    margin-bottom: 15px;
  }
`;

export const Title = styled.h1`
  font-family: ${({ theme: { fonts: { ubuntu } } }) => ubuntu};
  color: ${({ theme: { colors: { primary } } }) => primary};
  font-size: 48px;
  font-weight: ${({ fontWeight }) => fontWeight || 600};
  margin-bottom: 50px;

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
  font-family: ${({ theme: { fonts: { ubuntu } } }) => ubuntu};
  color: ${({ theme: { colors: { gray3 } } }) => gray3};
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 15px;
`;

export const IconsWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;

  & svg {
    width: 15px;
    height: 15px;
  }
`;