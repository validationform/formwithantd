
import React, { useState } from 'react'
import "antd/dist/antd.css";
import "./App.css";
import { Form, Checkbox, DatePicker, Input, Select,Button,Drawer,Row} from "antd";
import {RightOutlined} from "@ant-design/icons";

  
export default function App() {
  
  const [visible, setVisible] = useState(false);
  
  return (
    <div style={{
      display: 'block', width: 700, padding: 30
    }}>
      <h4>Form with validation using antd</h4>
      <>
        <Button type="primary"
           style={{marginLeft:"50px",borderRadius:"20px"}}
          onClick={() => {
            setVisible(true);
          }}>Form Open</Button>
        <Drawer
          title="Fill The Form"
          placement="right"
          closable={false}
          visible={visible}
          onClose={() => {
            setVisible(false)
          }}
        >
          <Form
          autoComplete="off"
          labelCol={{ span: 10 }}
          wrapperCol={{ span: 14 }}
          onFinish={(values) => {
            console.log({ values},[]);
          }}
          onFinishFailed={(error) => {
            console.log({ error });
          }}
        >
          <Form.Item
            name="fullName"
            label="Full Name"
            rules={[
              {
                required: true,
                message: "Please enter your name",
              },
              { whitespace: true },
              { min: 4 },
            ]}
            hasFeedback
          >
            <Input placeholder="Enter your name" />
          </Form.Item>

          <Form.Item
            name="email"
            label="Email"
            rules={[
              {
                required: true,
                message: "Please enter your email",
              },
              { type: "email", message: "Please enter a valid email" },
            ]}
            hasFeedback
          >
            <Input placeholder="Type your email" />
          </Form.Item>

          <Form.Item
            name="Address"
            label="Address"
            rules={[
              
              { min: 10},
              {max:50},
              
            ]}
            hasFeedback
          >
            <Input placeholder="Enter your Address" />
          </Form.Item>

        

          <Form.Item
                  name="pnone number"
                  label="phone number"
                  rules={[
                    {
                      required: true,
                      message: "Please enter your valid mobile number",
                    },
                    { min: 10},
                    {max:10},
                    
                  ]}  
                    hasFeedback
          >
            
            
            <Input placeholder="Enter the pnone number"/>
            </Form.Item>

          <Form.Item name="gender" label="Gender" requiredMark="optional">
            <Select placeholder="Select your gender">
              <Select.Option value="male" Selected>Male</Select.Option>
              <Select.Option value="female">Female</Select.Option>
              <Select.Option value="other">Other</Select.Option>
            </Select>
          </Form.Item>

          <Form.Item
            name="dob"
            label="Date of Birth"
            rules={[
              {
                required: true,
                message: "Please provide your date of birth",
              },
            ]}
            hasFeedback
          >
            <DatePicker
              style={{ width: "100%" }}
              picker="date"
              placeholder="Chose date of birth"
            />
          </Form.Item>

      

          <Form.Item
            name="agreement"
            wrapperCol={{ span: 24 }}
            valuePropName="checked"
            rules={[
              {
                validator: (_, value) =>
                  value
                    ? Promise.resolve()
                    : Promise.reject(
                        "To proceed, you need to agree with our terms and conditions"
                      ),
              },
            ]}
          >
            <Checkbox>
              {" "}
              Agree to our <a href="#">Terms and Conditions</a>
            </Checkbox>
          </Form.Item>
            
          <Form.Item wrapperCol={{ span: 24 }}>
            <Button block type="primary" htmlType="submit" style={{borderRadius:"20px"}}>
              Login  
            </Button>
            
          </Form.Item>

        </Form>
        </Drawer>
      </>
    </div>
  );
}