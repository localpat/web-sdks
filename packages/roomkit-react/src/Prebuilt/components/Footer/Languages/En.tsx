import React from 'react';
import { selectPeers, useHMSActions, useHMSStore } from '@100mslive/react-sdk';
import { Tooltip } from '../../../../Tooltip';
import IconButton from '../../../IconButton';

const EnButton = () => {
  const peers = useHMSStore(selectPeers);
  const hmsActions = useHMSActions();
  const changeVolume = () => {
    for (const peer of peers) {
      if (
        peer.roleName === 'host' ||
        peer.roleName === 'guest' ||
        (peer.roleName === 'interpreter-fr' && peer.audioTrack)
      ) {
        hmsActions.setVolume(0, peer.audioTrack);
      }
    }
  };
  return (
    <Tooltip title="English">
      <IconButton onClick={changeVolume}>
        <div className="text-xs text-slate-200 rounded-lg">EN</div>
      </IconButton>
    </Tooltip>
  );
};
export default EnButton;
