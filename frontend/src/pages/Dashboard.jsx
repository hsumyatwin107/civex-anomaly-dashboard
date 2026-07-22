import {
    useEffect,
    useState,
    useCallback
} from "react";


import api from "../services/api";


import {
    // Building2,
    // AlertTriangle,
    // BrainCircuit,
    // DollarSign,
    TrendingUp
} from "lucide-react";

import { motion } from "framer-motion";

// import StatCard from "../components/dashboard/StatCard";
import AnomaliesTable from "../components/dashboard/AnomaliesTable";
// import RiskChart from "../components/dashboard/RiskChart";
// import AIStatus from "../components/dashboard/AIStatus";



function Dashboard() {


    const [
        risks,
        setRisks
    ] = useState([]);

    const [loading, setLoading] = useState(true);




    const loadData = useCallback(async()=>{


        try {


            const response = await api.get(
                "/api/anomalies"
            );


            setRisks(response.data);

            setLoading(false);


        } catch(error) {


            console.error(
                "Failed to load anomaly data:",
                error
            );

            setLoading(false);


        }


    }, []);




    useEffect(()=>{


        const startLoading = async()=>{


            await loadData();


        };



        startLoading();




        const timer = setInterval(()=>{


            loadData();


        },10000);




        return ()=>{


            clearInterval(timer);


        };


    },[loadData]);




    // const critical = risks.filter(

    //     item => item.severity === "Critical"

    // ).length;

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 },
        },
    };



    return (

        <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-10"
        >

            {/* AI Engine Status */}

            {/* <motion.div variants={itemVariants}>
                <AIStatus />
            </motion.div> */}

            {/* Statistics */}


            <motion.div 
                variants={containerVariants}
                className="
                    grid

                    grid-cols-1

                    md:grid-cols-2

                    xl:grid-cols-4

                    gap-6
                ">


                {/* <motion.div variants={itemVariants}>
                    <StatCard

                        title="Active Projects"

                        value="24"

                        icon={
                            <Building2 size={28}/>
                        }

                    />
                </motion.div> */}



                {/* <motion.div variants={itemVariants}>
                    <StatCard

                        title="Critical Risks"

                        value={critical}

                        icon={
                            <AlertTriangle size={28}/>
                        }

                        color="text-red-400"

                    />
                </motion.div> */}



                {/* <motion.div variants={itemVariants}>
                    <StatCard

                        title="AI Confidence"

                        value="96%"

                        icon={
                            <BrainCircuit size={28}/>
                        }

                        color="text-blue-400"

                    />
                </motion.div> */}



                {/* <motion.div variants={itemVariants}>
                    <StatCard

                        title="Cost Saved"

                        value="₺2.4M"

                        icon={
                            <DollarSign size={28}/>
                        }

                        color="text-green-400"

                    />
                </motion.div> */}

            </motion.div>

            {/* Chart */}

            {/* <motion.div variants={itemVariants}>
                <RiskChart

                    data={risks}

                />
            </motion.div> */}




            {/* Detected Anomalies Table */}


            <motion.section variants={itemVariants}>


                <div className="
                    flex

                    justify-between

                    items-center

                    mb-6
                ">


                    <h2 className="
                        text-3xl

                        font-bold

                        text-white
                    ">

                        Detected Anomalies

                    </h2>



                    <div className="
                        flex

                        items-center

                        gap-2

                        text-sm

                        text-gray-400

                        bg-white/5

                        px-4

                        py-2

                        rounded-full

                        border

                        border-white/10
                    ">

                        <motion.div
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        >
                            <TrendingUp size={16} />
                        </motion.div>

                        Live Monitoring


                    </div>


                </div>




                <AnomaliesTable 
                    data={risks}
                    loading={loading}
                />


            </motion.section>



        </motion.div>


    );


}



export default Dashboard;
