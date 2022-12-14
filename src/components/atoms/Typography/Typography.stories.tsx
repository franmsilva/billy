import { ComponentMeta } from '@storybook/react';
import React, { JSXElementConstructor } from 'react';

import { ETypographyVariant } from '@enums/typography';

import Typography from './Typography';

export default {
  title: 'Atoms/Typography',
} as ComponentMeta<JSXElementConstructor<unknown>>;

const Template = () => (
  <>
    <Typography as="h1" displayAs={ETypographyVariant.H1}>
      Heading 1
    </Typography>
    <Typography as="h2" displayAs={ETypographyVariant.H2}>
      Heading 2
    </Typography>
    <Typography as="h3" displayAs={ETypographyVariant.H3}>
      Heading 3
    </Typography>
    <Typography as="h4" displayAs={ETypographyVariant.H4}>
      Heading 4
    </Typography>
    <Typography as="p" displayAs={ETypographyVariant.Body}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. At illum necessitatibus tempore
      numquam a. Laboriosam, adipisci. Placeat, ab cupiditate amet consequatur eos perspiciatis
      magnam illum hic adipisci expedita harum exercitationem!
    </Typography>
    <Typography as="p" displayAs={ETypographyVariant.BodySm}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo laborum a pariatur inventore
      voluptatibus iste fuga exercitationem, adipisci suscipit blanditiis cupiditate obcaecati? Nam
      unde perspiciatis aut incidunt ea quos laboriosam.
    </Typography>
  </>
);

export const Default = Template.bind({});
