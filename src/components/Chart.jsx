import { Line, LineChart, Tooltip, XAxis, YAxis } from "recharts";


const Chart = () => {
    const data = [
        { id: 1, name: "Alice", marks: 75, subject: "Mathematics" },
        { id: 2, name: "Bob", marks: 80, subject: "Mathematics" },
        { id: 3, name: "Charlie", marks: 85, subject: "Mathematics" },
        { id: 4, name: "David", marks: 82, subject: "Mathematics" },
        { id: 5, name: "Ella", marks: 78, subject: "Mathematics" },
        { id: 6, name: "Frank", marks: 83, subject: "Mathematics" },
        { id: 7, name: "Grace", marks: 90, subject: "Mathematics" },
        { id: 8, name: "Hannah", marks: 85, subject: "Mathematics" },
        { id: 9, name: "Ian", marks: 87, subject: "Mathematics" },
        { id: 10, name: "Jack", marks: 89, subject: "Mathematics" }
      ];
    return (
        <div>
            <LineChart width={800} height={300} data={data}>
                <Line type="monotone" dataKey="marks" stroke="#8884d8" />
                <Line type="monotone" dataKey="id" stroke="#8884d8" />
                <XAxis dataKey="name"></XAxis>
                <YAxis dataKey="marks"></YAxis>
                <Tooltip></Tooltip>
            </LineChart>
        </div>
    );
};

export default Chart;