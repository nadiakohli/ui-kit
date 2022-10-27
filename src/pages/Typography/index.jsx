import React from 'react';

// Components
import Card from 'components/common/Card';
import TypographyTable from 'components/Typography/TypographyTable';

// Styles
import {
  Wrap,
  ContentWrap,
  BlockWrap,
  Title,
  H2,
  H3,
  CardWrap,
  Span,
} from './styled';

const Typography = () => (
  <Wrap>
    <ContentWrap>
      <Title>
        <span>01.</span>
        Typography
      </Title>
      <BlockWrap>
        <H2>Font StyleGuide</H2>
        <Span>Ubuntu</Span>
      </BlockWrap>
      <BlockWrap>
        <H2>Text Weight</H2>
        <CardWrap>
          <Card>
            <H3 fontWeight="300">Aa</H3>
            <span>Light</span>
          </Card>
          <Card>
            <H3 fontWeight="400">Aa</H3>
            <span>Regular</span>
          </Card>
          <Card>
            <H3 fontWeight="600">Aa</H3>
            <span>Medium</span>
          </Card>
          <Card>
            <H3 fontWeight="bold">Aa</H3>
            <span>Bold</span>
          </Card>
        </CardWrap>
      </BlockWrap>
      <BlockWrap>
        <H2>Text Style</H2>
        <TypographyTable />
      </BlockWrap>
    </ContentWrap>
  </Wrap>
);

export default Typography;
