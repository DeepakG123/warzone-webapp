import requests
from bs4 import BeautifulSoup

URL = 'https://cod.tracker.gg/warzone/articles/modern-warfare-warzone-s3-w7-challenges'
page = requests.get(URL)

soup = BeautifulSoup(page.content, 'html.parser')

#Find warzone weekly challenges
warzoneh2 = soup.find("h2", id = "warzone")
uls = []
for nextSibling in warzoneh2.findNextSiblings():
    if nextSibling.name == 'figure':
        break
    if nextSibling.name == 'ul':
        uls.append(nextSibling)

for item in uls:
    print(item);
