import React from "react";
import { Table } from "semantic-ui-react";
import UrlCard from "./UrlCard";

function UrlList({ urls, fetchUrls }) {
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
          {urls.map(url => (
            <UrlCard key={url.id} url={url} fetchUrls={fetchUrls} />
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}

export default UrlList;
