import csv
from pathlib import Path
import os
import sys


print(Path(__file__))
base_path = Path(__file__).parent
print(type(base_path))
file_path = (base_path / "../Flask").resolve()
print(type(file_path))
sys.path.append(str(file_path))
print(sys.path)

