import React from "react";
import { Primary } from "../Button/Button.stories";
import { Large } from "../Input/Input.stories";

export default {
  title: "Form/Subscription",
}

export const  PrimarySubscription = () => (
  <div>
    <h2>Subscribe to our Newsletter</h2>
    <form>
      <Large placeholder="Enter your email" />
      <Primary>Subscribe</Primary>
    </form>
  </div>
);

PrimarySubscription.storyName = "Primary Subscription";
