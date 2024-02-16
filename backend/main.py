from flask import Flask,jsonify,request
import model
import scrapper

app = Flask(__name__)

# @app.route('/tweet/<string:n>')
@app.route('/tweet', methods=['POST'])
def hello():
    content = request.json
    label_tweet = model.get_label(content['text'])
    tweet = content['text']
    if label_tweet<0.45:    # cheerful
        label_tweet = 0
    else:                   # depressive
        label_tweet = 1
    
    result = {
        "label" : label_tweet
    }
    return jsonify(result)

@app.route('/user_tweet', methods=['POST'])
def hello2():
    content = request.json
    username = content['username']
    list_of_tweets = scrapper.get_tweets(username, 15)
    post_list = []
    for i in range(10):
        tweet = list_of_tweets[i][1]
        label_tweet = model.get_label(tweet)
        if label_tweet<0.1:
            label_tweet = 0
        else:
            label_tweet = 0
        result = {
        "label" : label_tweet
        }
        post_list.append(jsonify(result))

        final_result = {
            "tweets" : post_list
        }

        return jsonify(final_result)
    
    app.run(debug=True)