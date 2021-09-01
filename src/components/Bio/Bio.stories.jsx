import React from 'react';

import Bio from './Bio';

const BioStories = {
  title: 'Components/Bio',
  component: Bio,
};

const Template = () => (
  <Bio
    headshot="https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png"
    name="Paul Coffman Jr."
    tagline="Web Developer"
    role="Full stack engineer, Web Designer"
  />
);

export const Default = Template.bind({});

export default BioStories;
