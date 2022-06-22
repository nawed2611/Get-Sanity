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


@app.route('/survey', methods=["POST"])
def model():
    if request.method == 'POST':

        text2 = request.json
        print(text2)

        # Change path acc to your system
        pickled_model = pickle.load(open("C:\\Users\\Nawed Ali\\Documents\\GitHub\\mlh-mental-health\\vite-project\\model\\knn_model.pkl", 'rb'))
        temp = pickled_model.predict([[int(text2["1"]), int(text2["2"]), int(text2["3"]), int(text2["4"]), int(text2["5"]), int(text2["6"]), int(text2["7"]), int(text2["8"]), int(text2["9"]), int(text2["10"]), int(text2["11"]), int(text2["12"]), int(text2["13"]), int(text2["14"]), int(text2["15"]), int(text2["16"]), int(text2["17"])]])
        next = list(temp)
        answer = str(next[0])

        if answer == '0':
            return {"mood2": 'Normal'}
        elif answer == '1':
            return {"mood2": 'Loneliness'}
        elif answer == '2':
            return {"mood2": 'Anxiety'}
        elif answer == '3':
            return {"mood2": 'Stress'}
        elif answer == '4':
            return {"mood2": "Depression"}


app.run(debug=True)
