import os
import requests

partners = {
    "Huawei": "huawei.com",
    "Alcatel-Lucent": "al-enterprise.com",
    "Ubiquiti": "ui.com",
    "TP-Link": "tp-link.com",
    "Nortal": "nortal.com",
    "Dell": "dell.com",
    "Aruba": "arubanetworks.com",
    "APC": "apc.com",
    "IBM": "ibm.com",
    "Cisco": "cisco.com",
    "Enterasys": "extremenetworks.com", # Acquired by Extreme
    "3Com": "hp.com", # Acquired by HP, might be hard, skipping or using HP
    "Foundry": "brocade.com", # Acquired
    "Microsoft": "microsoft.com",
    "HPE": "hpe.com",
    "Linksys": "linksys.com",
    "CommScope": "commscope.com",
    "Fortinet": "fortinet.com",
    "3M": "3m.com",
    "Juniper": "juniper.net",
    "Avaya": "avaya.com"
}

output_dir = "/home/dev/Downloads/clcc-website/src/assets/partners"

def download_logo(name, domain):
    url = f"https://logo.clearbit.com/{domain}"
    try:
        response = requests.get(url, timeout=10)
        if response.status_code == 200:
            file_path = os.path.join(output_dir, f"{name.lower().replace(' ', '-')}.png")
            with open(file_path, "wb") as f:
                f.write(response.content)
            print(f"Downloaded {name}")
        else:
            print(f"Failed to download {name}: Status {response.status_code}")
    except Exception as e:
        print(f"Error downloading {name}: {e}")

for name, domain in partners.items():
    download_logo(name, domain)
