from huggingface_hub import from_pretrained_keras
from copy import deepcopy
import nltk
import numpy as np
nltk.download('wordnet')
nltk.download('stopwords')
from nltk.corpus import stopwords
from nltk.stem import WordNetLemmatizer

model = from_pretrained_keras("tusharpuri10/moodmeter")
words = dict()

# Used if model stored in server instead of huggingface
# from tensorflow.keras.models import load_model
# model = load_model('model/')

def add_to_dict(d, filename):
  with open(filename,'r',encoding='utf-8') as f:
    for line in f.readlines():
      line = line.split(' ')

      try:
        d[line[0]]=np.array(line[1:],dtype=float)
      except:
        continue

add_to_dict(words,'glove.6B.50d.txt')

tokenizer = nltk.RegexpTokenizer(r"\w+")
lemmatizer = WordNetLemmatizer()

def message_to_token_list(s):
  tokens = tokenizer.tokenize(s)
  lowercased_tokens = [t.lower() for t in tokens]
  lemmatized_tokens = [lemmatizer.lemmatize(t) for t in lowercased_tokens]
  useful_tokens = [t for t in lemmatized_tokens if t in words]
  sw = stopwords.words('english')
  final_tokens = [t for t in  useful_tokens if t not in sw]
  return final_tokens

def message_to_word_vectors(message,word_dict=words):
  processed_list_of_tokens = message_to_token_list(message)

  vectors = []

  for token in processed_list_of_tokens:
    if token not in word_dict:
      continue
    
    token_vector = word_dict[token]
    vectors.append(token_vector)

  return np.array(vectors, dtype = float)

def pad_X(X, desired_sequence_length=40):
  X_copy = deepcopy(X)

  for i, x in enumerate(X):
    x_seq_len = x.shape[0]
    sequence_length_difference = desired_sequence_length - x_seq_len

    pad = np.zeros(shape=(sequence_length_difference,50))

    X_copy[i] = np.concatenate([x,pad])

  return np.array(X_copy).astype(float)

def get_label(tweet):
  return model.predict(pad_X([message_to_word_vectors(tweet)]))[0][0]

print(get_label("I am happy"))