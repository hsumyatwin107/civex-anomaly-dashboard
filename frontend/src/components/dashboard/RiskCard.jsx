import {
    AlertTriangle,
    CheckCircle
} from "lucide-react";



function RiskCard({

    item

}) {


    const critical =
        item.severity === "Critical";



    return (

        <div className="
            bg-white/10

            backdrop-blur-xl

            border

            border-white/10

            rounded-3xl

            p-6

            shadow-xl

            text-white

        ">


            <div className="
                flex

                justify-between

                items-start
            ">



                <div>


                    <p className="
                        text-gray-400

                        text-sm
                    ">

                        {item.category}

                    </p>



                    <h3 className="
                        text-xl

                        font-bold

                        mt-2
                    ">

                        {item.metric}

                    </h3>


                </div>




                <div className={`
                    
                    flex

                    items-center

                    gap-2

                    px-3

                    py-2

                    rounded-full

                    text-sm

                    font-semibold


                    ${
                        critical

                        ?

                        "bg-red-500/20 text-red-300"

                        :

                        "bg-green-500/20 text-green-300"

                    }

                `}>


                    {

                        critical

                        ?

                        <AlertTriangle size={16}/>

                        :

                        <CheckCircle size={16}/>

                    }


                    {item.severity}


                </div>


            </div>




            <div className="
                mt-8
            ">


                <div className="
                    flex

                    justify-between

                    mb-2
                ">


                    <span className="
                        text-gray-400
                    ">

                        Risk Score

                    </span>



                    <span className="
                        font-bold

                        text-white
                    ">

                        {item.value}%

                    </span>


                </div>




                <div className="
                    h-3

                    bg-white/10

                    rounded-full

                    overflow-hidden
                ">


                    <div

                        className={`

                            h-full

                            rounded-full

                            transition-all

                            duration-500

                            ${
                                critical

                                ?

                                "bg-linear-to-r from-red-500 to-red-600"

                                :

                                "bg-linear-to-r from-green-500 to-emerald-600"

                            }

                        `}


                        style={{

                            width:`${item.value}%`

                        }}

                    />


                </div>


            </div>


        </div>

    );


}


export default RiskCard;
