import React from 'react'
import ReactDOM from 'react-dom'
import List from './List.js'
import renderer from 'react-test-renderer'
import { exportAllDeclaration } from '@babel/types';

describe('List Component', () => {

  // Smoke Test
  it('renders without crashing', () => {
    const div = document.createElement('div');

    ReactDOM.render(<List cards={['a','b']} header="List 1" />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  // Snapshot Test
  it('renders the UI as expected', () => {
    const tree = renderer
      .create(<List cards={['a','b','c','d']} header="List 1" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders the UI as expected with no header prop passed', () => {
    const tree = renderer
      .create(< List cards={['a','b']} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });


});