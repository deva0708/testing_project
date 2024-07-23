import React, { useState } from 'react';
import ChildformComponent from './ChildformComponent';

const ParentformComponent = () => {
  const [formData, setFormData] = useState({ username: 'admin', password: 'admin1' });
  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData(formData);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      {submittedData && <ChildformComponent data={submittedData} />}
    </div>
  );
};

export default ParentformComponent;