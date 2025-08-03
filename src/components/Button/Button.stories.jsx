import React from "react";
import Button from "./Button";
// import Center from "../Center/Center";

export default {
  title: "Form/Button",
  component: Button,
  // args: {
  //   children: "Click Me",
  // },
  // decorators: [
  //   story => <Center>{story()}</Center>,
  // ]
}

export const Primary = () => <Button variant="primary">Primary Button</Button>;
export const Secondary = () => <Button variant="secondary">Secondary Button</Button>;
export const Danger = () => <Button variant="danger">Danger Button</Button>;
export const Success = () => <Button variant="success">Success Button</Button>;

// export const Template = args => <Button {...args} />;

// export const PrimaryA = Template.bind({});

// PrimaryA.args = {
//   variant: "primary",
//   children: "Primary Button",
// };
// PrimaryA.storyName = "Primary Button";


// export const SecondaryA = Template.bind({});
// SecondaryA.args = {
//   variant: "secondary",
//   // children: "Secondary Button",
// };
// SecondaryA.storyName = "Secondary Button";

// export const LongPrimaryA = Template.bind({});
// LongPrimaryA.args = {
//   ...PrimaryA.args,
//   children: "This is a long primary button text that should wrap to the next line if necessary",
// };
