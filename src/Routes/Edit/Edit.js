import React from "react";
import { Query } from "react-apollo";
import { GET_NOTE } from "../../queries";


export default class Edit extends React.Component {
  render() {
    const {match: { params: {id}}} = this.props;
  return (
        <div>
          Hi
        </div>
   )
  }
}