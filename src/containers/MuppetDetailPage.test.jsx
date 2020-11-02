import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import MuppetDetailPage from './MuppetDetailPage';
import { getMuppetById } from '../services/muppetApi';

jest.mock('../services/muppetApi.js');

describe('MuppetDetailPage container', () => {
  it('displays muppet details', async() => {
    getMuppetById.mockResolvedValue(
      { name: 'Kermit', performer: 'Jim Henson', image: 'test.png' }
    );

    render(<MuppetDetailPage
      match={{
        params: { muppetName: 'Kermit' }
      }}
    />);

    const muppetDetail = await screen.findByTestId('details');
    return waitFor(() => {
      expect(muppetDetail).not.toBeEmptyDOMElement();
    });
  });
});
