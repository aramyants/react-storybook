import { Button } from '@chakra-ui/react';
import { action, actions } from 'storybook/actions';

export default {
  title: 'Chakra/Button',
  component: Button,
  argTypes: {
    children: {
      control: { type: 'text' },
      description: 'Text for the button',
    },

    colorPalette: {
      control: { type: 'select' },
      options: ['green', 'red', 'blue', 'gray'],
      description: 'Color palette for the button',
    },
  },
};

const Template = (args) => (
  <Button onClick={action('click handler')} {...args} />
);

export const Success = Template.bind({});
Success.args = {
  colorPalette: 'green',
  children: 'Success',
};

export const Danger = (args) => (
  <Button {...actions('onClick', 'onMouseOver')} colorPalette="red" {...args}>
    Danger
  </Button>
);

export const Log = (args) => (
  <Button onClick={() => console.log('Button clicked', import.meta.env.STORYBOOK_THEME)} colorPalette="blue" {...args}>
    Log
  </Button>
);


export const Knobs = {
  title: 'Knobs',
  args: {
    disabled: false,
    onClick: action('knobs-click'),
    colorPalette: 'gray',
    children: 'Knobs Button',
  }
}


