import React from 'react';

// Components
import Button from 'components/common/Buttons/Button';
import Tag from 'components/common/Buttons/Tag';
import Text from 'components/common/Buttons/Text';
import Icon from 'components/common/Buttons/Icon';
import Dots from 'components/common/Buttons/Dots';

// Icons
import { ReactComponent as Pen } from 'assets/icons/pen.svg';

// Styles
import {
  Wrap,
  ContentWrap,
  Title,
  H2,
  H3,
  BlocksWrap,
  ButtonWrap,
  Table,
} from './styled';

const Buttons = () => (
  <Wrap>
    <ContentWrap>
      <Title>
        <span>05. </span>
        Buttons
      </Title>
      <BlocksWrap>
        <div>
          <H2>Color</H2>
          <ButtonWrap>
            <H3>Primary</H3>
            <Button type="primary">Button sample</Button>
          </ButtonWrap>
          <ButtonWrap>
            <H3>Secondary</H3>
            <Button type="secondary">Button sample</Button>
          </ButtonWrap>
        </div>
        <div>
          <H2>Size</H2>
          <ButtonWrap>
            <H3>Small</H3>
            <Button size="small">Button sample</Button>
          </ButtonWrap>
          <ButtonWrap>
            <H3>Normal</H3>
            <Button size="normal">Button sample</Button>
          </ButtonWrap>
          <ButtonWrap>
            <H3>Medium</H3>
            <Button size="medium">Button sample</Button>
          </ButtonWrap>
        </div>
        <div>
          <H2>Variants</H2>
          <Table>
            <thead>
              <tr>
                <td>{' '}</td>
                <td><H3>Normal</H3></td>
                <td><H3>Icon Text</H3></td>
                <td><H3>Outline</H3></td>
                <td><H3>Tags</H3></td>
                <td><H3>Text</H3></td>
                <td><H3>Icon</H3></td>
                <td><H3>Dots</H3></td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><H3>Rest</H3></td>
                <td>
                  <Button size="smaller">Button</Button>
                </td>
                <td>
                  <Button size="normal" width icon>
                    <Pen />
                    Button
                  </Button>
                </td>
                <td><Button size="smaller" variant="outline">Button</Button></td>
                <td><Tag>Button</Tag></td>
                <td><Text>Button</Text></td>
                <td><Icon /></td>
                <td><Dots /></td>
              </tr>
              <tr>
                <td><H3>Hover</H3></td>
                <td><Button size="smaller">Button</Button></td>
                <td>
                  <Button size="normal" width icon>
                    <Pen />
                    Button
                  </Button>
                </td>
                <td><Button size="smaller" variant="outline">Button</Button></td>
                <td><Tag>Button</Tag></td>
                <td><Text>Button</Text></td>
                <td><Icon /></td>
                <td><Dots /></td>
              </tr>
              <tr>
                <td><H3>Pressed</H3></td>
                <td><Button size="smaller">Button</Button></td>
                <td>
                  <Button size="normal" width icon>
                    <Pen />
                    Button
                  </Button>
                </td>
                <td><Button size="smaller" variant="outline">Button</Button></td>
                <td><Tag>Button</Tag></td>
                <td><Text>Button</Text></td>
                <td><Icon /></td>
                <td><Dots /></td>
              </tr>
              <tr>
                <td><H3>Disabled</H3></td>
                <td><Button size="smaller" disabled>Button</Button></td>
                <td>
                  <Button size="normal" width icon disabled>
                    <Pen />
                    Button
                  </Button>
                </td>
                <td><Button size="smaller" variant="outline" disabled>Button</Button></td>
                <td><Tag disabled>Button</Tag></td>
                <td><Text disabled>Button</Text></td>
                <td><Icon disabled /></td>
                <td><Dots disabled /></td>
              </tr>
            </tbody>
          </Table>
        </div>
      </BlocksWrap>
    </ContentWrap>
  </Wrap>
);

export default Buttons;
