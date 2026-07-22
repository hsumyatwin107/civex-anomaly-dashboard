import {
    motion
} from "framer-motion";



function StatCard({

    title,

    value,

    icon,

    color="text-white"

}) {



    return (

        <motion.div


            whileHover={{
                scale:1.05,
                y: -5
            }}

            transition={{
                duration: 0.3,
                type: "spring"
            }}

            className="
                bg-linear-to-br

                from-white/10

                to-white/5

                backdrop-blur-xl

                border

                border-white/20

                hover:border-blue-500/50

                rounded-3xl

                p-6

                shadow-xl

                transition-all

                duration-300

            "


        >


            <div className="
                flex

                items-start

                justify-between
            ">


                <div>


                    <p className="
                        text-gray-400

                        text-sm

                        font-medium
                    ">

                        {title}

                    </p>



                    <h1 className={`

                        text-5xl

                        font-black

                        mt-4

                        ${color}

                        drop-shadow-lg

                    `}>


                        {value}


                    </h1>


                </div>




                <div className="
                    bg-linear-to-br

                    from-blue-500/20

                    to-blue-600/10

                    p-4

                    rounded-2xl

                    text-blue-300

                    shadow-lg
                ">


                    {icon}


                </div>



            </div>


        </motion.div>

    );

}


export default StatCard;
