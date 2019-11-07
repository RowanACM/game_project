import React from 'react';
import Header from './Header';
import Enzyme from 'enzyme';

it('renders nav bar', async () => {
  const wrapper = Enzyme.shallow(<Header active={'Play'} />);
  const container = wrapper.find('Nav');
  const navLinks = container.find('NavLink');
  const home = navLinks.at(0);

  expect(home.text()).toContain('Play');
  expect(home.prop('active')).toBeTruthy();
});
