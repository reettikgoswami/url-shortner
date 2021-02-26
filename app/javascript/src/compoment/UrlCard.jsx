import React from "react";
import { Table, Icon } from "semantic-ui-react";

function UrlCard({ url }) {
  const { original_link, slug, clicks } = url;
  return (
    <Table.Row>
      <Table.Cell collapsing>
        <Icon name="thumbtack" color="blue" />
      </Table.Cell>
      <Table.Cell>{original_link}</Table.Cell>
      <Table.Cell>
        <a className="hover:underline" href={window.location.href + slug}>
          {window.location.href + slug}
        </a>
      </Table.Cell>
      <Table.Cell>{clicks}</Table.Cell>
    </Table.Row>
  );
}

export default UrlCard;
