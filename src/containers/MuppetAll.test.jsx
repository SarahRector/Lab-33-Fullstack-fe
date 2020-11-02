/* eslint-disable max-len */
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import MuppetAll from './MuppetAll';
import { getMuppets } from '../services/muppetApi';

jest.mock('../services/muppetApi.js');

describe('MuppetAll container', () => {
  it('displays a list of muppets', async() => {
    getMuppets.mockResolvedValue([
      { name: 'Kermit', performer: 'Jim', image: 'test.png' },
      { name: 'Gonzo', performer: 'Ed', image: 'test.png' }
    ]);

    render(<MuppetAll />);

    const muppetList = screen.getByTestId('muppetList');
    return waitFor(() => {
      expect(muppetList).toHaveTextContent('KermitPerformed By: JimGonzoPerformed By: Ed');
    });
  });
});
