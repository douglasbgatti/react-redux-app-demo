import React, { useEffect } from "react";

import { connect } from "react-redux";

import { fetchUsers } from "../../redux/users/userActions";

const UserContainer = props => {
  useEffect(() => {
    props.fetchUsers();
  });

  const printUsers = () => {
    return props.userData && props.userData.users
      ? props.userData.users.map(user => {
          return (
            <p>
              {user.name} - {user.email}
            </p>
          );
        })
      : "";
  };

  return (
    <div>
      {props.userData.loading ? (
        <p>Loading....</p>
      ) : props.userData.error ? (
        <p>{props.userData.error}</p>
      ) : (
        printUsers()
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    userData: state.user
  };
};

const mapDispathToProps = dispatch => {
  return {
    fetchUsers: () => {
      dispatch(fetchUsers());
    }
  };
};

export default connect(mapStateToProps, mapDispathToProps)(UserContainer);
