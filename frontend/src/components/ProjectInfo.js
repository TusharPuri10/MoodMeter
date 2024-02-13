import React from "react";
import '../styles/ProjectInfo.css'

const ProjectInfo = () => {
  return (
    <div className="project-info">
      <h2>Gathering Data</h2>
      <p>
        Utilized Python with Selenium library for web scraping to collect recent
        depressive tweets from Twitter. Scraped 2307 tweets, including hashtags
        like #depression, #suicide, #anxiety. Cleaned data by removing tweets
        with more than three hashtags. Combined the dataset with the Sentiment
        140 dataset, labeling depressive tweets as 1 and others as 0.
      </p>

      <h2>Preprocessing Data</h2>
      <p>
        Generated word clouds for cheerful and depressive tweets to gain
        insights. Removed useless words based on word cloud insights. Split
        dataset into training and testing parts.
      </p>

      <h2>Building Sentiment Analysis Model</h2>
      <p>
        Used TensorFlow and Keras to create a sequential LSTM-based model.
        Imported Glove embedding vector for word mapping. Preprocessed dataset
        using tokenization, removal of stop words, and stemming with NLTK.
        Balanced the unbalanced dataset by giving more weight to depressive
        tweets during training. Achieved satisfactory accuracy.
      </p>

      <h2>Proposed Website Model</h2>
      <p>
        Used React JS for the frontend, Firebase for the database, and Flask for
        the backend (REST API). Frameworks such as axios and core-ui were also
        employed. Proposed website model includes features for analyzing tweets.
      </p>

      <h2>Result and Discussion</h2>
      <p>
        Tweet functionality is working correctly, but username functionality
        needs fixing. The model is accurate, but struggles with tricky
        statements; adjustments are needed. Model refinement required with
        additional datasets from past years and more effective dataset cleaning.
        Various frontend issues should be resolved.
      </p>

      <h2>GitHub Repository</h2>
      <p>
        <a
          href="https://github.com/TusharPuri10/MoodMeter"
          target="_blank"
          rel="noopener noreferrer"
        >
          MoodMeter
        </a>
      </p>
    </div>
  );
};

export default ProjectInfo;