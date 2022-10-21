import React from 'react';

// Components
import Article from 'components/common/Article';
import Card from 'components/common/Card';
import TextStyleTable from './TextStyleTable';

// Styles
import {
  Wrap,
  Container,
  Title,
  CardWrap,
  Span,
} from './styled';

const Typography = () => (
  <Wrap>
    <Container>
      <Title>
        <span>01.</span>
        Typography
      </Title>
      <Article title="Font StyleGuide">
        <Span>Ubuntu</Span>
      </Article>
      <Article title="Text Weight">
        <CardWrap>
          <Card title="Aa" text="Light" fontWeight="300" />
          <Card title="Aa" text="Regular" fontWeight="400" />
          <Card title="Aa" text="Medium" fontWeight="600" />
          <Card title="Aa" text="Bold" fontWeight="bold" />
        </CardWrap>
      </Article>
      <Article title="Text Style">
        <TextStyleTable />
      </Article>
    </Container>
  </Wrap>
);

export default Typography;
