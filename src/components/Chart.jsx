import { Bar, BarChart, CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from "recharts";


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
                <CartesianGrid stroke="green" strokeDasharray="5 5" ></CartesianGrid>
                <XAxis dataKey="name"></XAxis>
                <YAxis dataKey="marks"></YAxis>
                <Tooltip></Tooltip>
            </LineChart>
            <BarChart width={600} height={300} data={data}>
                <XAxis dataKey="name" stroke="#8884d8" />
                <YAxis dataKey="marks" />
                <Tooltip wrapperStyle={{ width: 100, backgroundColor: '#ccc' }} />
                <Legend width={100} wrapperStyle={{ top: 40, right: 20, backgroundColor: '#f5f5f5', border: '1px solid #d5d5d5', borderRadius: 3, lineHeight: '40px' }} />
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                <Bar dataKey="name" fill="red" barSize={30} />
            </BarChart>

            <BarChart width={830} height={250} data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="marks" fill="#8884d8" />
                <Bar dataKey="id" fill="#82ca9d" />
            </BarChart>
        </div>
    );
};

export default Chart;