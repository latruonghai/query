import sys
from pathlib import Path
import os

#print(Path(__file__))
base_path = Path(__file__).parent.parent
file_path = (base_path / '../preproccessing').resolve()
#print(file_path)
sys.path.append(str(file_path))
#print(sys.path)
path_new = sys.path
import Preprocessing