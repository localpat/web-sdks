import React from 'react';
import { selectLocalPeerID, useHMSActions, useHMSStore } from '@100mslive/react-sdk';
import { Tooltip } from '../../../../Tooltip';
import IconButton from '../../../IconButton';

const Int2EnButton = () => {
  const hmsActions = useHMSActions();
  const localPeerId = useHMSStore(selectLocalPeerID);
  const changeRole = () => {
    hmsActions.changeRoleOfPeer(localPeerId, 'terp-en', true);
  };

  return (
    <Tooltip key="terp-en" title="Interpreting to English">
      <IconButton onClick={changeRole}>
        <div className="text-xs text-slate-200 rounded-lg active:bg-red-600">EN</div>
      </IconButton>
    </Tooltip>
  );
};
export default Int2EnButton;
