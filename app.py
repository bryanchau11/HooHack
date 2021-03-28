import pyqrcode
import png
from pyqrcode import QRCode

QRstring = "https://codd.cs.gsu.edu/~nchau1/HooHack/profile.html"
url = pyqrcode.create(QRstring)
url.png('user.png', scale = 8)


