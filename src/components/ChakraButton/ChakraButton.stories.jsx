import React from "react";
import {Button} from '@chakra-ui/react'

export default {
  title: "Chakra/Button",
  component: Button,
  argTypes: {
    onClick: { action: "clicked" },
    colorPalette: {
      control: { type: "select" },
      options: ["green", "red", "blue", "gray"],
      description: "Color palette for the button",
    },
  },
}

const Template = args => <Button {...args} />;

export const Success = Template.bind({});
Success.args = {
  colorPalette: "green",
  children: "Success",
};


export const Danger = Template.bind({});
Danger.args = {
  colorPalette: "red",
  children: "Danger",
};


