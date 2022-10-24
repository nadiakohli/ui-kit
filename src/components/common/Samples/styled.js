import styled from 'styled-components';

export const Typography1 = styled.div`
  font-size: 32px;
  font-weight: bold;
  font-family: ${({ theme: { fonts: { ubuntu } } }) => ubuntu};
  line-height: 36px;
`;

export const Typography2 = styled(Typography1)`
  font-weight: 500;
`;

export const Typography3 = styled(Typography1)`
  font-size: 24px;
  font-weight: 400;
  line-height: 28px;
`;

export const Typography4 = styled(Typography1)`
  font-size: 22px;
  font-weight: 600;
  line-height: 24px;
`;

export const Typography5 = styled(Typography4)`
  font-size: 20px;
  line-height: 22px;
`;

export const Typography6 = styled(Typography5)`
  font-size: 18px;
  font-weight: 300;
`;

export const Typography7 = styled(Typography1)`
  font-size: 16px;
  line-height: 24px;
`;

export const Typography8 = styled(Typography7)`
  font-weight: 600;
  line-height: 20px;
`;

export const Typography9 = styled(Typography8)`
  font-size: 16px;
  font-weight: 400;
`;

export const Typography10 = styled(Typography8)`
  font-weight: 300;
`;

export const Typography11 = styled(Typography8)`
  font-size: 14.5px;
`;

export const Typography12 = styled(Typography8)`
  font-size: 14px;
  font-weight: 400;
`;

export const Typography13 = styled(Typography8)`
  font-size: 13px;
`;

export const Typography14 = styled(Typography8)`
  font-size: 13px;
  font-weight: 400;
`;
