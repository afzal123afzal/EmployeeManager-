import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component'
import { axiosAdminInstance } from '../../instance/Axios'

import { toast } from 'react-toastify'
function ClubTable() {

    const [user, setUser] = useState([])

    // const dispatch = useDispatch()

    useEffect(() => {
        getAllClubs()
    }, [])
    const getAllClubs = async () => {
        const response = await axiosAdminInstance.get('/')
        const data = response.data
        setUser(data)
    }





    const deleteEmployee = async (id) => {
        const response = await axiosAdminInstance.delete(`/employee-del/${id}`)
        if (response.status === 200) {
            toast.error(`Employee has been Deleted`)
            getAllClubs()
        }
    }


    const columns = [

        {
            name: 'Employee',
            selector: (row) => row.name
        },
        {
            name: 'Email',
            selector: (row) => row.email
        },
        {
            name: 'phoneNo',
            selector: (row) => row.phone
        },
       
        {
            name: 'Action',
            selector: (row) => {
                return (
                    <div className="flex" >
                        

                        <div onClick={() => deleteEmployee(row._id)}>
                            <i className="fa fa-pencil" style={{ fontSize: '24px', color: "blue" }} aria-hidden="true"></i>
                        </div>


                        <div onClick={() => deleteEmployee(row._id)} >
                            <i className="fa fa-trash pl-3" style={{ fontSize: '24px', color: "red" }} aria-hidden="true"></i>
                        </div>





                    </div>
                )
            },
        }
    ]

    return (

        <>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-4">
                Add
            </button>

            <DataTable
                columns={columns}
                data={user}
                pagination />
        </>
    )
}

export default ClubTable