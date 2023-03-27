import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AppointmentList from '../pages/AppointmentList';
import Dashboard from '../pages/Dashboard';
import DoctorList from '../pages/DoctorList';
import PatientList from '../pages/PatientList';
import TransCations from '../pages/TransCations';
import Layout from '../Layout'
import Error from '../pages/Error';
import Login from '../pages/Login';
export default function Router() {
    return (
        <>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route path="/" element={<Dashboard title="Dashboard" />} />
                    <Route path="dashboard" element={<Dashboard title="Dashboard" />} />
                    <Route path="appointmentList" element={< AppointmentList title="AppointmentList" />} />
                    <Route path="doctorList" element={<DoctorList title="DoctorList" />} />
                    <Route path="patientList" element={<PatientList title="PatientList" />} />
                    <Route path="transCations" element={<TransCations title="TransCations" />} />
                </Route>
                <Route path='*' element={<Error />} />
                <Route path='/login' element={<Login />} />
            </Routes>
        </>
    )
}
