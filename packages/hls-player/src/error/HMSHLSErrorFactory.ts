import { HMSHLSException } from './HMSHLSException';
import { HMSHLSExceptionEvents } from '../utilies/constants';

export type HMSHLSErrorDetails = {
  details: string;
  fatal?: boolean;
};
export const HMSHLSErrorFactory = {
  HLSNetworkError: {
    manifestLoadError(data: HMSHLSErrorDetails): HMSHLSException {
      return new HMSHLSException(
        HMSHLSExceptionEvents.MANIFEST_LOAD_ERROR,
        data.details,
        'Unable to load manifest file',
        data.fatal,
      );
    },
    manifestParsingError(data: HMSHLSErrorDetails): HMSHLSException {
      return new HMSHLSException(
        HMSHLSExceptionEvents.MANIFEST_PARSING_ERROR,
        data.details,
        'Unable to parse manifest file',
        data.fatal,
      );
    },
    levelLoadError(data: HMSHLSErrorDetails): HMSHLSException {
      return new HMSHLSException(
        HMSHLSExceptionEvents.LEVEL_LOAD_ERROR,
        data.details,
        'Unable to load levels',
        data.fatal,
      );
    },
  },
  HLSMediaError: {
    manifestIncompatibleCodecsError(data: HMSHLSErrorDetails): HMSHLSException {
      return new HMSHLSException(
        HMSHLSExceptionEvents.MANIFEST_INCOMPATIBLE_CODECS_ERROR,
        data.details,
        'Incompatible manifest codecs',
        data.fatal,
      );
    },
    fragDecryptError(data: HMSHLSErrorDetails): HMSHLSException {
      return new HMSHLSException(
        HMSHLSExceptionEvents.FRAG_DECRYPT_ERROR,
        data.details,
        'Unable to decrypt fragment',
        data.fatal,
      );
    },
    bufferIncompatibleCodecsError(data: HMSHLSErrorDetails): HMSHLSException {
      return new HMSHLSException(
        HMSHLSExceptionEvents.BUFFER_INCOMPATIBLE_CODECS_ERROR,
        data.details,
        'Incompatible buffer codecs',
        data.fatal,
      );
    },
    videoElementNotFound(): HMSHLSException {
      return new HMSHLSException(
        HMSHLSExceptionEvents.VIDEO_ELEMENT_NOT_FOUND,
        'Video element not found',
        'Video element not found',
        false,
      );
    },
    autoplayFailed(): HMSHLSException {
      return new HMSHLSException(
        HMSHLSExceptionEvents.HLS_AUTOPLAY_FAILED,
        'Failed to autoplay',
        'Failed to autoplay',
        false,
      );
    },
    hlsURLNotFound(msg?: string): HMSHLSException {
      return new HMSHLSException(
        HMSHLSExceptionEvents.HLS_URL_NOT_FOUND,
        msg || 'hls url not found',
        msg || 'hls url not found',
        true,
      );
    },
  },
  UnknownError: (data: HMSHLSErrorDetails): HMSHLSException => {
    return new HMSHLSException(HMSHLSExceptionEvents.UNKNOWN_ERROR, data.details, 'Unknown error', data.fatal);
  },
};
