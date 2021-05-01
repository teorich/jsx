// import React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './jsxandcomponenttuto/CommentDetail';
import faker from 'faker';
import ApprovalCard from ' ./jsxandcomponenttuto/ApprovalCard';

//Create a react component
const App = function () {
  return (
    <div className="ui container columns">
      <br />
      <ApprovalCard>
        <CommentDetail
          author={faker.name.findName()}
          timeAgo={new Date().getUTCDate()}
        />
      </ApprovalCard>
      <br></br>
      <ApprovalCard>
        <CommentDetail author={faker.name.findName()} />
      </ApprovalCard>
    </div>
  );
};

// Take the react component and show it on the screen
ReactDOM.render(<App />, document.getElementById('root'));
