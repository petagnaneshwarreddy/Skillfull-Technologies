// src/pages/Services.js

import React from 'react';
import './Services.css'; // For styling
import aiIcon from '../images/logo.png';
import mobileIcon from '../images/logo.png'; // Assume you have these icon files
import cloudIcon from '../images/logo.png';
import webDevIcon from '../images/logo.png';

const Services = () => {
  return (
    <div className="services-container">
      {/* "What We Offer" section */}
      <section className="services-intro">
        <h2>What We Offer</h2>
        <p>Comprehensive technology solutions designed to accelerate your digital transformation and drive sustainable business growth through innovative engineering.</p>
      </section>

      {/* AI & Machine Learning section (left-aligned) */}
      <section className="service-item left-aligned">
        <div className="service-icon">
          <img src={aiIcon} alt="AI & Machine Learning Icon" />
        </div>
        <div className="service-details">
          <h3>AI & Machine Learning</h3>
          <h4>Intelligent Solutions</h4>
          <p className="service-description">
            We harness the power of artificial intelligence and machine learning to create intelligent solutions that drive business value. Our AI expertise spans from data analysis to computer vision and natural language processing.
          </p>
          <h4>Our Approach</h4>
          <p className="service-approach">
            Our AI development process starts with data assessment and problem definition. We employ advanced algorithms and neural networks, combined with rigorous testing and validation, to deliver AI solutions that provide measurable business impact.
          </p>
          <h4>Technologies & Tools</h4>
          <ul className="tech-list">
            <li>Predictive Analytics</li>
            <li>Computer Vision Systems</li>
            <li>Natural Language Processing</li>
            <li>Recommendation Engines</li>
          </ul>
        </div>
      </section>

      {/* Mobile Development section (right-aligned) */}
      <section className="service-item right-aligned">
        <div className="service-details">
          <h3>Mobile Development</h3>
          <h4>Modern Digital Experiences</h4>
          <p className="service-description">
            Our mobile development team creates intuitive and powerful mobile applications for iOS and Android, focusing on a seamless user experience. We ensure top performance, security, and user engagement.
          </p>
          <h4>Our Approach</h4>
          <p className="service-approach">
            Our mobile development process starts with user persona development, to wireframe. We provide creative prototyping, intuitive design, and seamless development with rigorous quality assurance.
          </p>
          <h4>Technologies & Tools</h4>
          <ul className="tech-list">
            <li>iOS Development</li>
            <li>Android Development</li>
            <li>React Native</li>
            <li>Flutter</li>
          </ul>
        </div>
        <div className="service-icon">
          <img src={mobileIcon} alt="Mobile Development Icon" />
        </div>
      </section>

      {/* Web Development section (left-aligned) */}
      <section className="service-item left-aligned">
        <div className="service-icon">
          <img src={webDevIcon} alt="Web Development Icon" />
        </div>
        <div className="service-details">
          <h3>Web Development</h3>
          <h4>Modern Digital Experiences</h4>
          <p className="service-description">
            At Skillfull Technologies, we craft exceptional web experiences that combine cutting-edge technology with user-centric design. Our full-stack expertise ensures your website is not only visually stunning but also fast, secure, and scalable.
          </p>
          <h4>Our Approach</h4>
          <p className="service-approach">
            We prioritize an agile development methodology, starting with thorough requirement analysis and user story mapping. Our full-stack approach guarantees seamless integration between the front-end and back-end for robust and scalable solutions.
          </p>
          <h4>Technologies & Tools</h4>
          <ul className="tech-list">
            <li>React & Redux</li>
            <li>Node.js & Express</li>
            <li>MongoDB & GraphQL</li>
            <li>Cloud Functions</li>
          </ul>
        </div>
      </section>

      {/* Cloud Solutions section (right-aligned) */}
      <section className="service-item right-aligned">
        <div className="service-details">
          <h3>Cloud Solutions</h3>
          <h4>Scalable Infrastructure</h4>
          <p className="service-description">
            Skillfull Technologies specializes in designing and implementing robust cloud infrastructure that optimizes performance and scalability. We migrate your data to the cloud and ensure a secure and high-performance solution for you.
          </p>
          <h4>Our Approach</h4>
          <p className="service-approach">
            Our cloud strategy begins with a comprehensive assessment of your current infrastructure. We design and implement a tailored cloud architecture, focusing on optimizing cost, improving performance, and maximizing system's uptime and reliability.
          </p>
          <h4>Technologies & Tools</h4>
          <ul className="tech-list">
            <li>AWS & Azure</li>
            <li>Microservices</li>
            <li>Data Lakes & Data Gov</li>
            <li>Serverless Computing</li>
          </ul>
        </div>
        <div className="service-icon">
          <img src={cloudIcon} alt="Cloud Solutions Icon" />
        </div>
      </section>
    </div>
  );
};

export default Services;