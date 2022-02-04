import React, { useState } from 'react';
import { ReactComponent as PlaneIcon } from '../../icons/airplane-outline.svg';
import { ReactComponent as AddIcon } from '../../icons/add-outline.svg';
import { ReactComponent as AlarmIcon } from '../../icons/alarm-outline.svg';
import { ReactComponent as BTIcon } from '../../icons/bluetooth-outline.svg';
import { ReactComponent as PhoneIcon } from '../../icons/call-outline.svg';
import { ReactComponent as CameraIcon } from '../../icons/camera-outline.svg';
import { ReactComponent as ChatIcon } from '../../icons/chatbubble-ellipses-outline.svg';
import { ReactComponent as GameIcon } from '../../icons/game-controller-outline.svg';
import { ReactComponent as WifiIcon } from '../../icons/wifi-outline.svg';
import './AnotherNavBar.scss';

export default function AnotherNavBar() {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };
  return (
    <div className="whiteBar">
      <div className={`menu ${isActive ? 'active' : ''}`} onClick={handleClick}>
        <div className="toggle">
          <AddIcon />
        </div>
        <li style={{ '--i': 0 }}>
          <a href="https://www.google.com/" target="_blanc">
            <BTIcon />
          </a>
        </li>
        <li style={{ '--i': 1 }}>
          <a href="https://www.google.com/" target="_blanc">
            <AlarmIcon />
          </a>
        </li>
        <li style={{ '--i': 2 }}>
          <a href="https://www.google.com/" target="_blanc">
            <WifiIcon />
          </a>
        </li>
        <li style={{ '--i': 3 }}>
          <a href="https://www.google.com/" target="_blanc">
            <PhoneIcon />
          </a>
        </li>
        <li style={{ '--i': 4 }}>
          <a href="https://www.google.com/" target="_blanc">
            <PlaneIcon />
          </a>
        </li>
        <li style={{ '--i': 5 }}>
          <a href="https://www.google.com/" target="_blanc">
            <GameIcon />
          </a>
        </li>
        <li style={{ '--i': 6 }}>
          <a href="https://www.google.com/" target="_blanc">
            <CameraIcon />
          </a>
        </li>
        <li style={{ '--i': 7 }}>
          <a href="https://www.google.com/" target="_blanc">
            <ChatIcon />
          </a>
        </li>
      </div>
    </div>
  );
}
