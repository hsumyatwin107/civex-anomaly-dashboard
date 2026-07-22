import {

    BarChart,

    Bar,

    XAxis,

    YAxis,

    Tooltip,

    ResponsiveContainer,

    CartesianGrid

} from "recharts";



function RiskChart({

    data

}) {



    return (

        <div className="
            bg-white/10

            backdrop-blur-xl

            border

            border-white/10

            rounded-3xl

            p-8

            text-white
        ">


            <h2 className="
                text-2xl

                font-bold

                mb-8

                text-white
            ">

                AI Risk Analysis

            </h2>



            <ResponsiveContainer

                width="100%"

                height={300}

            >


                <BarChart

                    data={data}

                    margin={{ top: 20, right: 30, left: 0, bottom: 0 }}

                >


                    <CartesianGrid 
                        strokeDasharray="3 3" 
                        stroke="rgba(255,255,255,0.1)"
                    />

                    <XAxis

                        dataKey="category"

                        tick={{ fill: '#9ca3af' }}

                    />


                    <YAxis

                        tick={{ fill: '#9ca3af' }}

                    />


                    <Tooltip 
                        contentStyle={{
                            backgroundColor: 'rgba(15, 23, 42, 0.9)',
                            border: '1px solid rgba(255,255,255,0.2)',
                            borderRadius: '8px'
                        }}
                        labelStyle={{ color: '#fff' }}
                    />



                    <Bar

                        dataKey="value"

                        fill="#3b82f6"

                        radius={[8, 8, 0, 0]}

                    />


                </BarChart>


            </ResponsiveContainer>


        </div>

    );

}


export default RiskChart;
