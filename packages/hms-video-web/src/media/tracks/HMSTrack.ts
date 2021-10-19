import HMSMediaStream from '../streams/HMSMediaStream';
import { HMSTrackType } from './HMSTrackType';

export type HMSTrackSource = 'regular' | 'screen' | 'plugin' | 'audioplaylist' | 'videoplaylist' | string;

export abstract class HMSTrack {
  /**
   * @internal
   */
  readonly stream: HMSMediaStream;
  source?: HMSTrackSource;
  peerId?: string;

  /** The native mediastream track, for local, this changes on mute/unmute(for video),
   * and on device change.
   * @internal */
  nativeTrack: MediaStreamTrack;

  /**
   * Firefox doesn't respect the track id as sent from the backend when calling peerconnection.ontrack callback. This
   * breaks correlation of future track updates from backend. So we're storing the sdp track id as present in the
   * original offer along with the track as well and will let this override the native track id for any correlation
   * purpose.
   * This applies for remote tracks only.
   * @internal */
  private sdpTrackId?: string;

  /**
   * @internal
   * The local track id is changed on mute/unmute or when device id changes, this is abstracted as an internal
   * detail of HMSTrack and the variable is used for this enacapsulation where the first track id is remembered
   * and treated as the fixed track id for this HMSTrack. This simplifies things for the user of the sdk who
   * do not have to worry about changing track IDs.
   * This applies for local tracks only.
   */
  private firstTrackId?: string;

  abstract readonly type: HMSTrackType;

  public get enabled(): boolean {
    return this.nativeTrack.enabled;
  }

  /**
   * initialTrackId => encapsulates change in local track ids
   * sdpTrackId => fixes remote track updates correlation on firefox
   */
  public get trackId(): string {
    return this.firstTrackId || this.sdpTrackId || this.nativeTrack.id;
  }

  getMediaTrackSettings(): MediaTrackSettings {
    return this.nativeTrack.getSettings();
  }

  async setEnabled(value: boolean): Promise<void> {
    this.nativeTrack.enabled = value;
  }

  protected constructor(stream: HMSMediaStream, track: MediaStreamTrack, source?: HMSTrackSource) {
    this.stream = stream;
    this.nativeTrack = track;
    this.source = source;
  }

  /**
   * @internal
   */
  setSdpTrackId(sdpTrackId: string) {
    this.sdpTrackId = sdpTrackId;
  }

  /**
   * @internal
   */
  protected setFirstTrackId(trackId: string) {
    this.firstTrackId = trackId;
  }

  /**
   * @internal
   * take care of -
   * 1. https://bugs.chromium.org/p/chromium/issues/detail?id=1232649
   * 2. stopping any tracks
   * 3. plugins related cleanups and stopping
   */
  cleanup() {
    this.nativeTrack?.stop();
  }
}
