'use client';

import { useState } from 'react';

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  return (
    <div className="animate-fade-in-up">
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl blur opacity-0 hover:opacity-100 transition-opacity duration-300" />
        
        <form onSubmit={handleSubmit} className="relative bg-white/40 backdrop-blur-xl border border-white/20 rounded-2xl p-8 hover:bg-white/60 hover:border-primary/30 transition-all duration-300">
          <h3 className="text-2xl font-bold text-foreground mb-6">Send us a Message</h3>

          <div className="space-y-4">
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-white/50 border border-white/20 text-foreground placeholder-foreground/40 focus:outline-none focus:border-primary/50 focus:bg-white/70 transition-all duration-300"
                placeholder="Your name"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-white/50 border border-white/20 text-foreground placeholder-foreground/40 focus:outline-none focus:border-primary/50 focus:bg-white/70 transition-all duration-300"
                placeholder="your@email.com"
                required
              />
            </div>

            {/* Phone */}
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-white/50 border border-white/20 text-foreground placeholder-foreground/40 focus:outline-none focus:border-primary/50 focus:bg-white/70 transition-all duration-300"
                placeholder="+254 702 782 335"
              />
            </div>

            {/* Subject */}
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                Subject
              </label>
              <select
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-white/50 border border-white/20 text-foreground focus:outline-none focus:border-primary/50 focus:bg-white/70 transition-all duration-300"
                required
              >
                <option value="">Select a subject</option>
                <option value="enrollment">Program Enrollment</option>
                <option value="pricing">Pricing Inquiry</option>
                <option value="partnership">School Partnership</option>
                <option value="support">General Support</option>
              </select>
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="w-full px-4 py-3 rounded-lg bg-white/50 border border-white/20 text-foreground placeholder-foreground/40 focus:outline-none focus:border-primary/50 focus:bg-white/70 transition-all duration-300 resize-none"
                placeholder="Tell us more about your inquiry..."
                required
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full px-6 py-4 rounded-lg bg-gradient-to-r from-primary to-primary/80 text-primary-foreground font-bold hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 mt-6"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
