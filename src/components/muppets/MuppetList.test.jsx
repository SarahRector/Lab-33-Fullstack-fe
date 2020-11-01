import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import MuppetList from './MuppetList';
import { getMuppets } from '../../services/muppetApi';

jest.mock('../../services/muppetApi.js');

const testArray = [
  { name: 'Kermit', performer: 'Jim Henson', image: 'test.png' },
  { name: 'Fozzie', performer: 'Frank Oz', image: 'test2.png' },
  { name: 'Rizzo', performer: 'Steve', image: 'test3.png' }
];

describe('MuppetList component', () => {
  it('renders MuppetList', async() => {
    getMuppets.mockResolvedValue([
      { testArray }
    ]);
    render(<MuppetList
      muppetDetails={testArray} />);

    const muppetList = await screen.findByTestId('muppetList');

    return waitFor(() => {
      expect(muppetList).not.toBeEmptyDOMElement();
    });
  });
});
