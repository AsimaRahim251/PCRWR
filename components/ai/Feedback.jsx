import React, { useState } from 'react';
import './ai-feedback.css';

export default function Feedback() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    region: '',
    rating: 5,
    feedback: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Feedback submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', region: '', rating: 5, feedback: '' });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="feedback-container">
      <div className="feedback-header">
        <h2>💬 Apna Feedback Bhejein</h2>
        <p>Hamein aapke vichar ke baray mein maloom karna pasand hai</p>
      </div>

      {submitted ? (
        <div className="feedback-success">
          ✅ Shukriya! Aapka feedback receive ho gaya.
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="feedback-form">
          <div className="form-group">
            <label>Naam</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Apna naam likhen"
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="aapka@email.com"
            />
          </div>

          <div className="form-group">
            <label>Region</label>
            <select
              name="region"
              value={formData.region}
              onChange={handleChange}
              required
            >
              <option value="">Select region</option>
              <option value="punjab">Punjab</option>
              <option value="sindh">Sindh</option>
              <option value="kpk">KPK</option>
              <option value="balochistan">Balochistan</option>
            </select>
          </div>

          <div className="form-group">
            <label>Rating (1-5 stars)</label>
            <div className="rating">
              {[1, 2, 3, 4, 5].map(star => (
                <span
                  key={star}
                  onClick={() => setFormData(prev => ({ ...prev, rating: star }))}
                  className={`star ${star <= formData.rating ? 'active' : ''}`}
                >
                  ⭐
                </span>
              ))}
            </div>
          </div>

          <div className="form-group">
            <label>Feedback</label>
            <textarea
              name="feedback"
              value={formData.feedback}
              onChange={handleChange}
              required
              placeholder="Apna feedback likhen..."
              rows="5"
            />
          </div>

          <button type="submit" className="submit-btn">
            Feedback Bhejein
          </button>
        </form>
      )}
    </div>
  );
}
