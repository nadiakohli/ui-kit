import React from 'react';

// Icons
import { ReactComponent as Alarm } from 'assets/images/svg/alarm.svg';
import { ReactComponent as Arrow } from 'assets/images/svg/arrow.svg';
import { ReactComponent as Calendar } from 'assets/images/svg/calendar.svg';
import { ReactComponent as CkeckboxChecked } from 'assets/images/svg/checkboxChecked.svg';
import { ReactComponent as Checkbox } from 'assets/images/svg/checkbox.svg';
import { ReactComponent as CheckboxCheckedSolid } from 'assets/images/svg/checkboxCheckedSolid.svg';
import { ReactComponent as CkeckboxSquare } from 'assets/images/svg/checkboxSquare.svg';
import { ReactComponent as CircleCheckOutline } from 'assets/images/svg/circleCheckOutline.svg';
import { ReactComponent as CircleCheck } from 'assets/images/svg/circleCheck.svg';
import { ReactComponent as CloseBig } from 'assets/images/svg/closeBig.svg';
import { ReactComponent as Cursor } from 'assets/images/svg/cursor.svg';
import { ReactComponent as Error } from 'assets/images/svg/error.svg';
import { ReactComponent as ErrorOutline } from 'assets/images/svg/errorOutline.svg';
import { ReactComponent as Filter } from 'assets/images/svg/filter.svg';
import { ReactComponent as FilterOutline } from 'assets/images/svg/filterOutline.svg';
import { ReactComponent as HelpCircleSolid } from 'assets/images/svg/helpCircleSolid.svg';
import { ReactComponent as HelpCircleOutline } from 'assets/images/svg/helpCircleOutline.svg';
import { ReactComponent as HomeAltFill } from 'assets/images/svg/homeAltFill.svg';
import { ReactComponent as HomeAltOutline } from 'assets/images/svg/homeAltOutline.svg';
import { ReactComponent as Mail } from 'assets/images/svg/mail.svg';
import { ReactComponent as MessageWritting } from 'assets/images/svg/messageWritting.svg';
import { ReactComponent as Notification } from 'assets/images/svg/notification.svg';
import { ReactComponent as Settings } from 'assets/images/svg/settings.svg';
import { ReactComponent as SettingsFilled } from 'assets/images/svg/settingsFilled.svg';
import { ReactComponent as Slider } from 'assets/images/svg/slider03.svg';
import { ReactComponent as TrashFull } from 'assets/images/svg/trashFull.svg';
import { ReactComponent as UserSquare } from 'assets/images/svg/userSquare.svg';
import { ReactComponent as Vector } from 'assets/images/svg/vector.svg';
import { ReactComponent as Warning } from 'assets/images/svg/warning.svg';
import { ReactComponent as WarningOutline } from 'assets/images/svg/warningOutline.svg';

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
        <span>03.</span>
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
