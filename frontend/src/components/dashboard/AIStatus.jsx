import {
    BrainCircuit,
    Activity,
    ShieldCheck,
    Zap
} from "lucide-react";

import { motion } from "framer-motion";


function AIStatus() {


    const stats = [
        {
            icon: <Activity />,
            label: "Model Status",
            value: "Running",
            color: "text-emerald-400",
            bgColor: "from-emerald-500/10 to-emerald-600/5"
        },
        {
            icon: <ShieldCheck />,
            label: "Accuracy",
            value: "96.4%",
            color: "text-blue-400",
            bgColor: "from-blue-500/10 to-blue-600/5"
        },
        {
            icon: <Zap />,
            label: "Predictions",
            value: "Live",
            color: "text-purple-400",
            bgColor: "from-purple-500/10 to-purple-600/5"
        }
    ];


    return (

        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="
                bg-linear-to-r

                from-blue-600/15

                via-purple-600/10

                to-blue-600/15

                border

                border-white/10

                rounded-3xl

                p-6

                text-white

                shadow-xl

                backdrop-blur-md
            ">


            <div className="
                flex

                items-center

                gap-4
            ">


                <motion.div 
                    animate={{
                        scale: [1, 1.1, 1]
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity
                    }}
                    className="
                        bg-linear-to-br

                        from-blue-500/30

                        to-blue-600/20

                        p-4

                        rounded-2xl

                        border

                        border-blue-500/30
                    ">

                    <BrainCircuit size={32}/>

                </motion.div>



                <div>


                    <h3 className="
                        text-xl

                        font-bold

                        tracking-tight
                    ">

                        AI Anomaly Detection Engine

                    </h3>


                    <p className="
                        text-gray-400

                        text-sm

                        mt-1
                    ">

                        Isolation Forest model monitoring project data

                    </p>


                </div>


            </div>




            <div className="
                grid

                grid-cols-3

                gap-4

                mt-8
            ">



                {stats.map((stat, index) => (
                    <motion.div
                        key={index}
                        whileHover={{ scale: 1.05 }}
                        className={`
                            bg-linear-to-br

                            ${stat.bgColor}

                            border

                            border-white/10

                            hover:border-white/20

                            rounded-xl

                            p-4

                            transition-all

                            duration-300
                        `}
                    >


                        <div className={`text-gray-300 mb-2`}>
                            {stat.icon}
                        </div>

                        <p className="
                            text-gray-400

                            text-sm

                            font-medium
                        ">

                            {stat.label}

                        </p>


                        <h4 className={`

                            font-bold

                            mt-2

                            text-lg

                            ${stat.color}

                        `}>

                            {stat.value}

                        </h4>


                    </motion.div>
                ))}


            </div>


        </motion.div>


    );


}


export default AIStatus;
