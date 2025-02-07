import React, { useEffect, useState } from 'react';
import Header from './components/Header.tsx';
import Footer from './components/Footer.tsx';
import JobCard from './components/JobCard.tsx';
import './App.css';

interface Job {
  id: number;
  organization_name: string;
  organization_icon: string;
  position: string;
  city: string;
  price_from: number;
  price_to: number;
  currency: string;
  type: string;
}

const App: React.FC = () => {
  const [jobs, setJobs] = useState<Job[]>([]);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch('https://devkg.com/api/pages/jobs?page=1');
        const data = await response.json();
        setJobs(data.result.list);
      } catch (error) {
        console.error('Ошибка при загрузке данных:', error);
      }
    };

    fetchJobs();
  }, []);

  return (
    <div className='container'>
      <Header />
      <section className="container">
        <div className="job-cards">
          {jobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default App;
