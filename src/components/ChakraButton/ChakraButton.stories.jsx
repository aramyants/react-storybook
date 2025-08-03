import React from "react";
import {Button} from '@chakra-ui/react'

export default {
  title: "Chakra/Button",
  component: Button,
}

export const Success = () => (
  <Button colorPalette={"green"}> Success </Button>
);

export const Danger = () => (
  <Button colorPalette={"red"}> Danger </Button>
);

