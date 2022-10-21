import styled from 'styled-components';

export const Table = styled.table`
  width: 100%;
  border-spacing: 0;
  border-collapse: collapse;

  & thead {
    height: 64px;
    color: ${(props) => props.theme.colors.white};

    & th {
      background-color: ${(props) => props.theme.colors.primary};
    }

    & th:first-child {
      border-bottom-left-radius: 10px;
      border-top-left-radius: 10px;
    }

    & th:last-child {
      border-bottom-right-radius: 10px;
      border-top-right-radius: 10px;
    }
  }

  & tbody {
    & tr {
      height: 72px;
      border-bottom: 2px solid rgba(0, 82, 255, 0.1);
    }

    & tr:last-child {
      border-bottom: none;
    }

    & td {
      padding-left: 55px;
      font-weight: 400;
      font-size: 16px;
      color: ${(props) => props.theme.colors.gray2};
    }
  }
`;
