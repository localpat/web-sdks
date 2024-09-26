import React from 'react';
import { selectLocalPeerID, useHMSActions, useHMSStore } from '@100mslive/react-sdk';
import { Tooltip } from '../../../Tooltip';
import IconButton from '../../IconButton';

const Int2EnButton = () => {
  const hmsActions = useHMSActions();
  const localPeerId = useHMSStore(selectLocalPeerID);
  const changeRole = () => {
    hmsActions.changeRoleOfPeer(localPeerId, 'interpreter-en', true);
  };

  return (
    <Tooltip key="int2en" title="Interpreting to English">
      <IconButton onClick={changeRole}>
        <div className="text-xs text-slate-200 rounded-lg">EN</div>
      </IconButton>
    </Tooltip>
  );
};
export default Int2EnButton;
