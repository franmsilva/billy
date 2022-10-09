import { ComponentMeta } from '@storybook/react';
import React, { JSXElementConstructor } from 'react';

import { Heading1, Heading2, Heading3, Heading4, Body1, Body2 } from './Typography.styled';

export default {
  title: 'Atoms/Typography',
} as ComponentMeta<JSXElementConstructor<unknown>>;

const Template = () => (
  <>
    <Heading1>Heading 1</Heading1>
    <Heading2>Heading 2</Heading2>
    <Heading3>Heading 3</Heading3>
    <Heading4>Heading 4</Heading4>
    <Body1>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. At illum necessitatibus tempore
      numquam a. Laboriosam, adipisci. Placeat, ab cupiditate amet consequatur eos perspiciatis
      magnam illum hic adipisci expedita harum exercitationem!
    </Body1>
    <Body2>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo laborum a pariatur inventore
      voluptatibus iste fuga exercitationem, adipisci suscipit blanditiis cupiditate obcaecati? Nam
      unde perspiciatis aut incidunt ea quos laboriosam.
    </Body2>
  </>
);

export const Default = Template.bind({});
