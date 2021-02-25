import React from "react";
import { Table, Icon } from "semantic-ui-react";

function UrlCard(props) {
  return (
    <Table.Row>
      <Table.Cell collapsing>
        <Icon name="thumbtack" color="blue" />
      </Table.Cell>
      <Table.Cell>https://www.google.com/</Table.Cell>
      <Table.Cell>https://www.shoURLrt.com/mdbdhd</Table.Cell>
      <Table.Cell>8</Table.Cell>
    </Table.Row>
  );
}

export default UrlCard;
