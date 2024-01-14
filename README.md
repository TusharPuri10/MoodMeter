<a name="readme-top"></a>
# Depression Analysis by Tweets ( Model & Website )
* ` Depressive Tweets `
* ` Sentiment Analysis Website `
* ` Model based on Sequential LSTM `

[![Watch the video](https://img.youtube.com/vi/Q7uNHR1JHxk/0.jpg)](https://www.youtube.com/watch?v=Q7uNHR1JHxk)

# About The Project

This is a Python-based project for analyzing depressive tweets using Natural Language Processing (NLP) techniques. The goal of this project is to explore how people express their emotions related to depression on social media and to identify patterns and trends in their language usage.

This project also aims to broaden the scope of social media-based mental health measures and to build an algorithm that can predict text-based signs of depression using existing research that has proven the correlation between depression and specific linguistic features.

## Functionality
The tweets which user inputs are analyzed for their sentiment using an LSTM (Long Short-Term Memory) neural network and give label 'cheerful' or 'depressive' to the tweet.

# Getting Started

To use this project, you will need to follow these steps:

<hr>

### 1. Prerequisites

You will need to have the following software installed on your computer:

- Python 3.8.2
- Node.js
- npm

<hr>

### 2. Installing

1. Clone this repository to your local machine using
* `git clone https://github.com/TusharPuri10/DepressiveTweetsAnalysis.git`.

2. Navigate to the root directory of the project in your terminal or command prompt.

3. Set up a virtual environment. See [here](https://packaging.python.org/en/latest/guides/installing-using-pip-and-virtual-environments/) for more details. Don't forget to activate the virtual environment and then Install the required Python packages by running the following command:

* `pip install -r requirements.txt`

4. Navigate to the 'frontend' directory and install the required Node.js packages by running the following command:

* `npm install`
<hr>

### 3. Running the Application

1. In the 'backend' directory of the project, start the Flask server by running the following command:

* `python main.py`

2. In a separate terminal or command prompt window, navigate to the 'frontend' directory and build the React application by running the following command:

* `npm run build`

3. Start the React server by running the following command:

* `npm start`

4. Open your web browser and go to http://localhost:3000/ to access the application.
<hr>



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

### Dependencies
* Python 3.8.2
* Tensorflow
* Keras
* rest of them are listed in requirements.txt

### Design of website

![Design](https://user-images.githubusercontent.com/92613357/230445837-970acb89-12e1-4158-861e-d219514654bf.png)


## Contributing
If you want to contribute to this project, feel free to submit a pull request. Before doing so, please make sure that your changes are aligned with the project's goals and that they do not break the existing code.

## License
This project is licensed under the MIT License. Feel free to use, modify, and distribute it as you wish.




[Material.js]: https://img.shields.io/badge/Material--UI-0081CB?style=for-the-badge&logo=mui&logoColor=white
[Material-url]: https://mui.com/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Flask.js]: https://img.shields.io/badge/Flask-000000?style=for-the-badge&logo=flask&logoColor=white
[Flask-url]: https://flask.palletsprojects.com/en/2.2.x/

