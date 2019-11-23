import React from 'react';
import Footer from './Footer';
import Enzyme from 'enzyme';

it('renders footer', async () => {
  const wrapper = Enzyme.shallow(<Footer />);
  expect(wrapper.text()).toContain('Rowan Association for Computing Machinery');
});
