import {
    // Bell,
    // Search
} from "lucide-react";


function Header() {


    return (

        <header className="
            h-24

            border-b
            border-white/10

            flex
            items-center
            justify-between

            px-10

            bg-slate-950/50

            backdrop-blur-md
        ">


            <div>


                <h2 className="
                    text-white

                    text-3xl

                    font-bold
                ">

                    Construction Risk Intelligence

                </h2>



                <p className="
                    text-gray-400

                    mt-1

                    text-sm
                ">

                    AI powered anomaly detection and project monitoring

                </p>


            </div>




            <div className="
                flex

                items-center

                gap-5
            ">



                {/* <button className="
                    bg-white/5

                    hover:bg-white/10

                    p-3

                    rounded-xl

                    text-white

                    transition-all

                    duration-200
                ">

                    <Search size={22}/>

                </button> */}




                {/* <button className="
                    bg-white/5

                    hover:bg-white/10

                    p-3

                    rounded-xl

                    text-white

                    transition-all

                    duration-200

                    relative
                ">

                    <Bell size={22}/>

                    <span className="
                        absolute

                        top-1

                        right-1

                        w-2

                        h-2

                        bg-red-500

                        rounded-full

                        animate-pulse
                    "></span>

                </button> */}




                {/* <div className="
                    w-12

                    h-12

                    rounded-full

                    bg-linear-to-br

                    from-blue-500

                    to-blue-600

                    flex

                    items-center

                    justify-center

                    text-white

                    font-bold

                    text-lg

                    shadow-lg

                    cursor-pointer

                    hover:shadow-blue-500/50

                    transition-all

                    duration-200
                ">

                    A

                </div> */}


            </div>


        </header>

    );

}


export default Header;
