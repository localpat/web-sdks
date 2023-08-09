import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { HMSPrebuilt } from '.';

export default {
  title: 'UI Components/Prebuilt',
  component: HMSPrebuilt,
  argTypes: {
    roomCode: { control: { type: 'text' }, defaultValue: 'cuf-wywo-trf' },
    logo: { control: { type: 'object' }, defaultValue: undefined },
    typography: { control: { type: 'object' }, defaultValue: 'Roboto' },
  },
} as Meta<typeof HMSPrebuilt>;

const PrebuiltRoomCodeStory: StoryFn<typeof HMSPrebuilt> = ({ roomCode = '', logo, themes, typography, options }) => {
  return <HMSPrebuilt roomCode={roomCode} logo={logo} options={options} themes={themes} typography={typography} />;
};

export const Example = PrebuiltRoomCodeStory.bind({});
Example.args = {
  roomCode: 'cuf-wywo-trf',
  options: {
    endpoints: {
      roomLayout: 'https://demo8271564.mockable.io/v2/layouts/ui',
    },
  },
  typography: {
    font_family: 'Roboto',
  },
};
