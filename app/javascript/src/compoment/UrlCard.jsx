import React from "react";
import { Table, Icon } from "semantic-ui-react";
import urlsApi from "apis/urls";

import Toastr from "../common/Toastr";

function UrlCard({ url, fetchUrls }) {
  const { original_link, slug, clicks, pinned } = url;

  const handleTogglePin = async () => {
    try {
      await urlsApi.update(slug, pinned);
      fetchUrls();
    } catch (error) {
      Toastr(error.response.data.errors);
    }
  };

  return (
    <Table.Row>
      <Table.Cell collapsing>
        <Icon
          name="thumbtack"
          color={pinned ? "blue" : "black"}
          onClick={handleTogglePin}
        />
      </Table.Cell>
      <Table.Cell>{original_link}</Table.Cell>
      <Table.Cell>
        <a
          className="hover:underline"
          href={window.location.href + slug}
          target="_blank"
          rel="noreferrer"
        >
          {window.location.href + slug}
        </a>
      </Table.Cell>
      <Table.Cell>{clicks}</Table.Cell>
    </Table.Row>
  );
}

export default UrlCard;
