import React from 'react';

import Transaction from './index';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Transaction',
  component: Transaction,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Transaction {...args} />;

export const Income = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Income.args = {
//   primary: true,
    transaction: {
        label: "some income",
        value: 23,
    }
};


