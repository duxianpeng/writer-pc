import React from "react";
import { Form, Row, Col, Input, Button, Icon, Select, DatePicker } from "antd";
import moment from "moment";

import "./index.less";
const FormItem = Form.Item;
const Option = Select.Option;
class BasicForm extends React.Component {
  state = {
    expand: false
  };
  handleSearch = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      console.log("Received values of form: ", values);
    });
  };

  
  handleReset = () => {
    this.props.form.resetFields();
  };

  toggle = () => {
    const { expand } = this.state;
    this.setState({ expand: !expand });
  };

  getOptionList = data => {
    if (!data) return [];
    const options = [];
    data.map(item => {
      options.push(
        <Option value={item.id} key={item.id}>
          {item.name}
        </Option>
      );
    });
    return options;
  };

  getFormItems = formItems => {
    const children = [],
      formItemLayout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 16 }
      },
      { getFieldDecorator } = this.props.form;

    if (formItems && formItems.length > 0) {
      formItems.forEach((item, i) => {
        const label = item.label,
          field = item.field,
          type = item.type,
          initialValue = item.initialValue || "",
          placeHolder = item.placeHolder || "",
          options = item.options,
          format = item.format;

        if (type == "Select") {
          const select = (
            <FormItem
              {...formItemLayout}
              style={{ marginBottom: 2 }}
              label={label}
              key={field}
            >
              {getFieldDecorator(`${field}`, {
                initialValue: initialValue
              })(
                <Select
                  placeholder={placeHolder}
                  style={{ width: item.width }}
                >
                  {this.getOptionList(options)}
                </Select>
              )}
            </FormItem>
          );
          children.push(select);
        } else if (type == "DatePicker") {
          const datePicker = (
            <FormItem
              {...formItemLayout}
              style={{ marginBottom: 2 }}
              label={label}
              key={field}
            >
              {getFieldDecorator(`${field}`, {
                defaultValue: initialValue
              })(
                <DatePicker
                  placeholder={placeHolder}
                  showTime
                  format={format}
                  style={{ width: item.width }}
                />
              )}
            </FormItem>
          );
          children.push(datePicker);
        } else if (type == "Input") {
          const input = (
            <FormItem
              {...formItemLayout}
              style={{ marginBottom: 2 }}
              label={label}
              key={field}
            >
              {getFieldDecorator(`${field}`, {
                initialValue: initialValue
              })(
                <Input
                  placeholder={placeHolder}
                  style={{ width: item.width }}
                />
              )}
            </FormItem>
          );
          children.push(input);
        }
      });

      return children;
    }
  };

  render() {
    let expand = this.state.expand,
      formItemsData = [
        {
          label: "Entity",
          field: "Entity",
          type: "Select",
          initialValue: "020",
          placeHolder: "",
          width: 200,
          options: [
            {
              id: "020",
              name: "CSSI"
            },
            {
              id: "001",
              name: "CGMI"
            }
          ],
          format: ""
        },

        {
          label: "Customer",
          field: "CustomerMnemonic",
          type: "Select",
          initialValue: "",
          placeHolder: "",
          width: 200,
          options: [
            {
              id: "00000087",
              name: "SBOI-DU"
            },
            {
              id: "00000093",
              name: "SIFP-DU "
            }
          ],
          format: ""
        },
        {
          label: "Trade Type",
          field: "TradeType",
          type: "Select",
          initialValue: "",
          placeHolder: "",
          width: 200,
          options: [
            {
              id: "BVC",
              name: "BVC"
            },
            {
              id: "LVC",
              name: "LVC"
            }
          ],
          format: ""
        },
        {
          label: "Intercompany",
          field: "IntercompanyInd",
          type: "Select",
          initialValue: "",
          placeHolder: "",
          width: 200,
          options: [
            {
              id: "Y",
              name: "Y"
            },
            {
              id: "N",
              name: "N"
            }
          ],
          format: ""
        },
        {
          label: "Intracompany",
          field: "IntracompanyInd",
          type: "Select",
          initialValue: "",
          placeHolder: "",
          width: 200,
          options: [
            {
              id: "Y",
              name: "Y"
            },
            {
              id: "N",
              name: "N"
            }
          ],
          format: ""
        },
        {
          label: "Product Type",
          field: "Product Type",
          type: "Select",
          initialValue: "",
          placeHolder: "",
          width: 200,
          options: [
            {
              id: "EQTY",
              name: "Equity"
            },
            {
              id: "FIXD",
              name: "Fix Income"
            }
          ],
          format: ""
        },
        {
          label: "Repo Flag",
          field: "RepoFlag",
          type: "Select",
          initialValue: "",
          placeHolder: "",
          width: 200,
          options: [
            {
              id: "Y",
              name: "Y"
            },
            {
              id: "N",
              name: "N"
            }
          ],
          format: ""
        },
        {
          label: "Settle Date",
          field: "ActualOriginationDate",
          type: "DatePicker",
          initialValue: moment().format("YYYY-MM-DD HH:mm:ss"),
          placeHolder: "",
          width: 200,
          options: [],
          format: "YYYY-MM-DD HH:mm:ss"
        },
        {
          label: "Return Date",
          field: "ActualReturnDate",
          type: "DatePicker",
          initialValue: moment().format("YYYY-MM-DD HH:mm:ss"),
          placeHolder: "",
          options: [],
          format: "YYYY-MM-DD HH:mm:ss"
        }
      ];

    const formItems = this.getFormItems(formItemsData);
    const children = [];
    for (let i = 0; i < formItems.length; i++) {
      children.push(
        <Col lg={{ span: 12 }} xl={{ span: 8 }} key={i}>
          {formItems[i]}
        </Col>
      );
    }
    const shownCount = expand ? children.length : 3;

    return (
      <Form className="ant-advanced-search-form" onSubmit={this.handleSearch}>
        <Row gutter={24}>{children.slice(0, shownCount)}</Row>
        <Row>
          <Col span={24} style={{ textAlign: "right" }}>
            <Button type="primary" htmlType="submit">
              Search
            </Button>
            <Button style={{ marginLeft: 8 }} onClick={this.handleReset}>
              Clear
            </Button>
            <a style={{ marginLeft: 8, fontSize: 12 }} onClick={this.toggle}>
              Collapse <Icon type={expand ? "up" : "down"} />
            </a>
          </Col>
        </Row>
      </Form>
    );
  }
}
export default Form.create()(BasicForm);
