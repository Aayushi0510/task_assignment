import React from 'react'
import { useNavigate } from 'react-router-dom'
import TableHeader from '../../../components/Table/TableHeader'
import Table from '../../../components/Table/Table'

const UserList = ({rows ,columns}) => {
    console.log(rows ,"rows")
    const navigate=useNavigate()
  return (
    <div className="px-4 h-[calc(100vh-55px)] pt-3">
            {/* Page Header */}
            <div className="flex justify-between items-center pt-5 pb-10">
                 <span className="text-xl font-semibold text-primary-main">Users</span>
               <div className='flex gap-3'>
         
              
               <button
                    onClick={() => navigate('add')}
                    className="bg-primary-main text-white text-sm rounded py-2 px-3"
                >
                   
                    + Add User{' '}
                </button>
               </div>
            </div>
            <div className="border flex flex-col h-[calc(100%-55px)] rounded bg-white">
                <TableHeader
                page={1}
                rowCount={1}
                rowsPerPage={4}
                rows={rows}
                />
                 <div className="grow overflow-auto">     
                <Table rows={rows} columns={columns} isCheckbox={true}/>
        </div>

            </div>
           
    </div>
    )
}

export default UserList