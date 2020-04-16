import React from "react";
import { Query } from "react-apollo";
import { Link } from "react-router-dom";
import { GET_NOTES } from "../../queries";


export default class Note extends React.Component {
  render() {
    return (
      <>
        <Header>
          <Title>
            <Query query={GET_NOTES}>

            </Query>
          </Title>
        </Header>
      </>
    );
  }
}