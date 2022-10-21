import styled from 'styled-components';

export const Container = styled.div`
  height: ${({ height }) => height || '225px'};
  width: ${({ width }) => width || '225px'};
  box-shadow: 0px 30px 100px rgba(0, 0, 0, 0.35);
  background-color: ${({ backgroundColor }) => backgroundColor};
  border-radius: 15px;
  display: flex;
  align-items: end;
`;

export const ContentWrap = styled.div`
  width: 100%;
  height: ${({ contentHeight }) => contentHeight || '35%'};
  display: flex;
  flex-direction: column;
  padding-left: ${({ paddingLeft }) => paddingLeft};
  align-items: ${({ alignItems }) => alignItems};
`;

export const TitleSpan = styled.span`
  font-size: 16px;
  font-weight: 500;
  font-family: ${(props) => props.theme.fonts.ubuntu};
  color: ${({ titleColor }) => titleColor || 'white'};
  margin-bottom: ${({ marginBottom }) => marginBottom};
  font-weight: 700;
`;

export const CodeSpan = styled.span`
  font-size: 16px;
  font-weight: 500;
  opacity: ${({ opacity }) => opacity};
  text-transform: ${({ textTransform }) => textTransform};
  font-family: ${(props) => props.theme.fonts.ubuntu};
  color: ${({ codeColor }) => codeColor || 'white'};
`;
