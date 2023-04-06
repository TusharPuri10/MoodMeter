# import csv
# from getpass import getpass
from time import sleep
# import selenium
from selenium import webdriver
from selenium.webdriver.common.by import By
# from selenium.webdriver.common.keys import Keys
from selenium.common.exceptions import NoSuchElementException
# from selenium.webdriver.common.action_chains import ActionChains

def get_tweetcard_data(username,card):
    """Extract data from tweet"""
    # UserTag = card.find_element(By.XPATH,".//span[contains(text(),'@')]").text
    # if "@"+username!=UserTag:
    #     return
    # try:
    #     TimeStamp = card.find_element(By.XPATH,".//time").get_attribute('datetime')
    # except NoSuchElementException:
    #     return
    displayname = card.find_element(By.XPATH,".//div[@data-testid='User-Names']").text
    Tweet = card.find_element(By.XPATH,".//div[@data-testid='tweetText']").text
    # Reply = card.find_element(By.XPATH, ".//div[@data-testid='reply']").text
    # reTweet = card.find_element (By .XPATH, ".//div[@data-testid='retweet']").text
    # Like =card.find_element (By.XPATH,".//div[@data-testid='like']").text

    tweet = (displayname,Tweet)
    return tweet


def get_tweets(username, num):
    #Creating instance of webdriver
    PATH = "C:\Program Files\webdrivers\chromedriver.exe"
    driver = webdriver.Chrome(PATH)
    driver.get("https://www.twitter.com/"+username)
    sleep(3)

    #Get all the tweets in the page
    tweet_data=[]
    tweet_ids=set()
    last_position = driver.execute_script("return window.pageYOffset;")
    scrolling = True

    while scrolling:
        cards = driver.find_elements(By.XPATH,"//article[@data-testid='tweet']")
        for card in cards[:7]:
            data = get_tweetcard_data(username,card)
            if data:
                tweet_id = ''.join(data)
                if tweet_id not in tweet_ids:
                    tweet_ids.add(tweet_id)
                    tweet_data.append(data)

        scroll_attempt = 0
        while True:
            #check scroll position
            driver.execute_script("window.scrollTo(0, document.body.scrollHeight);")
            sleep(1)
            curr_position = driver.execute_script("return window.pageYOffset;")
            if(last_position==curr_position):
                scroll_attempt += 1

                # end of scroll region
                if scroll_attempt >= 3:
                    scrolling = False
                    break
                else:
                    sleep(2)
            else:
                last_position = curr_position
                break
        if(len(tweet_ids)>num):
            break
    return tweet_data
