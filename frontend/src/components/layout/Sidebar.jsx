import {
    LayoutDashboard,
    // Building2,
    // BrainCircuit,
    // AlertTriangle,
    // BarChart3,
    // FileText,
    // Settings,
} from "lucide-react";


import { motion } from "framer-motion";



function Sidebar() {


    const menu = [

        {
            name: "Dashboard",
            icon: <LayoutDashboard />,
            active: true
        },

        // {
        //     name: "Projects",
        //     icon: <Building2 />
        // },

        // {
        //     name: "AI Intelligence",
        //     icon: <BrainCircuit />
        // },

        // {
        //     name: "Risk Alerts",
        //     icon: <AlertTriangle />
        // },

        // {
        //     name: "Analytics",
        //     icon: <BarChart3 />
        // },

        // {
        //     name: "Reports",
        //     icon: <FileText />
        // },

        // {
        //     name: "Settings",
        //     icon: <Settings />
        // }

    ];



    return (

        <motion.aside

            initial={{
                x: -100
            }}

            animate={{
                x: 0
            }}

            transition={{
                duration: 0.5,
                ease: "easeOut"
            }}

            className="
                fixed
                left-0
                top-0

                h-screen
                w-72

                bg-linear-to-b
                from-slate-900/95
                to-slate-950/95

                backdrop-blur-xl

                border-r
                border-white/10

                p-6

                text-white

                shadow-2xl
            "

        >


            <div className="
                mb-12
            ">


                <motion.h1 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="
                        text-4xl
                        font-black
                        tracking-tighter
                    ">

                    Cive
                    <span className="
                        text-transparent
                        bg-clip-text
                        bg-linear-to-r
                        from-blue-400
                        to-blue-600
                    ">

                        X

                    </span>

                </motion.h1>


                <p className="
                    text-xs
                    text-gray-500
                    mt-2
                    font-semibold
                    tracking-widest
                ">

                    AI CONSTRUCTION INTELLIGENCE

                </p>


            </div>



            <nav className="
                space-y-2
            ">


                {
                    menu.map((item, index) => (


                        <motion.div

                            key={index}

                            whileHover={{
                                x: 8
                            }}

                            whileTap={{
                                scale: 0.98
                            }}

                            className={`

                                flex
                                items-center
                                gap-4

                                px-4
                                py-3

                                rounded-xl

                                cursor-pointer

                                transition-all

                                duration-200

                                ${
                                    item.active

                                    ?

                                    "bg-linear-to-r from-blue-500/20 to-blue-600/10 text-blue-300 border border-blue-500/30"

                                    :

                                    "text-gray-400 hover:bg-white/5 hover:text-gray-300"

                                }

                            `}


                        >

                            {item.icon}


                            <span>

                                {item.name}

                            </span>

                            {item.active && (
                                <motion.div
                                    layoutId="activeIndicator"
                                    className="
                                        ml-auto
                                        w-2
                                        h-2
                                        bg-blue-400
                                        rounded-full
                                    "
                                />
                            )}

                        </motion.div>


                    ))
                }


            </nav>



            <div className="
                absolute
                bottom-8

                left-6
                right-6

                bg-linear-to-r

                from-blue-600/10

                to-blue-500/5

                border

                border-blue-500/20

                rounded-xl

                p-4

                backdrop-blur-sm
            ">


                <p className="
                    text-xs
                    text-gray-500
                    font-semibold
                ">

                    AI MODEL STATUS

                </p>



                <div className="
                    flex
                    items-center
                    gap-3
                    mt-3
                ">


                    <motion.div 
                        animate={{
                            scale: [1, 1.2, 1]
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity
                        }}
                        className="
                            w-3
                            h-3

                            bg-emerald-400

                            rounded-full

                            shadow-lg

                            shadow-emerald-400/50
                        "/>



                    <div>
                        <p className="text-sm font-semibold">
                            Online
                        </p>
                        <p className="text-xs text-gray-500">
                            Active
                        </p>
                    </div>


                </div>


            </div>


        </motion.aside>


    );

}


export default Sidebar;
