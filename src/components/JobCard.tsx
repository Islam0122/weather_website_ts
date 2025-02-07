import React from 'react';

interface JobCardProps {
  job: {
    organization_name: string;
    organization_icon: string;
    position: string;
    city: string;
    price_from: number;
    price_to: number;
    currency: string;
    type: string;
  };
}

const JobCard: React.FC<JobCardProps> = ({ job }) => {
  const salary =
    job.price_from && job.price_to
      ? `${job.price_from} - ${job.price_to} ${job.currency.toUpperCase()}`
      : 'Зарплата не указана';
  const city = job.city || 'Удалённая работа';
  const workType = job.type === 'office' ? 'Офис' : 'Удалённо';

  return (
    <div className="job-card">
      <div className="logo">
        <img src={job.organization_icon} alt={job.organization_name} />
      </div>
      <div className="company-info">
        <p className="label">Компания</p>
        <p className="value">{job.organization_name}</p>
      </div>
      <div className="job-details">
        <div className="card">
          <p className="label">Должность</p>
          <p className="value">{job.position}</p>
        </div>
        <div className="card">
          <p className="label">Город</p>
          <p className="value">{city}</p>
        </div>
        <div className="card">
          <p className="label">Зарплата</p>
          <p className="value">{salary}</p>
        </div>
        <div className="card">
          <p className="label">Тип работы</p>
          <p className="value">{workType}</p>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
