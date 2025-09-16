import { Outlet } from "react-router-dom";

export function AuthLayouts() {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: 'rgb(223, 238, 245)' }}>
            <Outlet />
        </div>
    )
}