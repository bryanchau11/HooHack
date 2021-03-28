from azure.cognitiveservices.vision.computervision import ComputerVisionClient
from azure.cognitiveservices.vision.computervision.models import OperationStatusCodes
from azure.cognitiveservices.vision.computervision.models import VisualFeatureTypes
from msrest.authentication import CognitiveServicesCredentials

from array import array
import os
from PIL import Image
import sys
import time



subscription_key = "208dd5013492460096f4e1191358ffa3"
endpoint = "https://kiran.cognitiveservices.azure.com/"
computervision_client = ComputerVisionClient(endpoint, CognitiveServicesCredentials(subscription_key))

#local_image_path = "resources\\faces.jpg"
print("===== Detect Printed Text with OCR - local =====")

local_image_printed_text_path = "cdc.png"
local_image_printed_text = open(local_image_printed_text_path, "rb")

ocr_result_local = computervision_client.recognize_printed_text_in_stream(local_image_printed_text)
for region in ocr_result_local.regions:
    for line in region.lines:
       # print("Bounding box: {}".format(line.bounding_box))
        s = ""
        for word in line.words:
            s += word.text + " "
        print(s)
print()