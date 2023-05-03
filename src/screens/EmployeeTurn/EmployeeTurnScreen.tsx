import React, { useEffect, useState } from 'react';
import { Button, InputNumber, Space } from 'antd';
import EmployeeItem from './components/EmployeeItem';
import EmployeeTurn from './components/EmployeeTurn';
import { employeeType } from '../../types/employee.type';

import EMPLOYEE_DATA from '../../dummy/employee.json'

const EmployeeTurnScreen: React.FC = () => {

    const [employeeList, setEmployeeList] = useState<employeeType[]>([])

    useEffect(() => {
        setEmployeeList(EMPLOYEE_DATA)
    }, [])

    return (
        <>
            <div>
                {
                    employeeList?.map((employee: employeeType, index) =>
                        <EmployeeTurn
                            employeeInfo={employee}
                            key={index?.toString()}
                        />
                    )
                }
            </div>

        </>

    )
}

export default EmployeeTurnScreen
