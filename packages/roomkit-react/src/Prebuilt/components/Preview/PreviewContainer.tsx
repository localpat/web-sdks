import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useSearchParam } from 'react-use';
import { Flex } from '../../..';
import { useHMSPrebuiltContext } from '../../AppContext';
import { useRoomLayout } from '../../provider/roomLayoutProvider';
// @ts-ignore: No implicit Any
import FullPageProgress from '../FullPageProgress';
// @ts-ignore: No implicit Any
import PreviewJoin from './PreviewJoin';
import { useRoomLayoutPreviewScreen } from '../../provider/roomLayoutProvider/hooks/useRoomLayoutScreen';
// @ts-ignore: No implicit Any
import { useAuthToken } from '../AppData/useUISettings';
// @ts-ignore: No implicit Any
import { QUERY_PARAM_PREVIEW_AS_ROLE } from '../../common/constants';

const PreviewContainer = () => {
  const navigate = useNavigate();
  const { isPreviewScreenEnabled } = useRoomLayoutPreviewScreen();
  const skipPreview = !isPreviewScreenEnabled;
  const previewAsRole = useSearchParam(QUERY_PARAM_PREVIEW_AS_ROLE);
  const { userName } = useHMSPrebuiltContext();
  const initialName = userName || (skipPreview ? 'Beam' : '');
  const { roomId: urlRoomId, role: userRole } = useParams(); // from the url
  const authToken = useAuthToken();
  const roomLayout = useRoomLayout();
  const { preview_header: previewHeader = {} } = roomLayout?.screens?.preview?.default?.elements || {};

  const onJoin = () => {
    let meetingURL = `/meeting/${urlRoomId}`;
    if (userRole) {
      meetingURL += `/${userRole}`;
    }
    navigate(meetingURL);
  };
  return (
    <Flex direction="column" css={{ size: '100%' }}>
      <Flex
        css={{ flex: '1 1 0', position: 'relative', overflowY: 'auto', color: '$primary_default' }}
        justify="center"
        align="center"
      >
        {authToken && Object.keys(previewHeader).length > 0 ? (
          <PreviewJoin
            initialName={initialName}
            skipPreview={skipPreview}
            asRole={previewAsRole ?? undefined}
            onJoin={onJoin}
          />
        ) : (
          <FullPageProgress />
        )}
      </Flex>
    </Flex>
  );
};

export default PreviewContainer;