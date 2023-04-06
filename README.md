<a name="readme-top"></a>
# Depression Analysis by Tweets ( Model & Website )
* ` Sentiment Analysis Website `
* ` Model based on Sequential LSTM `
* ` Under Development `


The Website uses sentiment analsyis to analyse the tweets and give label 'cheerful' or 'depressive' to the tweet.

<details>
  <summary>Table of Content</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ol>
        <li><a href="#A">Built With</a></li>
        <li><a href="#B">About the Deep Learning Model</a></li>
      </ol>
    </li>
    <li>
      <a href="#D">Project Phases</a>
      <ol>
        <li>
          <a href="#E">Building Model</a>
          <ol>
            <li><a href="#F">Gathering Data</a></li>
            <li><a href="#G">Preprocessing Data</a></li>
            <li><a href="#H">Building sentiment analysis model</a></li>
          </ol>
         </li>
         <li><a href="#H">Proposed Website Model</a></li>
      </ol>
    </li>
    <li><a href="#I">Challenges Faced</a></li>
    <li><a href="#J">Future Plan</a></li>
    <li><a href="#K">References</a></li>
  </ol>
</details>

## About The Project

The website uses a trained LSTM model to predict text-based signs of depression from the tweet and give a label according to it.

This project aims to broaden the scope of social media-based mental health measures and to build an algorithm that can predict text-based signs of depression using existing research that has proven the correlation between depression and specific linguistic features. At the same time I build a website using the same algorithm.

### Built With

#### Frontend
* [![React][React.js]][React-url]
* ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
* [![Material UI][Material.js]][Material-url]

#### Backend
* ![Firebase](https://img.shields.io/badge/Firebase-039BE5?style=for-the-badge&logo=Firebase&logoColor=white)
* ![Python](https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54)
* [![Flask][Flask.js]][Flask-url]
* ![Keras](https://img.shields.io/badge/Keras-%23D00000.svg?style=for-the-badge&logo=Keras&logoColor=white)
* ![TensorFlow](https://img.shields.io/badge/TensorFlow-%23FF6F00.svg?style=for-the-badge&logo=TensorFlow&logoColor=white)

### About the Deep Learning Model


![image](https://d1m75rqqgidzqn.cloudfront.net/2019/11/RNN.jpg)


Long short-term memory (LSTM) is a deep learning artificial recurrent neural network (RNN) architecture. Unlike traditional feedforward neural networks, LSTM has feedback connections. It can process not only single data points (such as photos), but also complete data sequences (such as speech or video).

![image](https://miro.medium.com/max/1100/1*cnKbQrqg2exJ-5fF6ea0tQ.webp)

I choose LSTM as my model because LSTM are particularly designed to have a long-term “memory” that is capable of understanding the overall context better than other neural networks.

[Material.js]: https://img.shields.io/badge/Material--UI-0081CB?style=for-the-badge&logo=mui&logoColor=white
[Material-url]: https://mui.com/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Flask.js]: https://img.shields.io/badge/Flask-000000?style=for-the-badge&logo=flask&logoColor=white
[Flask-url]: https://flask.palletsprojects.com/en/2.2.x/

