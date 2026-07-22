import Sidebar from "./Sidebar";
import Header from "./Header";


function Layout({ children }) {

    return (

        <div className="
            min-h-screen
            bg-slate-950
        ">


            <Sidebar />


            <div className="
                ml-72
            ">


                <Header />


                <main className="
                    p-10
                ">

                    {children}

                </main>


            </div>


        </div>

    );

}


export default Layout;