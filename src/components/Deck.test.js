import React from 'react';
import ReactDOM from 'react-dom';
import Deck from './Deck';
import enzyme from 'enzyme'
import Adapter from "enzyme-adapter-react-16";
enzyme.configure({ adapter: new Adapter() });

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Deck />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('should draw a card when I trigger the draw card handler', () => {
    const component = enzyme.shallow(<Deck/>);
    component.find('#drawButton').simulate('click');
    expect(component.state().pickedCards).toHaveLength(1);
});

