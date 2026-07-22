import { motion } from "framer-motion";
import { AlertTriangle, CheckCircle, TrendingUp } from "lucide-react";

function AnomaliesTable({ data, loading }) {
    if (loading) {
        return (
            <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-8">
                <div className="space-y-3">
                    {[1, 2, 3, 4].map((i) => (
                        <div
                            key={i}
                            className="h-12 bg-white/5 rounded-lg animate-pulse"
                        />
                    ))}
                </div>
            </div>
        );
    }

    if (data.length === 0) {
        return (
            <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-8">
                <div className="text-center text-gray-400 py-8">
                    <AlertTriangle size={32} className="mx-auto mb-4 opacity-50" />
                    No anomalies detected
                </div>
            </div>
        );
    }

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.05,
            },
        },
    };

    const rowVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.3 },
        },
    };

    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden shadow-xl"
        >
            {/* Table Header */}
            <div className="overflow-x-auto">
                <table className="w-full">
                    <thead>
                        <tr className="border-b border-white/10 bg-white/5">
                            <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">
                                Category
                            </th>
                            <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">
                                Metric
                            </th>
                            <th className="px-6 py-4 text-center text-sm font-semibold text-gray-300">
                                Risk Score
                            </th>
                            <th className="px-6 py-4 text-center text-sm font-semibold text-gray-300">
                                Severity
                            </th>
                            <th className="px-6 py-4 text-center text-sm font-semibold text-gray-300">
                                Status
                            </th>
                            <th className="px-6 py-4 text-right text-sm font-semibold text-gray-300">
                                Timestamp
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item, index) => {
                            const critical = item.severity === "Critical";
                            const formattedTime = new Date(item.timestamp).toLocaleString();

                            return (
                                <motion.tr
                                    key={item.id}
                                    variants={rowVariants}
                                    className="border-b border-white/5 hover:bg-white/5 transition-colors duration-200"
                                >
                                    {/* Category */}
                                    <td className="px-6 py-4">
                                        <span className="text-sm text-gray-300 font-medium">
                                            {item.category}
                                        </span>
                                    </td>

                                    {/* Metric */}
                                    <td className="px-6 py-4">
                                        <span className="text-sm text-gray-400">
                                            {item.metric}
                                        </span>
                                    </td>

                                    {/* Risk Score with Progress Bar */}
                                    <td className="px-6 py-4">
                                        <div className="flex items-center justify-center gap-3">
                                            <div className="w-16 h-2 bg-white/10 rounded-full overflow-hidden">
                                                <motion.div
                                                    initial={{ width: 0 }}
                                                    animate={{ width: `${item.value}%` }}
                                                    transition={{ duration: 0.8, delay: index * 0.05 }}
                                                    className={`h-full rounded-full ${
                                                        critical
                                                            ? "bg-linear-to-r from-red-500 to-red-600"
                                                            : "bg-linear-to-r from-green-500 to-emerald-600"
                                                    }`}
                                                />
                                            </div>
                                            <span className="text-sm font-bold text-white min-w-max">
                                                {item.value}%
                                            </span>
                                        </div>
                                    </td>

                                    {/* Severity Badge */}
                                    <td className="px-6 py-4">
                                        <div className="flex justify-center">
                                            <div
                                                className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold ${
                                                    critical
                                                        ? "bg-red-500/20 text-red-300 border border-red-500/30"
                                                        : "bg-green-500/20 text-green-300 border border-green-500/30"
                                                }`}
                                            >
                                                {critical ? (
                                                    <AlertTriangle size={14} />
                                                ) : (
                                                    <CheckCircle size={14} />
                                                )}
                                                {item.severity}
                                            </div>
                                        </div>
                                    </td>

                                    {/* Status Indicator */}
                                    <td className="px-6 py-4">
                                        <div className="flex justify-center">
                                            <motion.div
                                                animate={{ scale: [1, 1.2, 1] }}
                                                transition={{ duration: 2, repeat: Infinity }}
                                                className={`w-3 h-3 rounded-full ${
                                                    critical
                                                        ? "bg-red-500 shadow-lg shadow-red-500/50"
                                                        : "bg-green-500 shadow-lg shadow-green-500/50"
                                                }`}
                                            />
                                        </div>
                                    </td>

                                    {/* Timestamp */}
                                    <td className="px-6 py-4 text-right">
                                        <span className="text-xs text-gray-500">
                                            {formattedTime}
                                        </span>
                                    </td>
                                </motion.tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>

            {/* Table Footer */}
            <div className="px-6 py-3 border-t border-white/10 bg-white/5 flex items-center justify-between">
                <span className="text-xs text-gray-500">
                    Showing {data.length} anomal{data.length === 1 ? "y" : "ies"}
                </span>
                <div className="flex items-center gap-2 text-xs text-gray-500">
                    <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                    >
                        <TrendingUp size={14} />
                    </motion.div>
                    Live Data
                </div>
            </div>
        </motion.div>
    );
}

export default AnomaliesTable;
