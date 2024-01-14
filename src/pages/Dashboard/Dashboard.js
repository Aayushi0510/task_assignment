import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setIsTableLoading } from '../../redux/slices/AuthSlice'


const Dashboard = () => {
    useEffect(()=>{
        
    })

    return (
    <div className="p-4">
        <span className="text-xl font-semibold text-slate-600">Dashboard</span>
    </div>
    )
}

export default Dashboard
