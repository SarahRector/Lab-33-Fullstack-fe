import React from 'react';
import { render, cleanup } from '@testing-library/react';
import MuppetDetail from './MuppetDetail';

describe('MuppetDetail component', () => {
  afterEach(() => cleanup());
  it('renders MuppetDetail', () => {
    const { asFragment } = render(<MuppetDetail
      name="Kermit"
      performer="Jim Henson"
      image="test.png" />);
    expect(asFragment()).toMatchSnapshot();
  });
});
