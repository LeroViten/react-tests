import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
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
          <NavLink to={'/cards'}>
            <BTIcon />
          </NavLink>
        </li>
        <li style={{ '--i': 1 }}>
          <NavLink to={'/cards'}>
            <AlarmIcon />
          </NavLink>
        </li>
        <li style={{ '--i': 2 }}>
          <NavLink to={'/cards'}>
            <WifiIcon />
          </NavLink>
        </li>
        <li style={{ '--i': 3 }}>
          <NavLink to={'/cards'}>
            <PhoneIcon />
          </NavLink>
        </li>
        <li style={{ '--i': 4 }}>
          <NavLink to={'/cards'}>
            <PlaneIcon />
          </NavLink>
        </li>
        <li style={{ '--i': 5 }}>
          <NavLink to={'/cards'}>
            <GameIcon />
          </NavLink>
        </li>
        <li style={{ '--i': 6 }}>
          <NavLink to={'/cards'}>
            <CameraIcon />
          </NavLink>
        </li>
        <li style={{ '--i': 7 }}>
          <NavLink to={'/cards'}>
            <ChatIcon />
          </NavLink>
        </li>
      </div>
    </div>
  );
}
