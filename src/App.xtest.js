import React from 'react';
import { shallow } from 'enzyme';
import { mount } from 'enzyme';
import App from './App';

it('renders without crashing', () => {
  mount(<App />);
});
