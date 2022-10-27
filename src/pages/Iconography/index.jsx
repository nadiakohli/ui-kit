import React from 'react';

// Icons
import { ReactComponent as Alarm } from 'assets/icons/alarm.svg';
import { ReactComponent as Arrow } from 'assets/icons/arrow.svg';
import { ReactComponent as Calendar } from 'assets/icons/calendar.svg';
import { ReactComponent as CkeckboxChecked } from 'assets/icons/checkboxChecked.svg';
import { ReactComponent as Checkbox } from 'assets/icons/checkbox.svg';
import { ReactComponent as CheckboxCheckedSolid } from 'assets/icons/checkboxCheckedSolid.svg';
import { ReactComponent as CkeckboxSquare } from 'assets/icons/checkboxSquare.svg';
import { ReactComponent as CircleCheckOutline } from 'assets/icons/circleCheckOutline.svg';
import { ReactComponent as CircleCheck } from 'assets/icons/circleCheck.svg';
import { ReactComponent as CloseBig } from 'assets/icons/closeBig.svg';
import { ReactComponent as Cursor } from 'assets/icons/cursor.svg';
import { ReactComponent as Error } from 'assets/icons/error.svg';
import { ReactComponent as ErrorOutline } from 'assets/icons/errorOutline.svg';
import { ReactComponent as Filter } from 'assets/icons/filter.svg';
import { ReactComponent as FilterOutline } from 'assets/icons/filterOutline.svg';
import { ReactComponent as HelpCircleSolid } from 'assets/icons/helpCircleSolid.svg';
import { ReactComponent as HelpCircleOutline } from 'assets/icons/helpCircleOutline.svg';
import { ReactComponent as HomeAltFill } from 'assets/icons/homeAltFill.svg';
import { ReactComponent as HomeAltOutline } from 'assets/icons/homeAltOutline.svg';
import { ReactComponent as Mail } from 'assets/icons/mail.svg';
import { ReactComponent as MessageWritting } from 'assets/icons/messageWritting.svg';
import { ReactComponent as Notification } from 'assets/icons/notification.svg';
import { ReactComponent as Settings } from 'assets/icons/settings.svg';
import { ReactComponent as SettingsFilled } from 'assets/icons/settingsFilled.svg';
import { ReactComponent as Slider } from 'assets/icons/slider03.svg';
import { ReactComponent as TrashFull } from 'assets/icons/trashFull.svg';
import { ReactComponent as UserSquare } from 'assets/icons/userSquare.svg';
import { ReactComponent as Vector } from 'assets/icons/vector.svg';
import { ReactComponent as Warning } from 'assets/icons/warning.svg';
import { ReactComponent as WarningOutline } from 'assets/icons/warningOutline.svg';

// Styles
import {
  Wrap,
  ContentWrap,
  Title,
  H2,
  H3,
  BlockWrap,
  IconsWrap,
  IconsBlockWrap,
} from './styled';

const Iconography = () => (
  <Wrap>
    <ContentWrap>
      <Title>
        <span>03. </span>
        Iconography
      </Title>
      <BlockWrap>
        <H2>Icon Sets</H2>
        <IconsWrap>
          <IconsBlockWrap>
            <H3>Outlined icons</H3>
            <div>
              <Alarm />
              <Calendar />
              <MessageWritting />
              <Mail />
              <UserSquare />
              <WarningOutline />
              <ErrorOutline />
              <HelpCircleOutline />
              <TrashFull />
              <FilterOutline />
            </div>
            <div>
              <CircleCheckOutline />
              <Settings />
              <CkeckboxChecked />
              <CkeckboxSquare />
              <Checkbox />
              <Arrow />
              <Vector />
              <CloseBig />
              <HomeAltOutline />
              <Slider />
            </div>
          </IconsBlockWrap>
          <IconsBlockWrap>
            <H3>Filled icons</H3>
            <div>
              <Error />
              <CheckboxCheckedSolid />
              <Cursor />
              <HomeAltFill />
              <Warning />
              <CircleCheck />
              <SettingsFilled />
              <Notification />
              <Filter />
              <HelpCircleSolid />
            </div>
          </IconsBlockWrap>
        </IconsWrap>
      </BlockWrap>
    </ContentWrap>
  </Wrap>
);

export default Iconography;
