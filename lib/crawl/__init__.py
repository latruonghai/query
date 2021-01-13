
from pathlib import Path
import sys



base_path = Path(__file__).parent


sys.path.append(str(base_path))
# print(sys.path)

from Crawl import Crawl