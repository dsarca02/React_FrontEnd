import React, { useState } from 'react';
import './Symptom.css';


const Symptom = ({ symptomName }) => {
  const [selected, setSelected] = useState(false);
  const [intensity, setIntensity] = useState(1);
  const [duration, setDuration] = useState('');

  const handleCheckbox = (event) => {
    setSelected(event.target.checked);
  };

  const handleIntensityChange = (event) => {
    setIntensity(event.target.value);
  };

  const handleDurationChange = (event) => {
    setDuration(event.target.value);
  };

  return (
    <div className="symptom">
      <label>
        <input
          type="checkbox"
          checked={selected}
          onChange={handleCheckbox}
        />
        {symptomName}
      </label>
      {selected && (
        <div>
          <label>
            Intensity:
            <select value={intensity} onChange={handleIntensityChange}>
              {[...Array(10).keys()].map(i => (
                <option key={i + 1} value={i + 1}>{i + 1}</option>
              ))}
            </select>
          </label>
          <label>
            Duration:
            <select value={duration} onChange={handleDurationChange}>
              <option value="">Select duration</option>
              <option value="less_than_one_day">Less than one day</option>
              <option value="up_to_one_week">Up to one week</option>
              <option value="more_than_one_week">More than one week</option>
            </select>
          </label>
        </div>
      )}
    </div>
  );
};

export default Symptom;
