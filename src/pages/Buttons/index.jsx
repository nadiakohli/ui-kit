import React from 'react';

// Components
import Button from 'components/common/Buttons/Button';
import Tags from 'components/common/Buttons/Tags';
import Text from 'components/common/Buttons/Text';
import Icon from 'components/common/Buttons/Icon';
import Dots from 'components/common/Buttons/Dots';

// Icons
import { ReactComponent as Pen } from 'assets/images/svg/pen.svg';

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

const Buttons = () => {
  // const ref = useRef();
  // const [inputValue, setInputValue] = useState('');
  // console.log(inputValue);
  // const handleKeyPress = () => {
  //   if (ref.current.disabled) {
  //     console.log('all good');
  //   }
  // };
  console.log('hi');
  return (
    <Wrap>
      <ContentWrap>
        <Title>
          <span>05. </span>
          Buttons
        </Title>
        {/* <input
          type="text"
          placeholder="type something..."
          value={inputValue}
          onChange={(e) => setInputValue(e.currentTarget.value)}
        /> */}
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
              <Button type="small">Button sample</Button>
            </ButtonWrap>
            <ButtonWrap>
              <H3>Normall</H3>
              <Button>Button sample</Button>
            </ButtonWrap>
            <ButtonWrap>
              <H3>Medium</H3>
              <Button type="medium">Button sample</Button>
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
                    <Button type="normal">Button</Button>
                  </td>
                  <td>
                    <Button type="iconText">
                      <Pen />
                      Button
                    </Button>
                  </td>
                  <td><Button type="outline">Button</Button></td>
                  <td><Tags text="Button" /></td>
                  <td><Text text="Button" /></td>
                  <td><Icon /></td>
                  <td><Dots /></td>
                </tr>
                <tr>
                  <td><H3>Hover</H3></td>
                  <td><Button type="normal">Button</Button></td>
                  <td>
                    <Button type="iconText">
                      <Pen />
                      Button
                    </Button>
                  </td>
                  <td><Button type="outline">Button</Button></td>
                  <td><Tags text="Button" /></td>
                  <td><Text text="Button" /></td>
                  <td><Icon /></td>
                  <td><Dots /></td>
                </tr>
                <tr>
                  <td><H3>Pressed</H3></td>
                  <td><Button type="normal">Button</Button></td>
                  <td>
                    <Button type="iconText">
                      <Pen />
                      Button
                    </Button>
                  </td>
                  <td><Button type="outline">Button</Button></td>
                  <td><Tags text="Button" /></td>
                  <td><Text text="Button" /></td>
                  <td><Icon /></td>
                  <td><Dots /></td>
                </tr>
                <tr>
                  <td><H3>Disabled</H3></td>
                  <td><Button type="normal" disabled>Button</Button></td>
                  <td>
                    <Button type="iconText" disabled>
                      <Pen />
                      Button
                    </Button>
                  </td>
                  <td><Button type="outline" disabled>Button</Button></td>
                  <td><Tags text="Button" disabled /></td>
                  <td><Text text="Button" disabled /></td>
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
};

export default Buttons;
