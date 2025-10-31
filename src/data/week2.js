// src/data/week2.js

// This file contains the complete study material for Week 2, structured for the application.

export const week2Content = {
  id: 2,
  mainTitle: 'Week 2: IP Fragmentation & Advanced Networking',
  topics: [
    // =========================================
    // IMPORTANT TOPICS (PRIORITY 1, 2, 3)
    // =========================================
    {
        title: 'IP Packet Fragmentation (Packet ke Tukde Karna)',
        label: 'Important',
        description: 'Internet alag-alag tarah ke raaston (networks) se milkar bana hai. Har raaste ki apni ek "capacity" ya "limit" hoti hai ki woh ek baar mein kitna bada data packet le jaa sakta hai. Is limit ko MTU (Maximum Transmission Unit) kehte hain.',
        subSections: [
            {
                title: 'Why do we need fragmentation? (Zaroorat kyun padti hai?)',
                content: [
                    'Problem: Jab ek bada packet (e.g., 1500 bytes) ek aise raaste se guzarta hai jiska MTU chhota hai (e.g., 600 bytes), toh woh packet us raaste se aage nahi jaa paata.',
                    'Samadhan (Solution): Is problem ko solve karne ke liye, network ke routers us bade packet ko chote-chote tukdon (fragments) mein tod dete hain, taaki woh chote MTU wale raaste se aasani se nikal jaayein. Manzil (destination) par pahunch kar yeh saare tukde fir se jod diye jaate hain.'
                ],
                example: 'Socho aapko ek bada sa sofa (packet) apne ghar se dost ke ghar bhejna hai. Lekin raaste mein ek aisi tang gali (network with small MTU) aati hai jiske darwaze se poora sofa ek saath nahi nikal sakta. Aap kya karoge? Aap sofa ke parts (legs, cushions) ko alag-alag karoge (fragmentation), unhe ek-ek karke gali se paar karoge, aur dost ke ghar jaakar unhe wapas jod doge (reassembly).'
            },
            {
                title: 'How does fragmentation work? (Tukde Jodne ka Process)',
                content: [
                    'Jab packet ke tukde hote hain, to receiver ko kaise pata chalta hai ki yeh saare tukde ek hi packet ke hain, inhe kis order mein jodna hai, aur aakhri tukda kaun sa hai? Iske liye IP Header mein 3 khaas fields hote hain:'
                ],
            },
            {
                title: '1. Identification (ID)',
                content: ['Jab ek packet ko toda jaata hai, to uske saare tukdon par ek same ID number laga diya jaata hai. Yeh "Group ID" ki tarah kaam karta hai.'],
                example: 'Agar ek 1500 byte ke packet (jiska ID=101) ke 3 tukde hue, to teeno tukdon ka ID number 101 hi hoga. Isse receiver ko pata chal jaata hai ki yeh teeno ek hi team ke hain.'
            },
            {
                title: '2. Flags (Jhande)',
                content: ['Yeh 3-bit ka ek flag hota hai jismein 2 important jhande hote hain:'],
                isList: true,
                listItems: [
                    "DF (Don't Fragment): Agar iski value 1 hai, to iska matlab hai \"Is packet ke tukde mat karna!\". Agar aisa packet kisi tang gali mein aata hai, to router use todne ke bajaye, drop kar deta hai aur sender ko error message bhejta hai.",
                    "MF (More Fragments): Yeh batata hai ki aage aur tukde aa rahe hain ya nahi. MF=1 matlab \"Picture abhi baaki hai mere dost!\" (This is not the last fragment). MF=0 matlab \"The End.\" (This is the last fragment)."
                ]
            },
            {
                title: '3. Fragment Offset',
                content: ['Yeh batata hai ki yeh wala tukda original packet mein kahan fit hota hai. Yeh ek tarah se "page number" ka kaam karta hai taaki saare tukde sahi order mein jud sakein. Iski value hamesha 8 ke multiple mein hoti hai.'],
            },
        ]
    },
    {
        title: 'IP Addressing & Subnetting',
        label: 'Important',
        description: 'Digital duniya ka address system kaise kaam karta hai.',
        subSections: [
            {
                title: 'IP Address Classes (A, B, C)',
                content: ['Purane samay mein, Internet par IP addresses ko unke size ke hisaab se 3 mukhya classes mein baanta gaya tha:'],
                isList: true,
                listItems: [
                    'Class A: Bahut badi companies ke liye jinko karodon IP addresses chahiye hote hain (jaise Google, IBM). Inka pehla number 1 se 126 ke beech hota hai.',
                    'Class B: Medium se large organizations (jaise universities). Inka pehla number 128 se 191 ke beech hota hai.',
                    'Class C: Chote networks (jaise chote office, ghar). Inka pehla number 192 se 223 ke beech hota hai.',
                    'Assignment ke hisaab se 128.0.1.3 Class B mein aata hai aur 193.11.23.10 Class C mein aata hai.'
                ]
            },
            {
                title: 'Private IP Addresses (Ghar ke Andar ke Address)',
                content: ['Kuch IP address ranges aisi hain jo Internet par use nahi ho sakti. Yeh sirf local networks ke liye reserved hain.'],
                example: 'Fayda: Inhe koi bhi apne local network mein free mein use kar sakta hai. Aapke ghar ke Wi-Fi router ka IP 192.168.1.1 ho sakta hai aur aapke padosi ke router ka bhi same IP ho sakta hai, isse koi conflict nahi hota.',
                listItems: [
                    "10.0.0.0 se 10.255.255.255 (Class A)",
                    "172.16.0.0 se 172.31.255.255 (Class B)",
                    "192.168.0.0 se 192.168.255.255 (Class C)"
                ]
            },
            {
                title: 'Subnetting (Bade Network ko Chote Hisso mein Baantna)',
                content: ['Subnetting woh technique hai jisse hum ek bade network ko logic ke aadhar par chote-chote, manageable hisson (sub-networks ya subnets) mein tod dete hain. Yeh Subnet Mask ka istemaal karke kiya jaata hai.'],
            },
            {
                title: 'Subnet Address Kaise Nikalein?',
                content: ['Aapko bas IP Address aur Subnet Mask ka Logical AND operation karna hota hai.'],
                example: 'Question 10: IP Address: 192.168.77.213, Subnet Mask: 255.255.252.0. Jab aap in dono ka binary mein AND operation karenge, to result aayega: 192.168.76.0. Yahi aapka Subnet Address hai.'
            }
        ]
    },
    {
        title: 'TCP aur UDP Header ki Jaankari',
        label: 'Important',
        description: '',
        subSections: [
            {
                title: 'TCP Connection Request (Baat-cheet Shuru Karne ka Signal)',
                content: ['TCP ek reliable protocol hai, isliye data bhejne se pehle woh "3-Way Handshake" karke connection banata hai. Iski shuruaat ek connection request se hoti hai.'],
                example: 'SYN=1, ACK=0: TCP Header mein yeh flag set hone ka matlab hai ki client server ko ek Initial Connection Request bhej raha hai. Yeh handshake ka pehla step hai. Client kehta hai, "Hello Server, main aapse baat karna chahta hoon, kya aap free ho?"'
            },
            {
                title: 'UDP Header ka Size',
                content: ['UDP ek bahut hi simple aur fast protocol hai. Iska header size fixed hota hai: hamesha 8 bytes. Ismein 4 cheezein hoti hain (har cheez 2 byte ki):'],
                isList: true,
                listItems: ['Source Port', 'Destination Port', 'Total Length', 'Checksum']
            },
            {
                title: 'Packet mein Data Kitna Hai? (Calculation)',
                content: ['Total Packet Size = Header Size + Data Size. Header Size nikalne ke liye, IP Header mein HLEN (Header Length) ki value ko 4 se multiply karna padta hai.'],
                example: 'Question 5: HLEN = 15, Total Packet Size = 2000 bytes. Header Size = 15 * 4 = 60 bytes. Data Bytes = 2000 - 60 = 1940 bytes.'
            }
        ]
    },
    // =========================================
    // LESS IMPORTANT TOPICS
    // =========================================
    {
      title: 'Fragmentation ki Gehri Jaankari',
      label: 'Less Important',
      description: 'Jab ek router ko packet todna padta hai, toh iske do conceptual tareeke ho sakte hain:',
      subSections: [
        {
          title: '1. Transparent Fragmentation (Parde ke Peeche)',
          content: ['Is approach mein, jab ek packet kisi chote MTU wale network mein ghusta hai, to entry router uske tukde karta hai. Lekin, us network se nikalte hi exit router un tukdon ko wapas jod deta hai. Aage ke networks ko pata hi nahi chalta ki packet ke kabhi tukde hue bhi the.'],
          example: 'Socho aap Delhi se Mumbai ek package bhej rahe ho. Raaste mein Kota office package ko khol kar 2 chote box mein daalta hai. Lekin jaise hi package Kota se nikalta hai, wahan ka exit office un 2 box ko wapas jod kar ek bada package bana deta hai. Mumbai wale ko hamesha ek hi bada package milega.',
          listItems: ['Nuksaan: Ismein exit router par bahut zyada load padta hai, isliye Internet (IP) is tareeke ka istemaal nahi karta hai.']
        },
        {
          title: '2. Non-Transparent Fragmentation (Sabko Pata Chalta hai)',
          content: ['Yeh woh tareeka hai jo Internet Protocol (IP) asal mein use karta hai. Ismein, agar ek router packet ke tukde karta hai, to woh un tukdon ko jodta nahi hai. Har tukda (fragment) ek azaad packet ki tarah aage travel karta hai.'],
          example: 'Saare tukdon ko jod kar original packet banane ki zimmedari seedha final destination host (receiver computer) ki hoti hai. Beech ke kisi router ki nahi.',
          listItems: ['Fayda: Isse network ke beech ke routers par load kam rehta hai aur system zyada efficient hota hai.']
        },
      ],
    },
    {
      title: 'IP Addressing mein Class se Aage (CIDR aur VLSM)',
      label: 'Less Important',
      description: 'Jaise-jaise Internet badha, Class A, B, C wala system aacha nahi raha kyunki usmein IPs waste bahut hote the. Isliye do naye concepts aaye:',
      subSections: [
        {
          title: 'CIDR (Classless Inter-Domain Routing)',
          content: ['Isne Class A, B, C ke rule ko khatam kar diya. Ab aap apni zaroorat ke hisaab se kisi bhi size ka IP block le sakte hain. Ismein IP address ke aage ek slash / laga kar number likha jaata hai (e.g., 192.168.1.0 /24).'],
          example: 'Pehle aapko zameen sirf fixed plot size mein milti thi - 1 acre, 5 acre ya 10 acre. CIDR ne yeh system laaya ki "Aapko jitni zameen (IPs) chahiye, utni hi lo."'
        },
        {
          title: 'VLSM (Variable Length Subnet Mask)',
          content: ['Yeh "smart subnetting" hai. VLSM aapko ek hi network ke andar alag-alag size ke subnets banane ki aazadi deta hai.'],
          example: 'Ek company ko 3 department ke liye network chahiye: Sales (100 log), HR (50 log), aur IT (20 log). VLSM ke zariye, aap Sales ke liye 128 ka, HR ke liye 64 ka, aur IT ke liye 32 ka block kaat sakte ho. Isse IPs waste nahi honge.'
        },
      ],
    },
    {
      title: 'TCP Connection ka Poora Jeevan Chakra',
      label: 'Less Important',
      description: '',
      subSections: [
        {
          title: 'TCP 3-Way Handshake (Connection Jodna)',
          content: ['Connection banane ke liye 3 steps hote hain:'],
          isList: true,
          listItems: [
              'SYN: Client server ko ek SYN packet bhejta hai. (Client: "Hello, aapse baat karni hai.")',
              'SYN-ACK: Server client ko SYN-ACK packet bhejta hai. (Server: "Okay, main sun raha hoon. Kya aap mujhe sun paa rahe ho?")',
              'ACK: Client server ko ek ACK packet bhejta hai. (Client: "Haan, main bhi sun paa raha hoon. Chalo baat shuru karein.")'
          ]
        },
        {
          title: 'TCP Connection Termination (Connection Todna)',
          content: ['Yeh 4 steps mein hota hai.'],
          isList: true,
          listItems: [
              'FIN: Jo pehle baat-cheet band karna chahta hai, woh ek FIN (Finish) packet bhejta hai.',
              'ACK: Server us FIN ka jawab ACK se deta hai.',
              'FIN: Jab server ka bhi kaam khatam ho jaata hai, woh apna FIN packet bhejta hai.',
              'ACK: Client server ke FIN ka jawab ACK se deta hai, aur connection poori tarah band ho jaata hai.'
          ]
        },
        {
            title: 'Half-Open Connection aur SYN Flood Attack',
            content: ['Agar 3-Way Handshake mein client pehla SYN bhej de, server SYN-ACK bhi bhej de, lekin client aakhri ACK na bheje, to isko Half-Open Connection kehte hain. Server bechara aakhri ACK ka intezar karta rehta hai.'],
            example: 'SYN Flood Attack: Hacker isi ka fayda uthata hai. Woh hazaron FAKE IP addresses se server ko laakhon SYN packets bhejta hai. Isse server ki saari memory in adhoore connections ko yaad rakhne mein bhar jaati hai aur woh asli users ko jawab dena band kar deta hai. Yeh ek classic Denial-of-Service (DoS) attack hai.'
        }
      ],
    },
    {
      title: 'Ports ki Duniya: Well-Known vs Ephemeral',
      label: 'Less Important',
      description: 'Computer par chalne wali har application (Chrome, Spotify, etc.) ko ek unique port number milta hai.',
      subSections: [
        {
          title: 'Well-Known Ports (1 - 1023)',
          content: ['Yeh "VIP number" hain jo standard services ke liye reserve hain. Yeh server-side ke ports hote hain.'],
          example: 'Port 80: HTTP (Normal websites), Port 443: HTTPS (Secure websites), Port 21: FTP (File Transfer), Port 25: SMTP (Email bhejne ke liye).'
        },
        {
          title: 'Ephemeral Ports (Temporary Ports)',
          content: ['Jab aapka computer (client) kisi server se connect karta hai, to woh apne liye ek temporary, random port number chunta hai (usually 1024 se 65535 ke beech). Jaise hi aap website band karte ho, yeh port number free ho jaata hai.'],
          example: 'Server ko pata hona chahiye ki jawab kahan bhejna hai. Yeh ephemeral port aapka "return address" hota hai.'
        },
      ],
    },
  ],
};