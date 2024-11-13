// Main conference sound button
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
        (peer.roleName === 'interpreter-fr' && peer.audioTrack) ||
        (peer.roleName === 'interpreter-fr' && peer.audioTrack)
      ) {
        hmsActions.setVolume(0, peer.audioTrack);
      } else if ((peer.roleName === 'host' && peer.audioTrack) || (peer.roleName === 'guest' && peer.audioTrack)) {
        hmsActions.setVolume(100, peer.audioTrack);
      }
    }
  };
  return (
    <Tooltip title="Floor Sound">
      <IconButton onClick={changeVolume}>
        <div className="text-xs text-slate-200 rounded-lg">Floor</div>
      </IconButton>
    </Tooltip>
  );
};
export default EnButton;
