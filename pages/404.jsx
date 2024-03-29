import React from "react";
import Router from "next/router";

import { Button, Result } from "antd";
const PageNotFound = () => {
  return (
    <Result
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={
        <Button type="primary" onClick={() => Router.push("/")}>
          Back Home
        </Button>
      }
    />
  );
};

export default PageNotFound;
