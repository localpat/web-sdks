import React from 'react';
import { selectLocalPeerID, useHMSActions, useHMSStore } from '@100mslive/react-sdk';
import { Tooltip } from '../../../Tooltip';
import IconButton from '../../IconButton';

const Int2FrButton = () => {
  const hmsActions = useHMSActions();
  const localPeerId = useHMSStore(selectLocalPeerID);
  const changeRole = () => {
    hmsActions.changeRoleOfPeer(localPeerId, 'interpreter-fr', true);
  };

  return (
    <Tooltip key="int2fr" title="Interprétation vers le français">
      <IconButton onClick={changeRole} className="w-auto">
        <div className="text-xs text-slate-200 rounded-lg">FR</div>
      </IconButton>
    </Tooltip>
  );
};
export default Int2FrButton;
