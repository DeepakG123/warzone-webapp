import requests
from bs4 import BeautifulSoup

URL = 'https://cod.tracker.gg/warzone/articles/modern-warfare-warzone-s3-w7-challenges'
page = requests.get(URL)

soup = BeautifulSoup(page.content, 'html.parser')

#Find warzone weekly challenges
warzoneh2 = soup.find("h2", id = "warzone")
challenges = ""
for nextSibling in warzoneh2.findNextSiblings():
    if nextSibling.name == 'figure':
        break
    if nextSibling.name == 'ul':
        challenges = nextSibling

challenge_list = challenges.text.split("XP)")

for item in challenge_list:
    print(item + "XP)");
