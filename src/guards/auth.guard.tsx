import React from 'react';
import { Navigate, Outlet } from "react-router-dom";
import { PublicRoutes } from "../models/routes"; // Importa PrivateRoutes y PublicRoutes
import { useStore } from "../zustand/userStore";

interface Props {
    privateValidation: boolean;
}

const PrivateValidationFragment = <Outlet />;
const PublicValidationFragment = <Navigate replace to={'/'} />

export const AuthGuard = ({ privateValidation }: Props) => {
    const { user } = useStore();
    let test: any = true

    return test = true ? (
        privateValidation ? (
            PrivateValidationFragment
        ) : (
            PublicValidationFragment
        )
    )   :   (
        <Navigate replace to={PublicRoutes.LOGIN} />
    )
};

export default AuthGuard;

