import React from 'react';
import {render} from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';

import './main.html';
import Main from '/imports/ui/App.jsx';

Meteor.startup(() => {
  render(<Main/>, document.getElementById('root'));
});