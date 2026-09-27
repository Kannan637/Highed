import sys
import os
import subprocess
import time

def main():
    print("=" * 60)
    print("  HIGHED E2E PLAYWRIGHT AUTOMATED TEST SUITE")
    print("=" * 60)

    tests_dir = os.path.dirname(os.path.abspath(__file__))
    start_time = time.time()

    cmd = [
        sys.executable,
        "-m",
        "pytest",
        tests_dir,
        "-v",
        "--tb=short"
    ]

    print(f"Running command: {' '.join(cmd)}\n")
    result = subprocess.run(cmd, cwd=tests_dir)
    elapsed = round(time.time() - start_time, 2)

    print("\n" + "=" * 60)
    if result.returncode == 0:
        print(f"  ALL TESTS PASSED SUCCESSFULLY in {elapsed}s")
    else:
        print(f"  TESTS COMPLETED WITH FAILURES (code: {result.returncode}) in {elapsed}s")
    print("=" * 60)

    sys.exit(result.returncode)

if __name__ == "__main__":
    main()
