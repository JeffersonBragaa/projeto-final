import { deleteSessionCookie } from "@/src/libs/session";
import { redirect } from "next/navigation";

export default async function Logout() {
    const logout = async () => {
       'use server'
        await deleteSessionCookie();
        redirect('/dashboardInicial');
    }

    return(
        <form action={logout}>
            <button type="submit" className="btn-logout">Logout</button>
        </form>
    )

}

