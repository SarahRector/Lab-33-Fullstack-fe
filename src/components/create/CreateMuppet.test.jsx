import React from 'react';
import { render, cleanup } from '@testing-library/react';
import CreateMuppet from './CreateMuppet';

describe('CreateMuppet component', () => {
  afterEach(() => cleanup());
  it('renders CreateMuppet', () => {
    const { asFragment } = render(<CreateMuppet
      name="Kermit"
      performer="Ted"
      image="test.png"
      onChange={() => {}}
      onSubmit={() => {}} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
