import React from 'react';
import { selectLocalPeerID, selectLocalPeerRole, useHMSActions, useHMSStore } from '@100mslive/react-sdk';
import { Tooltip } from '../../../../Tooltip';
import IconButton from '../../../IconButton';

const Int2EnButton = () => {
  const hmsActions = useHMSActions();
  const localPeerId = useHMSStore(selectLocalPeerID);
  const changeRole = () => {
    hmsActions.changeRoleOfPeer(localPeerId, 'terp-en', true);
  };
  const role = useHMSStore(selectLocalPeerRole);
  return (
    <Tooltip key="terp-en" title="Interpreting to English">
      <IconButton onClick={changeRole}>
        {role?.name === 'terp-fr' ? <div className="text-xs text-slate-200 rounded-lg">EN</div> : null}
        {role?.name === 'terp-en' ? <div className="text-xs text-slate-200 rounded-lg bg-red-600">EN</div> : null}
      </IconButton>
    </Tooltip>
  );
};
export default Int2EnButton;
