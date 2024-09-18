import { getServerSession } from "next-auth";

import SignOutComponent from "../components/SignOut.Component";

async function Page(): Promise<React.ReactNode> {

    const session = await getServerSession();

    console.log(session);

    return (
        <div>
            Dashboard
            <SignOutComponent/>
        </div>
    )
}

export default Page;