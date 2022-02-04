import React, { useState } from 'react';
import { ReactComponent as PlaneIcon } from '../../icons/airplane-outline.svg';
import { ReactComponent as AlarmIcon } from '../../icons/alarm-outline.svg';
import { ReactComponent as BTIcon } from '../../icons/bluetooth-outline.svg';
import { ReactComponent as PhoneIcon } from '../../icons/call-outline.svg';
import { ReactComponent as CameraIcon } from '../../icons/camera-outline.svg';
import { ReactComponent as ChatIcon } from '../../icons/chatbubble-ellipses-outline.svg';
import { ReactComponent as GameIcon } from '../../icons/game-controller-outline.svg';
import { ReactComponent as VolumeIcon } from '../../icons/volume-low-outline.svg';
import { ReactComponent as WifiIcon } from '../../icons/wifi-outline.svg';
import './NavBar.scss';

export default function NavBar() {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="greyNav">
      <div className={`navigation ${isActive ? 'active' : ''}`} onClick={handleClick} role="button">
        <span style={{ '--i': 0, '--x': -1, '--y': 0 }}>
          <PlaneIcon />
        </span>
        <span style={{ '--i': 1, '--x': 1, '--y': 0 }}>
          <AlarmIcon />
        </span>
        <span style={{ '--i': 2, '--x': 0, '--y': -1 }}>
          <BTIcon />
        </span>
        <span style={{ '--i': 3, '--x': 0, '--y': 1 }}>
          <PhoneIcon />
        </span>
        <span style={{ '--i': 4, '--x': 1, '--y': 1 }}>
          <CameraIcon />
        </span>
        <span style={{ '--i': 5, '--x': -1, '--y': -1 }}>
          <ChatIcon />
        </span>
        <span style={{ '--i': 6, '--x': 0, '--y': 0 }}>
          <GameIcon />
        </span>
        <span style={{ '--i': 7, '--x': -1, '--y': 1 }}>
          <VolumeIcon />
        </span>
        <span style={{ '--i': 8, '--x': 1, '--y': -1 }}>
          <WifiIcon />
        </span>
      </div>
    </div>
  );
}
