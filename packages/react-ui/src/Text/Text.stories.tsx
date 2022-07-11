import React from 'react';
import { ComponentMeta } from '@storybook/react';
import { Text } from './Text';
import { textVariants } from './Text';

export default {
  title: 'UI Components/Text',
  component: Text,
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: Object.keys(textVariants),
      },
    },
  },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = args => <Text {...args}>The Evil Rabbit jumps.</Text>;

export const Primary = Template.bind({});

Primary.args = {};