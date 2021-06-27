import React, { Component } from 'react';
import UserItem from './UserItem';

class Users extends Component {
  state = {
    users: [
      {
        id: 1,
        login: 'sagargourimath',
        avatar_url: 'https://avatars.githubusercontent.com/u/43512261?v=4',
        html_url: 'https://github.com/sagargourimath',
      },
      {
        id: 2,
        login: 'sagargourimath',
        avatar_url: 'https://avatars.githubusercontent.com/u/43512261?v=4',
        html_url: 'https://github.com/sagargourimath',
      },
      {
        id: 3,
        login: 'sagargourimath',
        avatar_url: 'https://avatars.githubusercontent.com/u/43512261?v=4',
        html_url: 'https://github.com/sagargourimath',
      },
    ],
  };

  render() {
    return (
      <div style={userStyle}>
        {this.state.users.map((user) => {
          return <UserItem key={user.id} user={user} />;
        })}
      </div>
    );
  }
}

const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '1rem',
};

export default Users;
