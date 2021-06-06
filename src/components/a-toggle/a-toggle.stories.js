import React from 'react';
import {AToggle} from '../../../dist/collection/components/a-toggle/a-toggle';

export default {
  title: 'Demo/Toggle',
  component: AToggle,
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
  return <a-toggle {...args} checked={false}/>;
};

export const Default = Template.bind({});
Default.args = {...defaultArgs};
