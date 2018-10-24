import React from "react";
import { Form, Row, Col, Card } from "antd";
import "./index.less";
import BasicForm from "../../components/BasicForm";
import BasicTable from "../../components/BasicTable";

export default class Bill extends React.Component {
  render() {
    return (
      <div className="bill__wrapper">
        <Card title="Bill Search" className="search-form">
          <BasicForm />
        </Card>
        <Card title="Search Result" className="search-table" style={{marginTop: 10}}>
          <BasicTable />
        </Card>
      </div>
    );
  }
}
