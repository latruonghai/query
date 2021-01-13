import sys
from pathlib import Path
import os

#print(Path(__file__))
base_path = Path(__file__).parent.parent
file_path = (base_path / '..').resolve()
# file_path1 = (base_path / '../crawl').resolve()
#print(file_path)
sys.path.append(str(file_path))
sys.path.append(str(base_path))
# sys.path.append(str(file_path1))
print(sys.path)
path_new = sys.path
# import Preprocessing