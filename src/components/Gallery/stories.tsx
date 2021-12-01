import { Story, Meta } from '@storybook/react/types-6-0';

import Gallery from '.';

export default {
  title: 'Gallery',
  component: Gallery
} as Meta;

export const ChildrenComponent = () => <h1>Hello World</h1>;

export const Basic: Story = (args) => (
  <Gallery {...args}>
    <ChildrenComponent />
  </Gallery>
);
