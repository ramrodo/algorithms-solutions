# https://leetcode.com/problems/encode-and-decode-tinyurl/description/

# class Codec:

#     def encode(self, longUrl):
#         """Encodes a URL to a shortened URL.
        
#         :type longUrl: str
#         :rtype: str
#         """
        

#     def decode(self, shortUrl):
#         """Decodes a shortened URL to its original URL.
        
#         :type shortUrl: str
#         :rtype: str
#         """
        

# Your Codec object will be instantiated and called as such:
# codec = Codec()
# codec.decode(codec.encode(url))


# SOLUTION: 

import hashlib


class Codec:
    def __init__(self):
        self.urls = {}

    def hash_to(self, s):
        return 'https://tin.e/' + hashlib.md5(s.encode()).hexdigest()

    def encode(self, long_url: str) -> str:  # Encodes a URL to a shortened URL.
        hash_key = self.hash_to(long_url)
        self.urls[hash_key] = long_url
        return hash_key
        
    def decode(self, short_url: str) -> str:  # Decodes a shortened URL to its original URL.
        return self.urls[short_url]

url = "https://leetcode.com/problems/design-tinyurl"

codec = Codec()
answer = codec.decode(codec.encode(url))
print("answer: {} - {}".format(answer, url == answer))
