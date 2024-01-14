import React from 'react'
import { BiFilter, BiSearch } from 'react-icons/bi'
import { IoReload } from 'react-icons/io5'



const TableHeader = (
    {isRefresh = false,
    rowCount,
    rows,
    rowsPerPage,
    searchValue,
    page,
    rowsPerPageOptions = [5, 10, 20, 50, 100],
    onRowsPerPageChange = () => {},
    isFilter = false,
    onFilterClick = () => {},
    onFilterDispatch = () => {},
    onSearch = () => {},
}) => {

        return (
            <div className="p-3 border-b border-slate-300 grid grid-cols-3">
                <div className="flex gap-1  col-span-2">
  
                </div>
    
                <div className="flex justify-end col-span-1 -mt-2">
                    <div className="flex gap-3 items-center">
                       
                </div>
            </div>
            </div>
        )
    }
export default TableHeader