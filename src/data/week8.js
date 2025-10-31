// src/data/week8.js

// This file contains the complete study material for Week 8.

export const week8Content = {
  id: 8,
  mainTitle: 'Week 8: Steganography, DoS Attacks & Biometrics',
  topics: [
    // =========================================
    // IMPORTANT TOPICS
    // =========================================
    {
        title: 'Steganography - The Art of Hiding',
        label: 'Important',
        description: '',
        subSections: [
            {
                title: 'Cryptography vs. Steganography',
                content: [
                    'Cryptography: Aapke message ko ek aisi "tijori" mein band kar deti hai (encrypt). Saamne wale ko pata hota hai ki ek tijori jaa rahi hai, bas woh use khol nahi sakta.',
                    'Steganography (Question 1): Yeh aapke message ko ek "bade se anjaan bheed" mein chhupa deti hai. Saamne wale ko pata hi nahi chalta ki koi secret message jaa bhi raha hai.'
                ],
                isList: true
            },
            {
                title: 'LSB Steganography in Images',
                content: ['(Question 2): Yeh digital images mein data chhupane ka sabse common tareeka hai. Ek rangin image pixels se banti hai. Har pixel ka rang 3 values (Red, Green, Blue) se banta hai. LSB (Least Significant Bit) ka matlab hai har value ka aakhri, sabse "kam-ahem" bit. Is aakhri bit ko badalne se pixel ke rang mein itna mamuli sa fark aata hai ki insani aankh use pakad nahi sakti.'],
                example: 'Kamzori: Yeh robust nahi hai. Agar aapne image ko thoda sa bhi edit kiya, crop kiya, ya compress kiya, to chhupa hua message nasht ho jaata hai.'
            }
        ]
    },
    {
        title: 'Denial of Service (DoS/DDoS) Attacks',
        label: 'Important',
        description: '',
        subSections: [
            {
                title: 'Denial of Service (DoS) Kya Hai?',
                content: ['(Question 6): Yeh ek aisa attack hai jiska maqsad kisi server ya service ko itna busy ya overload kar dena hai ki woh asli, legitimate users ke liye kaam karna band kar de. Iska maqsad data churana nahi, balki service ko band karna hota hai.']
            },

            {
                title: 'DoS vs. DDoS - Ek Gunda vs. Poori Bheed',
                content: [
                    '(Question 10):',
                    '- DoS Attack: Ismein ek hi computer se target par hamla kiya jaata hai.',
                    '- DDoS (Distributed Denial-of-Service) Attack: Ismein poore duniya mein faile hue hazaron-lakhon "compromised" computers (Botnet/Zombie Army) ka istemaal karke ek hi target par ek saath hamla kiya jaata hai.'
                ],
                isList: true
            },
            {
                title: 'Famous DoS Attack Types',
                content: [''],
            },
            {
                title: 'Ping of Death (Oversized Ping)',
                content: ['(Question 8): Hacker ek aisa "ping" packet banata hai jiska size 65,535 bytes (maximum limit) se bada hota hai. Jab yeh packet target par judne (reassemble) ki koshish karta hai, to purane operating systems is bade size ko handle nahi kar paate the aur crash ho jaate the.'],
            },
            {
                title: 'Smurf Attack (Padosiyon se Pitwana)',
                content: ['(Question 7): Hacker, victim ka IP address "spoof" karke ek "ping request" ek poore network ke broadcast address par bhejta hai. Network ke sabhi computers us ping ka jawab dete hain, lekin woh jawab bechare victim ko bhejte hain. Victim ke paas achanak se 100s of replies ki baadh aa jaati hai.'],
            }
        ]
    },
    {
        title: 'Biometrics - Aapka Sharir, Aapka Password',
        label: 'Important',
        description: 'Yeh insaan ki pehchaan uske unique physiological (sharirik) ya behavioral (vyavaharik) gunon ke aadhar par karne ki technique hai.',
        subSections: [
            {
                title: 'Types of Biometrics',
                content: [
                    'Physiological (Sharir se Jude): (Question 4) Yeh woh gun hain jo aapke sharir ka hissa hain. Examples: Fingerprint, Iris/Retina Scan, Face Recognition, DNA.',
                    'Behavioral (Aapke Vyavahar se Jude): Signature (Question 4), Voice, Typing Rhythm.'
                ],
                isList: true,
                example: '(Question 5): Iris/Retina sabse zyada unique aur secure maane jaate hain, lekin inke liye special machine ki zaroorat padti hai.'
            }
        ]
    },
    {
        title: 'Bonus Topic: DNS ka Role',
        label: 'Important',
        description: '',
        subSections: [
            {
                title: 'DNS (Domain Name System)',
                content: ['(Question 9): Internet ki "phone book". Iska mukhya kaam hai insano dwara padhe jaane wale domain names (www.google.com) ko computers dwara samjhe jaane wale IP addresses (142.250.196.196) mein translate karna.'],
            }
        ]
    },
    // =========================================
    // LESS IMPORTANT TOPICS
    // =========================================
    {
      title: 'Steganography ki Aur Gehrai',
      label: 'Less Important',
      description: '',
      subSections: [
        {
          title: 'Digital Watermarking vs. Steganography',
          content: [
              'Steganography: Iska maqsad secret message ke astitva (existence) ko hi chhupana hai.',
              'Digital Watermarking: Iska maqsad copyright ya ownership ki jaankari ko file ke saath jodna hai. Yahan message ko chhupane se zyada is baat par zor hota hai ki woh file ke saath juda rahe.'
          ],
          isList: true
        },
        {
            title: 'LSB Steganography ka Calculation',
            content: ['(Question 3): Ek 200 x 150 size ki 24-bit RGB image mein LSB Steganography se kitne bytes data chhupa sakte hain?'],
            example: 'Total Pixels: 200 * 150 = 30,000. Har pixel 24-bit ka hai (R, G, B har ek 8-bit). Har pixel mein hum 3 bits (1 for R, 1 for G, 1 for B) chhupa sakte hain. Total Bits: 30,000 * 3 = 90,000 bits. Bytes Mein: 90,000 / 8 = 11,250 bytes.'
        }
      ],
    },
    {
      title: 'Network Attacks ka Agla Level (DoS/DDoS)',
      label: 'Less Important',
      description: '',
      subSections: [
        {
          title: 'SYN Flood Attack',
          content: ['Yeh TCP 3-Way Handshake ki kamzori ka fayda uthata hai. Hacker, FAKE IP addresses se, server ko hazaron SYN packets bhejta hai. Server har SYN ke jawab mein SYN-ACK bhejta hai aur aakhri ACK ka intezar karne lagta hai. In adhoore "Half-Open Connections" se server ki memory bhar jaati hai aur woh asli users ko jawab dena band kar deta hai.'],
        },
        {
          title: 'HTTP Flood Attack',
          content: ['Yeh Application Layer par kaam karta hai. Hacker, botnet ka istemaal karke, web server ko bahut saari legitimate-looking HTTP requests (GET ya POST) bhejta hai. Server in requests ko handle karne mein itna busy ho jaata hai ki woh asli users ki requests ko time par respond nahi kar paata.'],
        }
      ],
    },
    {
      title: 'DNS - Internet ki Phonebook ki Kamzoriyan',
      label: 'Less Important',
      description: '',
      subSections: [
        {
          title: 'DNS ki Mukhya Kamzori',
          content: ['DNS queries aam taur par UDP protocol par, plaintext mein jaati hain. Ismein koi authentication nahi hota.'],
        },
        {
            title: 'DNS Cache Poisoning (Phonebook mein Galat Number Likhna)',
            content: ['Yeh ek aisa attack hai jismein hacker ek DNS server ki "cache" (temporary memory) mein galat jaankari daal deta hai. Hacker, asli server se pehle, ek nakli jawab bhej deta hai, "Hey! www.mybank.com ka IP address [Hacker ka IP Address] hai." DNS server us galat jawab ko sach maan kar apni cache mein save kar leta hai.'],
            example: 'Natija: Ab us DNS server ko use karne wala har insaan jab bhi www.mybank.com kholne ki koshish karega, woh anjaane mein hacker ki phishing website par pahunch jaayega.'
        }
      ],
    },
  ],
};