import React from 'react';
import {ATooltip} from '../../../dist/collection/components/a-tooltip/a-tooltip';

export default {
  title: 'Demo/Tooltip',
  component: ATooltip,
  argTypes: {
    label: {
      type: 'string',
      description: 'The label',
    },
  },
};

const defaultArgs = {
  label: "Label",
};

const Template = args => {
  return <a-tooltip {...args}>
    <button class="px-5 py-3 bg-pink-400">Click</button>
  </a-tooltip>;
};

export const Default = Template.bind({});
Default.args = {...defaultArgs};
