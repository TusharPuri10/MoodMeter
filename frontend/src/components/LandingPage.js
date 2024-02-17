import '../styles/LandingPage.css';
import Hero from './Hero';
import Features from './Features';
import ProjectAbout from './ProjectAbout';
import CallToAction from './CallToAction';
import { useNavigate } from "react-router-dom";
import { useUser } from '@clerk/clerk-react';

export function LandingPage() {
  const navigate = useNavigate();
  const user = useUser();
  return (
    <div className='custom-background'>
      <Hero
        title="MoodMeter: Depressive Tweet Analysis"
        subtitle="Transforming Social Media Insights into Actionable Mental Health Understanding"
        image="/hero.png"
        buttons={[
          { text: 'v1', onClick: () => navigate('/v1/home')},
          { text: 'v2', onClick: () => navigate('/v2')},
        ]}
        user={user}
      />

      <Features
        title="Why MoodMeter?"
        features={[
          {
            title: "Understand Public Mood",
            content: "Analyze collective emotions and identify trends in depressive behavior on social media.",
          },
          {
            title: "Support Loved Ones",
            content: "Help friends and family by identifying potential signs of depression and encouraging professional help.",
          },
          {
            title: "Empower Mental Health Research",
            content: "Contribute to scientific research on mental health and social media by providing anonymized data.",
          },
        ]}
      />

      <ProjectAbout
        title="About MoodMeter"
        content="MoodMeter is a cutting-edge SaaS platform that uses advanced AI and machine learning algorithms to analyze depressive tendencies in social media posts. Our mission is to promote mental health awareness, support individuals in need, and contribute to the growing body of research on mental health in the digital age."
      />

      <CallToAction
        title="Join the MoodMeter Community Today"
        ctaText="Get Started"
        image="/cta.png"
      />
    </div>
  );
}