import Layout from './Dashboard/layout';
import Navbar from '../Components/Navbar';
import Sidebar from '../Components/Sidebar';
import Card from '../Components/Card';

export default function Home() {
  return (
    <div>
      <Navbar />
      <Layout />
      <Sidebar />
      <Card />
    </div>
  );
}
