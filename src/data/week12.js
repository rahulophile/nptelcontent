// src/data/week12.js

// This file contains the complete study material for Week 12.

export const week12Content = {
  id: 12,
  mainTitle: 'Week 12: Advanced Scanning with NMAP & Wireshark',
  topics: [
    // =========================================
    // IMPORTANT TOPICS
    // =========================================
    {
        title: 'NMAP Host Discovery (Ping Sweep)',
        label: 'Important',
        description: 'Host discovery ka matlab hai yeh pata lagana ki ek IP address par koi device active hai ya nahi. NMAP iske liye kai alag-alag techniques istemaal karta hai.',
        subSections: [
            {
                title: '1. ICMP Echo Sweep (-PE)',
                content: ['(Question 1): Yeh sabse aam "ping" hai. NMAP, target ko ek ICMP Type 8 (Echo Request) packet bhejta hai.'],
                example: '(Question 2): Agar target zinda (alive) hai, to woh ek ICMP Type 0 (Echo Reply) packet wapas bhejta hai. Is reply ke milne par NMAP samajh jaata hai ki host alive hai.'
            },
            {
                title: '2. ICMP Timestamp Sweep (-PP) & Address Mask Sweep (-PM)',
                content: ['Kai firewalls normal ping (Type 8) ko block kar dete hain. Usse bachne ke liye, NMAP alag tarah ke ICMP packets bhejta hai - Timestamp Request (Type 13) ya Address Mask Request (Type 17). Inka jawab aane par bhi host "alive" maana jaata hai.'],
            },
            {
                title: 'Skip Host Discovery (-Pn)',
                content: ['(Question 4): Kabhi-kabhi aapko pakka pata hota hai ki target zinda hai, lekin woh sabhi tarah ke pings ko block kar raha hai. Aise mein, aap NMAP ko -Pn option ke saath bolte ho: "Host discovery skip kar do. Maan lo ki saare hosts zinda hain aur seedha port scan shuru karo."'],
            }
        ]
    },
    {
        title: 'NMAP Port Scanning (Darwaze Check Karna)',
        label: 'Important',
        description: 'Ek baar pata chal jaaye ki host zinda hai, NMAP uske ports (darwaze) check karta hai.',
        subSections: [
            {
                title: 'Default Scan Ports',
                content: ['(Question 3): Jab aap koi specific port nahi batate, to NMAP by default sabse common 1000 TCP ports ko scan karta hai.'],
            },
            {
                title: 'Scan Techniques',
                content: [
                    'TCP Connect Scan (-sT): (Question 5) Yeh poora 3-way handshake complete karta hai. Iske liye special permissions nahi chahiye, lekin ise detect karna bahut aasaan hai.',
                    'TCP SYN Scan (-sS): Yeh "half-open" scan hai. Yeh handshake poora nahi karta, isliye zyada stealthy hai. Yeh default scan hai (agar root user hain).',
                    'FIN (-sF), NULL (-sN), XMAS (-sX) Scans: Yeh aur bhi zyada stealthy scans hain. Yeh ajeeb tarah ke flags wale packets bhejte hain jinka jawab sirf closed ports dete hain.'
                ],
                isList: true
            },
            {
                title: 'Service & Version Detection (-sV)',
                content: ['(Question 8): Yeh NMAP ka ek bahut hi powerful feature hai. Yeh port par chal rahi service (application) se baat-cheet karke uska naam (Apache) aur version (2.4.41) pata lagata hai. Version pata chalna bahut zaroori hai kyunki uski known vulnerabilities dhoondhi jaa sakti hain.'],
            },
            {
                title: 'OS Discovery (-O)',
                content: ['(Question 7): NMAP alag-alag tarah ke packets bhejkar target ke jawab dene ke tareeke ko "fingerprint" karta hai. Har OS ka TCP/IP stack thoda alag behave karta hai. Is aadhar par NMAP andaza lagata hai ki target par kaun sa OS chal raha hai.'],
            },
            {
                title: 'Specific Port Scan Options',
                content: [
                    '(Question 9):',
                    '-p 80,443: Sirf port 80 aur 443 scan karo.',
                    '-p 1-100: 1 se 100 tak saare port scan karo.',
                    '--top-ports 10: Sabse common 10 ports scan karo.'
                ],
                isList: true
            }
        ]
    },
    {
        title: 'Wireshark - Network ki Rooh',
        label: 'Important',
        description: '',
        subSections: [
            {
                title: 'Wireshark ka Kaam',
                content: ['Wireshark ek packet sniffer aur network protocol analyzer hai. Yeh aapke network card ko Promiscuous Mode (Question 6) mein daal kar network par chal rahe saare data packets ko capture karta hai.'],
            },
            {
                title: 'Captured Data Format',
                content: ['(Question 10): Wireshark captured packets ko by default .pcapng (PCAP Next Generation) format mein save karta hai. Purana format .pcap tha. Yeh standard formats hain jinhe doosre network analysis tools bhi samajh sakte hain.'],
            }
        ]
    },
    // =========================================
    // LESS IMPORTANT TOPICS
    // =========================================
    {
      title: 'NMAP Host Discovery ki Advanced Techniques',
      label: 'Less Important',
      description: 'Jab firewall ICMP sweep ko block kar de, tab NMAP kuch aur chalaak tareeke istemaal karta hai.',
      subSections: [
        {
          title: 'TCP Sweep (SYN -PS & ACK -PA)',
          content: ['Normal ping "main gate" par dastak dene jaisa hai. TCP Sweep, ghar ke kisi khaas "kamre ke darwaze" (specific port) par dastak dene jaisa hai. Agar wahan se SYN-ACK ya RST ka jawab aata hai, to NMAP samajh jaata hai ki host zinda hai.'],
        },
        {
          title: 'UDP Sweep (-PU)',
          content: ['Yeh sabse "unreliable" tareeka hai. NMAP ek UDP packet bhejta hai. Agar port band hai, to OS ek ICMP Port Unreachable error wapas bhejta hai. Is error ke milne ka matlab hai ki host zinda hai.'],
        }
      ],
    },
    {
      title: 'Wireshark ka Practical Use - Ek Deep Dive',
      label: 'Less Important',
      description: '',
      subSections: [
        {
            title: 'Wireshark ki Screen ke 3 Hisse',
            content: [
                '1. Packet List Pane (Summary View): Capture kiye gaye saare packets ki ek list.',
                '2. Packet Details Pane (Anatomy View): Kisi packet par click karne par uski poori "anatomy" khul jaati hai (Ethernet, IP, TCP layers).',
                '3. Packet Bytes Pane (Raw View): Packet ka asli raw data Hexadecimal aur ASCII format mein.'
            ],
            isList: true
        },
        {
          title: 'Capture Filter vs. Display Filter',
          content: [
              'Capture Filter: Capture shuru karne se pehle set kiya jaata hai. Jaise, "Sirf TCP packets ko hi record karo."',
              'Display Filter: Capture karne ke baad use kiya jaata hai. Jaise, "Hazaron packets mein se mujhe sirf http wale packets dikhao."'
          ],
          isList: true
        },
        {
            title: 'Follow TCP/HTTP Stream',
            content: ['Yeh option saare bikhre hue packets ko jod kar aapko ek poori "conversation" dikha deta hai, bilkul ek chat window ki tarah. Agar communication unencrypted hai, to aap is stream mein username aur password saaf-saaf padh sakte ho.']
        },
        {
            title: 'Coloring Rules',
            content: ['Wireshark alag-alag tarah ke traffic ko aasaani se pehchanne ke liye alag-alag rangon ka istemaal karta hai (jaise TCP green, UDP blue, Errors red/black).']
        }
      ],
    },
  ],
};