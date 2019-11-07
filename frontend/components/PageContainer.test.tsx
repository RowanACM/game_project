import React from 'react';
import Enzyme from 'enzyme';
import PageContainer from './PageContainer';

it('renders child', async () => {
  const wrapper = Enzyme.shallow(
    <PageContainer name={'foo'}>
      <p>bar</p>
    </PageContainer>,
  );
  const container = wrapper.find('Container');
  expect(container.text()).toContain('bar');
});
