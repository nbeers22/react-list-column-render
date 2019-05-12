import React from 'react'
import ReactDOM from 'react-dom'
import Card from './Card.js'
import renderer from 'react-test-renderer'

describe('Card Component', () => {
  // Smoke Test
  it('renders without crashing', () => {
    const div = document.createElement('div');

    ReactDOM.render(<Card />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  // Snapshot Test
  it('renders the UI as expected', () => {
    const tree = renderer
      .create(<Card header="Header 1" content="Content 1" />)
      .toJSON();
      expect(tree).toMatchSnapshot();
  });
  
  
  it('renders the UI as expected with no props passed in', () => {
    const tree = renderer
      .create(<Card />)
      .toJSON();
      expect(tree).toMatchSnapshot();
  });
});