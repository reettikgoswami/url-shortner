import React from "react";
import { Table } from "semantic-ui-react";
import UrlCard from "./UrlCard";

function UrlList(props) {
  return (
    <div className="w-3/5 flex mx-auto">
      <Table celled compact definition>
        <Table.Header fullWidth>
          <Table.Row>
            <Table.HeaderCell />
            <Table.HeaderCell>Original URL</Table.HeaderCell>
            <Table.HeaderCell>Short URL</Table.HeaderCell>
            <Table.HeaderCell>Clicks</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          <UrlCard />
          <UrlCard />
          <UrlCard />
          <UrlCard />
          <UrlCard />
        </Table.Body>
      </Table>
    </div>
  );
}

export default UrlList;
