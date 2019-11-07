import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import PageContainer from './PageContainer';

afterEach(cleanup);

it('renders child', async () => {
  const wrapper = render(
    <PageContainer name={'foo'}>
      <p>bar</p>
    </PageContainer>,
  );
  const container = await wrapper.findByTestId('container');
  expect(container.children.length).toEqual(1);
  const child = container.firstChild;
  expect(child).toHaveTextContent('bar');
});
