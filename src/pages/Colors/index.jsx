import React from 'react';

// Components
import ColorSquare from 'components/common/ColorSquare';

// Styles
import { theme } from 'styles/Theme';
import {
  Wrap,
  ContentWrap,
  BlockWrap,
  H2,
  Title,
  SquareWrap,
} from './styled';

const Colors = () => (
  <Wrap>
    <ContentWrap>
      <Title>
        <span>02. </span>
        Colors
      </Title>
      <BlockWrap>
        <H2>Brand Colors</H2>
        <SquareWrap>
          <ColorSquare
            type="large"
            title="Primary"
            backgroundColor={theme.colors.primary}
          />
          <ColorSquare
            type="large"
            title="Secondary 1"
            backgroundColor={theme.colors.secondary1}
          />
          <ColorSquare
            type="large"
            title="Secondary 2"
            backgroundColor={theme.colors.secondary2}
            codeColor={theme.colors.gray2}
          />
          <ColorSquare
            type="large"
            title="Secondary 3"
            backgroundColor={theme.colors.secondary3}
            codeColor={theme.colors.gray2}
          />
          <ColorSquare
            type="large"
            title="Secondary 4"
            backgroundColor={theme.colors.secondary4}
          />
        </SquareWrap>
      </BlockWrap>
      <BlockWrap>
        <H2>Gray Colors</H2>
        <SquareWrap>
          <ColorSquare
            type="small"
            title="Black"
            backgroundColor={theme.colors.black}
          />
          <ColorSquare
            type="small"
            title="Gray 1"
            backgroundColor={theme.colors.gray1}
          />
          <ColorSquare
            type="small"
            title="Gray 2"
            backgroundColor={theme.colors.gray2}
          />
          <ColorSquare
            type="small"
            title="Gray 3"
            backgroundColor={theme.colors.gray3}
          />
          <ColorSquare
            type="small"
            title="Gray 4"
            backgroundColor={theme.colors.gray4}
          />
          <ColorSquare
            type="small"
            title="Gray 5"
            backgroundColor={theme.colors.gray5}
          />
          <ColorSquare
            type="small"
            title="Gray 6"
            backgroundColor={theme.colors.gray6}
          />
          <ColorSquare
            type="small"
            title="Gray 7"
            backgroundColor={theme.colors.gray7}
            titleColor={theme.colors.gray2}
            codeColor={theme.colors.gray2}
          />
          <ColorSquare
            type="small"
            title="White"
            backgroundColor={theme.colors.white}
            titleColor={theme.colors.gray2}
            codeColor={theme.colors.gray2}
          />
        </SquareWrap>
      </BlockWrap>
      <BlockWrap>
        <H2>State Colors</H2>
        <SquareWrap width="43%">
          <ColorSquare
            type="small"
            title="Info"
            backgroundColor={theme.colors.info}
          />
          <ColorSquare
            type="small"
            title="Success"
            backgroundColor={theme.colors.success}
          />
          <ColorSquare
            type="small"
            title="Warning"
            backgroundColor={theme.colors.warning}
          />
          <ColorSquare
            type="small"
            title="Error"
            backgroundColor={theme.colors.error}
          />
        </SquareWrap>
      </BlockWrap>
    </ContentWrap>
  </Wrap>
);

export default Colors;
