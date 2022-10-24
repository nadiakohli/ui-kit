import React from 'react';

// Components
import ColorSquare from 'components/common/ColorSquare';

// Styles
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
        <span>02.</span>
        Colors
      </Title>
      <BlockWrap>
        <H2>Brand Colors</H2>
        <SquareWrap>
          <ColorSquare
            type="large"
            title="Primary"
            backgroundColor="#116ACC"
          />
          <ColorSquare
            type="large"
            title="Secondary 1"
            backgroundColor="#182233"
          />
          <ColorSquare
            type="large"
            grayColor="code"
            title="Secondary 2"
            backgroundColor="#B3CEE2"
          />
          <ColorSquare
            type="large"
            grayColor="code"
            title="Secondary 3"
            backgroundColor="#D9DDE7"
          />
          <ColorSquare
            type="large"
            title="Secondary 4"
            backgroundColor="#FD4E5D"
          />
        </SquareWrap>
      </BlockWrap>
      <BlockWrap>
        <H2>Gray Colors</H2>
        <SquareWrap>
          <ColorSquare
            type="small"
            title="Black"
            backgroundColor="#000000"
          />
          <ColorSquare
            type="small"
            title="Gray 1"
            backgroundColor="#1F2937"
          />
          <ColorSquare
            type="small"
            title="Gray 2"
            backgroundColor="#374151"
          />
          <ColorSquare
            type="small"
            title="Gray 3"
            backgroundColor="#4B5563"
          />
          <ColorSquare
            type="small"
            title="Gray 4"
            backgroundColor="#6B7280"
          />
          <ColorSquare
            type="small"
            title="Gray 5"
            backgroundColor="#9CA3AF"
          />
          <ColorSquare
            type="small"
            title="Gray 6"
            backgroundColor="#D1D5DB"
          />
          <ColorSquare
            type="small"
            title="Gray 7"
            grayColor="both"
            backgroundColor="#F3F4F6"
          />
          <ColorSquare
            type="small"
            title="White"
            grayColor="both"
            backgroundColor="#ffffff"
          />
        </SquareWrap>
      </BlockWrap>
      <BlockWrap>
        <H2>State Colors</H2>
        <SquareWrap width="43%">
          <ColorSquare
            type="small"
            title="Info"
            backgroundColor="#A0C3FF"
          />
          <ColorSquare
            type="small"
            title="Success"
            backgroundColor="#76CA66"
          />
          <ColorSquare
            type="small"
            title="Warning"
            backgroundColor="#FBC756"
          />
          <ColorSquare
            type="small"
            title="Error"
            backgroundColor="#BA0000"
          />
        </SquareWrap>
      </BlockWrap>
    </ContentWrap>
  </Wrap>
);

export default Colors;
