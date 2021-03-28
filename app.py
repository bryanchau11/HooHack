import pyqrcode
import png
from pyqrcode import QRCode

QRstring = "https://codd.cs.gsu.edu/~nchau1/HooHack/"
url = pyqrcode.create(QRstring)
url.png('qrcodeyoutube.png', scale = 8)


# import cv2
# d=cv2.QRCodeDetector()
# val, points, straight_qrcode = d.detectAndDecode(cv2.imread("hello.svg"))
# print(val)