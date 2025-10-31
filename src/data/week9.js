// src/data/week9.js

// This file contains the complete study material for Week 9.

export const week9Content = {
  id: 9,
  mainTitle: 'Week 9: Sniffing & Social Engineering',
  topics: [
    // =========================================
    // IMPORTANT TOPICS
    // =========================================
    {
        title: 'Packet Sniffing ke Concepts',
        label: 'Important',
        description: 'Network par travel kar rahe data ko chupke se sunne aur analyze karne ka process.',
        subSections: [
            {
                title: 'Promiscuous Mode (Sabki Baatein Sunne Wala Mode)',
                content: ['(Question 1): Aam taur par, computer ka Network Interface Card (NIC) sirf unhi data packets ko receive karta hai jinka destination address uska khud ka hota hai. Lekin Promiscuous Mode mein, NIC network par travel kar rahe saare packets ko capture karta hai, chahe woh kisi ke bhi liye hon.'],
                example: 'Ek postman aam taur par sirf aapke naam ki chitthi aapko deta hai. Lekin agar woh Promiscuous Mode mein chala jaaye, to woh poore mohalle ki saari chitthiyan ikattha karke aapko de dega.'
            },
            {
                title: 'Kaun se Protocols Sniffing ke liye Kamzor Hain?',
                content: ['(Question 3): Jo bhi protocol data ko plaintext (bina encrypt kiye) bhejta hai, woh sniffing ke liye kamzor hai. Examples: HTTP, FTP, Telnet.'],
                example: 'Secure Protocols: HTTPS, SSL, SSH data ko encrypt kar dete hain. Isliye agar koi inke packets ko sniff kar bhi le, to usse sirf "kachra" dikhega.'
            },
            {
                title: 'Sniffing se Bachne ke Upay (Countermeasures)',
                content: ['(Question 4): Sabse asardar tareeka hai Switch ka istemaal karna, Hub ka nahi. Switch "samajhdar" hota hai aur packet ko sirf uske asli destination tak bhejta hai, jisse sniffing mushkil ho jaati hai. Hamesha encryption (HTTPS, SSH) ka istemaal karein.'],
            }
        ]
    },
    {
        title: 'Packet Sniffing ke Hathiyaar (Tools)',
        label: 'Important',
        description: '',
        subSections: [
            {
                title: 'Wireshark (Network ka Microscope)',
                content: ['(Question 2): Yeh duniya ka sabse popular, free, aur open-source packet analyzer tool hai. Yeh aapko network par chal rahe live traffic ko capture karne aur use detail mein analyze karne ki suvidha deta hai.'],
                example: 'Wireshark Kya Nahi Kar Sakta? Yeh ek passive tool hai. Yeh sirf traffic ko "dekhta" hai. Yeh live network traffic ko rok, badal, ya manipulate nahi kar sakta.'
            },
            {
                title: 'Ettercap (Man-in-the-Middle ka Ustad)',
                content: ['(Question 5): Yeh ek active sniffer hai jo khaas taur par Man-in-the-Middle (MITM) attacks ke liye banaya gaya hai. Yeh ARP Spoofing karke Switch wale network par bhi traffic ko apni taraf divert kar sakta hai aur live traffic ko rok ya badal sakta hai.'],
            }
        ]
    },
    {
        title: 'Social Engineering (Insano ko Hack Karna)',
        label: 'Important',
        description: 'Yeh "dhokha dene ki kala" hai. Ismein hacker technical kamzoriyon ke bajaye, insani psychology ka fayda uthakar logon se confidential information nikalwata hai.',
        subSections: [
            {
                title: 'Human-based Social Engineering (Aamne-Saamne)',
                content: [
                    '(Question 7):',
                    '- Impersonation: IT support wala ban kar call karna aur password poochhna.',
                    '- Shoulder Surfing: ATM par aapke peeche khade hokar aapka PIN dekhna.',
                    '- Piggybacking/Tailgating: Ek authorized employee ke theek peeche-peeche secure darwaze se andar ghus jaana.'
                ],
                isList: true
            },
            {
                title: 'Computer-based Social Engineering',
                content: ['Phishing: (Question 7 ka answer D isiliye hai kyunki Phishing computer-based hai). Bank jaisa dikhne wala FAKE email bhejna jo aapka username/password chura leta hai.'],
            },
            {
                title: 'Reverse Social Engineering',
                content: ['(Question 6): Yeh ek chalaak technique hai. Ismein hacker pehle ek samasya paida karta hai aur fir khud ko us samasya ke "samadhan" ke roop mein pesh karta hai.'],
                example: 'Hacker pehle aapke computer par ek chota sa issue create karega. Fir woh aapko IT support wala ban kar call karega aur kahega, "Humein pata chala hai ki aapke computer mein problem hai." Ab aap khud se us par vishwas karke use apne system ka access de doge.'
            }
        ]
    },
    // =========================================
    // LESS IMPORTANT TOPICS
    // =========================================
    {
      title: 'Botnet - Hacker ki Zombie Sena',
      label: 'Less Important',
      description: '',
      subSections: [
        {
          title: 'Botnet Kya Hai?',
          content: ['(Question 10): Ek "Botnet" (Robot Network), poori duniya mein faile hue hazaron-lakhon "compromised" devices ka ek network hota hai. Hacker, jise "Botmaster" kehte hain, in sabhi devices ko ek central "Command and Control (C&C)" server se remotely control kar sakta hai.'],
          example: 'Sabse Bada Istemal: DDoS Attacks. Jab ek botmaster 1 lakh devices ko ek saath ek hi website par traffic bhejne ka order deta hai, to woh website seconds mein crash ho jaati hai.'
        }
      ],
    },
    {
      title: 'DoS Attack ke Khaas Hathiyaar (Tools)',
      label: 'Less Important',
      description: 'Hacker DoS/DDoS attack karne ke liye kuch specific tools ka istemaal karte hain.',
      subSections: [
        {
            title: 'SYN Flood',
            content: ['(Question 8) Humne isse pehle discuss kiya hai. Yeh 3-way handshake ki kamzori ka fayda uthata hai.']
        },
        {
          title: 'Slowloris (Dheema Zeher Attack)',
          content: ['(Question 9): Yeh ek bahut hi unique DoS tool hai. Yeh high-volume traffic bhejne ke bajaye, "Low and Slow" technique par kaam karta hai. Yeh server ke saath hazaron connections shuru karta hai, lekin kabhi bhi apni HTTP request ko poora nahi karta. Yeh server ko request ka ek chhota sa hissa bhejta hai, aur fir thodi der chup ho jaata hai.'],
          example: 'Natija: Server bechara har adhoori request ke liye connection ko khula rakhta hai aur uske poora hone ka intezar karta rehta hai. Dheere-dheere, server ke saare available connection slots in adhoore connections se bhar jaate hain aur woh asli users ko service nahi de paata.'
        }
      ],
    },
  ],
};