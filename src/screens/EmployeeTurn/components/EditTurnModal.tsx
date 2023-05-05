import React, { ChangeEvent, HTMLInputTypeAttribute, useEffect, useState } from 'react'
import { Button, DatePicker, Form, Input, Modal, Space, Switch, TimePicker } from 'antd';
import { DollarCircleOutlined, SmileOutlined } from '@ant-design/icons';
import { TurnType } from '../../../types/turn.type';
import { useAppDispatch } from '../../../store/hooks';
import { deleteEmployeeTurn } from '../../../store/features/employeeTurn/employeeTurnSlice';
import dayjs from 'dayjs';

type Props = {
    setVisible: (value: boolean) => void;
    isVisible: boolean,
    turnInfo: TurnType

}

const EditTurnModal = (props: Props) => {
    const dispatch = useAppDispatch()
    const [turnInfo, setTurnInfo] = useState({} as TurnType)

    const [isConfirmDeleteLoading, setIsConfirmDeleteLoading] = useState(false)
    console.log('====================================');
    console.log('edit turn: ', props.turnInfo);
    console.log('====================================');
    const handleOk = () => {
        // dispatch(addEmployeeTurn({
        //     employee_id: props.employeeInfo?.id,
        //     new_turn: turnInputData
        // }))
        props.setVisible(false);

    };

    const handleCancel = () => {
        props.setVisible(false);
    };

    const handleConfirmDelete = () => {
        setIsConfirmDeleteLoading(true);

        setTimeout(() => {
            setIsConfirmDeleteLoading(false);
            dispatch(deleteEmployeeTurn({
                employee_id: props.turnInfo?.employeeInfo?.id,
                turn_id: props.turnInfo?.id
            }))
            props.setVisible(false)
        }, 1000);

    }

    useEffect(() => {
        setTurnInfo(props.turnInfo)
    }, [turnInfo])

    return (
        <div>
            <Modal
                title={`Edit Turn`}
                open={props.isVisible}
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
                    <Form.Item label='Services'>
                        <Input
                            placeholder="Nail, Eyelash"
                            id="services"
                            prefix={<DollarCircleOutlined />}
                            value={turnInfo.services}
                        // onChange={_onChangeService}
                        />
                    </Form.Item>
                    <Form.Item label='Price'>
                        <Input
                            placeholder="100"
                            id="price"
                            prefix={<DollarCircleOutlined />}
                            value={turnInfo?.price}
                        // onChange={_onChangePrice}
                        />
                    </Form.Item>
                    <Form.Item label='Tip'>
                        <Input
                            placeholder="20"
                            id="tip"
                            prefix={<DollarCircleOutlined />}
                            value={turnInfo?.tip}
                        // onChange={_onChangeTip}

                        />
                    </Form.Item>
                    <Form.Item label='Start Time' >
                        <TimePicker
                            // onSelect={(value) => _onChangeStartDate(value)}
                            showSecond={false}
                            // value={new Date(turnInfo?.start_at)}
                            value={dayjs(turnInfo.start_at)}
                        />
                    </Form.Item>
                    <Form.Item label='End Time' >
                        <TimePicker
                            // onSelect={(value) => _onChangeEndDate(value)}
                            // showTime={true}
                            showSecond={false}
                        // renderExtraFooter={()=><p>sdsa</p>}

                        />
                    </Form.Item>

                    <Space direction="vertical">

                        <Switch
                            checked={props.turnInfo?.is_done}
                            checkedChildren="Done"
                            unCheckedChildren="Todo"
                            style={{ background: props.turnInfo?.is_done ? '#1677FF' : 'gray' }}
                        // onChange={_onChangeStatus}
                        />
                    </Space>

                </Form.Item>
            </Modal>

        </div>)
}

export default EditTurnModal