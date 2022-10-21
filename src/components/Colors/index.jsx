import React from 'react';
import PropTypes from 'prop-types';

// Components
import Article from 'components/common/Article';
import ColorSquare from 'components/common/ColorSquare';

// Styles
import {
  Wrap,
  Container,
  Title,
  SquareWrap,
} from './styled';

const Colors = ({ width }) => (
  <Wrap>
    <Container>
      <Title>
        <span>02.</span>
        Colors
      </Title>
      <Article title="Brand Colors">
        <SquareWrap>
          <ColorSquare
            title="Primary"
            code="#116ACC"
            backgroundColor="#116ACC"
            opacity="0.8"
            textTransform="uppercase"
            marginBottom="5px"
            paddingLeft="35px"
          />
          <ColorSquare
            title="Secondary 1"
            code="#182233"
            backgroundColor="#182233"
            opacity="0.8"
            textTransform="uppercase"
            marginBottom="5px"
            paddingLeft="35px"
          />
          <ColorSquare
            title="Secondary 2"
            code="#B3CEE2"
            backgroundColor="#B3CEE2"
            opacity="0.8"
            textTransform="uppercase"
            codeColor="#374151"
            marginBottom="5px"
            paddingLeft="35px"
          />
          <ColorSquare
            title="Secondary 3"
            code="#D9DDE7"
            backgroundColor="#D9DDE7"
            opacity="0.8"
            textTransform="uppercase"
            codeColor="#374151"
            marginBottom="5px"
            paddingLeft="35px"
          />
          <ColorSquare
            title="Secondary 4"
            code="#FD4E5D"
            backgroundColor="#FD4E5D"
            opacity="0.8"
            textTransform="uppercase"
            marginBottom="5px"
            paddingLeft="35px"
          />
        </SquareWrap>
      </Article>
      <Article title="Gray Colors">
        <SquareWrap>
          <ColorSquare
            title="Black"
            code="#000000"
            backgroundColor="#000000"
            opacity="0.8"
            textTransform="uppercase"
            marginBottom="5px"
            height="100px"
            width="100px"
            alignItems="center"
            contentHeight="70%"
          />
          <ColorSquare
            title="Gray 1"
            code="#1F2937"
            backgroundColor="#1F2937"
            opacity="0.8"
            textTransform="uppercase"
            marginBottom="5px"
            height="100px"
            width="100px"
            alignItems="center"
            contentHeight="70%"
          />
          <ColorSquare
            title="Gray 2"
            code="#374151"
            backgroundColor="#374151"
            opacity="0.8"
            textTransform="uppercase"
            marginBottom="5px"
            height="100px"
            width="100px"
            alignItems="center"
            contentHeight="70%"
          />
          <ColorSquare
            title="Gray 3"
            code="#4B5563"
            backgroundColor="#4B5563"
            opacity="0.8"
            textTransform="uppercase"
            marginBottom="5px"
            height="100px"
            width="100px"
            alignItems="center"
            contentHeight="70%"
          />
          <ColorSquare
            title="Gray 4"
            code="#6B7280"
            backgroundColor="#6B7280"
            opacity="0.8"
            textTransform="uppercase"
            marginBottom="5px"
            height="100px"
            width="100px"
            alignItems="center"
            contentHeight="70%"
          />
          <ColorSquare
            title="Gray 5"
            code="#9CA3AF"
            backgroundColor="#9CA3AF"
            opacity="0.8"
            textTransform="uppercase"
            marginBottom="5px"
            height="100px"
            width="100px"
            alignItems="center"
            contentHeight="70%"
          />
          <ColorSquare
            title="Gray 6"
            code="#D1D5DB"
            backgroundColor="#D1D5DB"
            opacity="0.8"
            textTransform="uppercase"
            marginBottom="5px"
            height="100px"
            width="100px"
            alignItems="center"
            contentHeight="70%"
          />
          <ColorSquare
            title="Gray 7"
            code="#F3F4F6"
            backgroundColor="#F3F4F6"
            opacity="0.8"
            textTransform="uppercase"
            marginBottom="5px"
            height="100px"
            width="100px"
            alignItems="center"
            contentHeight="70%"
            codeColor="#374151"
            titleColor="#374151"
          />
          <ColorSquare
            title="White"
            code="#ffffff"
            backgroundColor="#ffffff"
            opacity="0.8"
            textTransform="uppercase"
            marginBottom="5px"
            height="100px"
            width="100px"
            alignItems="center"
            contentHeight="70%"
            codeColor="#374151"
            titleColor="#374151"
          />
        </SquareWrap>
      </Article>
      <Article title="State Colors">
        <SquareWrap width="43%">
          <ColorSquare
            title="Info"
            code="#A0C3FF"
            backgroundColor="#A0C3FF"
            opacity="0.8"
            textTransform="uppercase"
            marginBottom="5px"
            height="100px"
            width="100px"
            alignItems="center"
            contentHeight="70%"
          />
          <ColorSquare
            title="Success"
            code="#76CA66"
            backgroundColor="#76CA66"
            opacity="0.8"
            textTransform="uppercase"
            marginBottom="5px"
            height="100px"
            width="100px"
            alignItems="center"
            contentHeight="70%"
          />
          <ColorSquare
            title="Warning"
            code="#FBC756"
            backgroundColor="#FBC756"
            opacity="0.8"
            textTransform="uppercase"
            marginBottom="5px"
            height="100px"
            width="100px"
            alignItems="center"
            contentHeight="70%"
          />
          <ColorSquare
            title="Error"
            code="#BA0000"
            backgroundColor="#BA0000"
            opacity="0.8"
            textTransform="uppercase"
            marginBottom="5px"
            height="100px"
            width="100px"
            alignItems="center"
            contentHeight="70%"
          />
        </SquareWrap>
      </Article>
    </Container>
  </Wrap>
);

Colors.propTypes = {
  width: PropTypes.string.isRequired,
};

export default Colors;
