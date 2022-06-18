from tracemalloc import reset_peak
from flask import Flask, request, render_template
import paralleldots
from flask_cors import CORS, cross_origin
import pickle
import os


app = Flask(__name__)
CORS(app, support_credentials=True)

paralleldots.set_api_key("bwQrWhxsrnOZS57WuO93Ohowv6giQt7EPBTwOhtm2BI")


@app.route('/', methods=["POST", "GET"])
@cross_origin(supports_credentials=True)
def home():
    if request.method == 'POST':

        text = request.json

        # for single sentence
        lang_code = "en"
        response = paralleldots.sentiment(text["title"], lang_code)

        # converting nested dictionary to simple dictionary
        modified_response = response['sentiment']

        # finding max value from positive, negative, neutral
        mood_type = max(modified_response, key=lambda x: modified_response[x])

        return {"mood": mood_type}
    else:
        return {"mood": "no response"}


@app.route('/survey')
def model():
    pickled_model = pickle.load(open("//Users//arshad//Desktop//Projects//mlh-mental-health-hacks//model//knn_model.pkl", 'rb'))
    temp = pickled_model.predict([[0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0]])
    next = list(temp)
    answer = str(next[0])

    if answer == '0':
        return 'Normal'
    elif answer == '1':
        return 'Loneliness'
    elif answer == '2':
        return 'Anxiety'
    elif answer == '3':
        return 'Stress'
    elif answer == '4':
        return "Depression"


app.run(debug=True)
