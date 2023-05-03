import React, { ChangeEvent, HTMLInputTypeAttribute, useState } from 'react'
import { Button, DatePicker, Form, Input, Modal, Space } from 'antd';
import { DollarCircleOutlined, SmileOutlined } from '@ant-design/icons';
import { TurnType } from '../../../types/turn.type';

type Props = {
    setVisible: (value: boolean) => void;
    isVisible: boolean
}


const AddTurnModal = ({ isVisible = false, ...props }: Props) => {

    const handleOk = () => {
        props.setVisible(false);
    };

    const handleCancel = () => {
        props.setVisible(false);
    };

    const [turnInputData, setTurnInputData] = useState({} as TurnType)

    const _onChangePrice = (evt: any) => {
        console.log('====================================');
        console.log(evt.target?.value);
        console.log('====================================');
        setTurnInputData({...turnInputData,price:evt?.target?.value})
    }

    return (
        <div>
            <Modal
                title="Add Turn 1   "
                open={isVisible}
                closable={false}
                footer={[
                    <Button key="cancel" onClick={handleCancel}>
                        Cancel
                    </Button>,
                    <Button key="ok" onClick={handleOk}>
                        OK
                    </Button>
                ]}

            >
                <Form.Item style={{ marginBottom: 10 }}>
                    <Form.Item label='Price'>
                        <Input placeholder="100" id="price" prefix={<DollarCircleOutlined />}
                            onChange={_onChangePrice}
                        />
                    </Form.Item>
                    <Form.Item label='Tip'>
                        <Input placeholder="20" id="price" prefix={<DollarCircleOutlined />} />
                    </Form.Item>
                    <Form.Item label='Start Time' >
                        <DatePicker />
                    </Form.Item>
                    <Form.Item label='End Time' >
                        <DatePicker />
                    </Form.Item>
                </Form.Item>
            </Modal>

        </div>
    )
}

export default AddTurnModal