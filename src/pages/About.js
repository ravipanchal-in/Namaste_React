import React from "react";
import UserContext from "../utils/UserContext";
// in a class component we can use context with : UserContext.Consumer. it takes a callback function and that callback function gives us the access of userContext.
class About extends React.Component {
  render() {
    return (
      <div>
        About Us
        <div>
          loggedInUser :{" "}
          <UserContext.Consumer>
            {({ loggedInUser }) => (
              <h1 className="text-xl font-bold">{loggedInUser}</h1>
            )}
          </UserContext.Consumer>
        </div>
      </div>
    );
  }
}

export default About;
