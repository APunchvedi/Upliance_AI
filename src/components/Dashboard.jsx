import Counter from './Counter'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const Dashboard = () => {
  const data = [
  { name: 'Jan', users: 100 },
  { name: 'Feb', users: 400 },
  { name: 'Mar', users: 200 },
  { name: 'Apr', users: 600 },
  { name: 'May', users: 300 },
  { name: 'June', users: 700 },
  { name: 'July', users: 400 },
  { name: 'Aug', users: 800 },
  { name: 'Sep', users: 500 },
  { name: 'Oct', users: 900 },
  { name: 'Nov', users: 600 },
  { name: 'Dec', users: 100 },
  ]

  return (
    <div className="flex items-center justify-center h-screen p-10">
      <LineChart width={700} height={300} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" interval={0} />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="basis" dataKey="users" stroke="#8884d8" strokeWidth={2} dot={false} />
      </LineChart>
      <Counter />
    </div>
  )
}

export default Dashboard
