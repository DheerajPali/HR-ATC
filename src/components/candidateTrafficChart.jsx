import {
    BarChart,
    Bar,
    XAxis,
    Tooltip,
    ResponsiveContainer
  } from "recharts";
  
  const data = [
    { name: "Jan", red: 40, gray: 20, black: 10 },
    { name: "Feb", red: 50, gray: 30, black: 20 },
    { name: "Mar", red: 45, gray: 25, black: 15 },
    { name: "Apr", red: 60, gray: 20, black: 25 },
    { name: "May", red: 65, gray: 30, black: 30 },
    { name: "Jun", red: 50, gray: 25, black: 20 },
    { name: "Jul", red: 55, gray: 25, black: 30 },
    { name: "Aug", red: 60, gray: 30, black: 20 },
    { name: "Sep", red: 55, gray: 35, black: 25 },
    { name: "Oct", red: 70, gray: 30, black: 20 },
    { name: "Nov", red: 60, gray: 40, black: 25 },
    { name: "Dec", red: 50, gray: 20, black: 30 },
  ];
  
  const BarChartComponent = () => {
    return (
        <ResponsiveContainer width="100%" aspect={3}>
          <BarChart data={data} barCategoryGap={10} barGap={0} barSize={6}>
            <XAxis dataKey="name" />
            <Tooltip />
            <Bar dataKey="red" stackId="a" fill="#ef4444" radius={[4, 4, 0, 0]} />
            <Bar dataKey="gray" stackId="a" fill="#d1d5db" />
            <Bar dataKey="black" stackId="a" fill="#000000" />
          </BarChart>
        </ResponsiveContainer>
    );
  };
  
  export default BarChartComponent;
  