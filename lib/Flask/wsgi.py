from application import create_app
import sys
from pathlib import Path

base_path = Path(__file__).parent.parent
sys.path.append(str(base_path))
print('SYS Path' ,sys.path)


app = create_app()

if __name__ == '__main__':
    app.run(debug=True, use_debugger=True, use_reloader=True)