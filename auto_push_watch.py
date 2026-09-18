import subprocess
import time
import os
import sys

# Force UTF-8 stdout on Windows
if sys.platform == "win32":
    import io
    sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8', errors='replace')

BASE_DIR = os.path.dirname(os.path.abspath(__file__))

print("=" * 65)
print("[Auto-Push] MektebPlus - Avtomatik Auto-Push Izleyicisi")
print(f"[Auto-Push] Qovluq: {BASE_DIR}")
print("[Auto-Push] Fayllarda deyisiklik olan kimi avtomatik commit ve push olunacaq.")
print("=" * 65)
sys.stdout.flush()

while True:
    try:
        res = subprocess.run(
            ["git", "status", "--porcelain"],
            capture_output=True,
            text=True,
            cwd=BASE_DIR
        )
        status = res.stdout.strip()
        
        if status:
            now = time.strftime("%Y-%m-%d %H:%M:%S")
            print(f"\n[{now}] Deyisiklik askarlandi:")
            print(status)
            sys.stdout.flush()
            
            time.sleep(2)
            
            subprocess.run(["git", "add", "."], cwd=BASE_DIR)
            subprocess.run(["git", "commit", "-m", f"auto: sync updates ({now})"], cwd=BASE_DIR)
            
            print(f"[{now}] GitHub ve Vercel-e push edilir...")
            sys.stdout.flush()
            
            push_res = subprocess.run(["git", "push", "origin", "main"], cwd=BASE_DIR)
            if push_res.returncode == 0:
                print(f"[{now}] UGURLU PUSH TAMAMLANDI! Sayt canli olaraq yenilendi.\n")
            else:
                print(f"[{now}] Push xetasi bas verdi.")
            sys.stdout.flush()
            
        time.sleep(3)
    except KeyboardInterrupt:
        print("\nIzleyici dayandirildi.")
        break
    except Exception as e:
        print("Xeta:", e)
        time.sleep(5)
