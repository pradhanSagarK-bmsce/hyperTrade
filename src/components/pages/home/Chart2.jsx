import React from 'react';
import { useSelector } from 'react-redux';
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    Tooltip,
    Legend,
    ResponsiveContainer,
    CartesianGrid
} from 'recharts';

const Chart2 = () => {
    const themeMode = useSelector((state) => state.theme.mode);

    // Sample data for the chart
    const data = [
        { month: 'Jan', revenue: 100000, profit: 35000 },
        { month: 'Feb', revenue: 120000, profit: 45000 },
        { month: 'Mar', revenue: 130000, profit: 75000 },
        { month: 'Apr', revenue: 120000, profit: 20000 },
        { month: 'May', revenue: 100000, profit: 30000 },
        { month: 'Jun', revenue: 200000, profit: 40000 },
        { month: 'Jul', revenue: 100000, profit: 10000 },
        { month: 'Aug', revenue: 140000, profit: 40000 },
        { month: 'Sep', revenue: 150000, profit: 40000 },
        { month: 'Oct', revenue: 175000, profit: 35000 },
        { month: 'Nov', revenue: 200000, profit: 23500 },
        { month: 'Dec', revenue: 100000, profit: 50000 },
    ];

   
    const areaColors = {
        light: {
            revenue: '#6ab04c',
            profit: '#2980b9',
        },
        dark: {
            revenue: '#0088FE',
            profit: '#00C49F',
        },
    };


    const currentColors = themeMode === 'theme-mode-dark' ? areaColors.dark : areaColors.light;

    return (
        <div className="h-full w-full">
            <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    {/* <CartesianGrid strokeDasharray="3 3" stroke={themeMode === 'theme-mode-dark' ? '#333' : '#ccc'} /> */}
                    <XAxis dataKey="month" stroke={themeMode === 'theme-mode-dark' ? '#fff' : '#7a7a7a'} />
                    <YAxis stroke={themeMode === 'theme-mode-dark' ? '#fff' : '#7a7a7a'} />
                    <Tooltip
                        contentStyle={{
                            backgroundColor: themeMode === 'theme-mode-dark' ? '#2d2d2d' : '#fff',
                            color: themeMode === 'theme-mode-dark' ? '#fff' : '#000',
                            borderRadius: '8px',
                        }}
                    />
                    <Legend />
                    <Area
                        type="monotone"
                        dataKey="revenue"
                        stackId="1"
                        stroke={currentColors.revenue}
                        fill={currentColors.revenue}
                        fillOpacity={0.4}
                        isAnimationActive={true}
                    />
                    <Area
                        type="monotone"
                        dataKey="profit"
                        stackId="0"
                        stroke={currentColors.profit}
                        fill={currentColors.profit}
                        fillOpacity={0.5}
                        isAnimationActive={true}
                    />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Chart2;
