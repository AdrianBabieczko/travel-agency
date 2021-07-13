import React from 'react';
import { shallow } from 'enzyme';
import TripSummary from './TripSummary';

describe('Component TripSummary', () => {
  it('should throw error without required props', () => {
    const tagItems = ['test1', 'test2', 'test3'];

    expect(() => shallow(<TripSummary tags={tagItems} />)).toBeTruthy();
  });
});
