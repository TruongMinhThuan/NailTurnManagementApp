import React, { useState } from 'react'
import EmployeeInfo from './EmployeeInfo'
import { Divider, Space, Tag, Button, Tooltip } from 'antd';
import { employeeType } from '../../../types/employee.type';
import { PlusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import AddTurnModal from './AddTurnModal';

type Props = {
  employeeInfo?: employeeType
}

const EmployeeTurn = (props: Props) => {
  const [isAddTurnVisible, setIsAddTurnVisible] = useState(false)

  return (
    <div className='employee-turn--container'>
      <Space style={{ display: 'flex' }}>
        <EmployeeInfo employeeInfo={props.employeeInfo} />
        <Tooltip title="Add turn">
          <Button
            onClick={() => setIsAddTurnVisible(true)}
            shape="circle"
            icon={<PlusOutlined />}
            style={{ justifyContent: 'center', alignItems: 'center', display: 'flex' }}

          />
        </Tooltip>
      </Space>
      <Space size={[0, 8]} wrap>
        {
          Array(12).fill({}).map((e, index) =>
            <Tag className='turn-tag' color="blue" key={index?.toString()}>Turn</Tag>
          )
        }
      </Space>

      <AddTurnModal isVisible={isAddTurnVisible} setVisible={setIsAddTurnVisible} />
    </div>
  )
}

export default EmployeeTurn