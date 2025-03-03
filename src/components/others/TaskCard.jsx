import React from 'react';
import { TaskCardDetails } from '../../context/TaskContext';

const TaskCard = ({ data }) => {
  if (!data || !data.task_summary) {
    return <div>Loading...</div>; // Handle the case where data is not available
  }

  return (
    <div className='!mt-10 flex flex-wrap w-full gap-5 justify-center'>
      {TaskCardDetails.map((item, key) => (
        <div
          key={key}
          className={`flex w-2/6 flex-col gap-2.5 ${item.bgColour} !p-4 rounded-2xl shadow-4xl shadow-amber-400/90`}
        >
          <span className='text-white text-8xl'>{data.task_summary[item.cardTitle.toLowerCase()] ?? 0}</span>
          <span className='text-white text-5xl'>{item.cardTitle}</span>
        </div>
      ))}
    </div>
  );
};

export default TaskCard;











