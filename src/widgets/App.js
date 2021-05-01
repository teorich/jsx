import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Translate from './components/Translate';
import Dropdown from './components/Dropdown';
import Route from './components/Route';
import Header from './components/Header';

const items = [
  {
    title: 'What is React?',
    content: 'React is a front end javascript framework',
  },
  {
    title: 'why use React?',
    content: 'React is a favorite JS library among engineers',
  },
  {
    title: 'How do you use React?',
    content: 'You use React by creating components',
  },
];

const options = [
  {
    label: 'This is Red',
    value: 'red',
  },
  {
    label: 'This is Gren',
    value: 'green',
  },
];

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const [selected, setSelected] = useState('');

  return (
    <div className="ui container">
      <Header />
      <Route path="/">
        <Accordion items={items} />
      </Route>
      <Route path="/search">
        <Search />
      </Route>
      <Route path="/translate">
        <Translate />
      </Route>
      <Route path="/dropdown">
        <Dropdown
          selected={selected}
          onSelectedChange={setSelected}
          options={options}
          label="Select a color"
        />
      </Route>
    </div>
  );
};
