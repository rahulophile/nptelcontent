// src/data/week7.js

// This file contains the complete study material for Week 7.
// Note: User provided Week 6 content again, but titled it as Week 7.

export const week7Content = {
  id: 7,
  mainTitle: 'Week 7: Hashing, Digital Signatures & Security Protocols',
  topics: [
    // =========================================
    // IMPORTANT TOPICS
    // =========================================
    {
        title: 'Cryptographic Hash Functions (Digital Fingerprint)',
        label: 'Important',
        description: 'Yeh ek mathematical function hai jo kisi bhi size ke data ko input leta hai aur use process karke ek fixed-size ki unique string output deta hai. Is output ko Hash Value ya Digest kehte hain.',
        subSections: [
            {
                title: 'Properties of a Good Hash Function',
                content: [
                    'One-Way Function (Juice se Phal Wapas Nahi): Aap hash value se original data wapas nahi bana sakte. (Question 3a is false)',
                    'Fixed-Length Output (Hamesha Ek Glass Juice): Input chahe 1 KB ka ho ya 100 GB ka, output hamesha fixed length ka hoga. (Question 3b is false)',
                    'Deterministic (Same Phal, Same Juice): Aap jab bhi same input doge, aapko hamesha same hash output milega. (Question 2b can\'t be true)',
                    'Collision Resistant (Do Alag Phal se Same Juice Banana Mushkil): (Question 1) Aisa hona lagbhag namumkin hona chahiye ki do alag-alag inputs (M1 ≠ M2) ka hash value same (H1 = H2) aa jaaye.',
                    'Avalanche Effect (Thoda sa Badlav, Poora Result Alag): Agar aap input mein ek chota sa bhi badlav karte ho, to output hash poori tarah badal jaana chahiye.'
                ],
                isList: true
            },
            {
                title: 'Unkeyed (MDC) vs. Keyed (MAC) Hash Functions',
                content: [
                    'Unkeyed Hash (MDC - Modification Detection Code): (Questions 4, 5) Iska maqsad sirf Integrity check karna hai - yani yeh batana ki data raaste mein badla gaya hai ya nahi. Example: MD5, SHA-256.',
                    'Keyed Hash (MAC - Message Authentication Code): Yeh Hash + Secret Key ka combination hai. Iska maqsad Integrity + Authenticity dono check karna hai. Example: HMAC.'
                ],
                isList: true
            }
        ]
    },
    {
        title: 'Digital Signatures (Digital Stamp)',
        label: 'Important',
        description: 'Yeh Asymmetric (Public-Key) Cryptography ka istemaal karke banaya jaata hai.',
        subSections: [
            {
                title: 'Kaise Banta Hai?',
                content: [
                    '1. Sender apne message ka hash nikalta hai.',
                    '2. Fir us hash ko apni Private Key se encrypt kar deta hai. Yeh encrypted hash hi Digital Signature hai.',
                    '3. Sender original message + digital signature dono receiver ko bhejta hai.'
                ],
                isList: true
            },
            {
                title: 'Kaise Verify Hota Hai?',
                content: [
                    '1. Receiver original message ka khud se hash nikalta hai.',
                    '2. Fir woh sender ki Public Key ka istemaal karke digital signature ko decrypt karta hai. Isse sender dwara bheja gaya original hash mil jaata hai.',
                    '3. Agar dono hash same hain, to iska matlab hai ki message original hai (Integrity) aur usi ne bheja hai jiski public key hai (Authenticity).'
                ],
                isList: true
            },
            {
                title: 'Non-Repudiation (Baad Mein Inkaar Nahi Kar Sakte)',
                content: ['(Question 8): Yeh digital signature ki sabse badi taakat hai. Kyunki signature banane ke liye sender ki Private Key use hui hai, isliye woh baad mein yeh kehkar mukar nahi sakta ki "yeh signature maine nahi kiya."'],
            },
            {
                title: 'Deterministic Signature',
                content: ['(Question 7): Ek aisi signature scheme jo ek hi message ke liye har baar bilkul same signature generate karti hai.']
            }
        ]
    },
    {
        title: 'Security Protocols (SSL & IPSec)',
        label: 'Important',
        description: 'Yeh protocols cryptographic tools ka istemaal karke hamare data ko real world mein protect karte hain.',
        subSections: [
            {
                title: 'SSL (Secure Sockets Layer) / TLS',
                content: ['Yeh website aur browser ke beech ek secure "tunnel" banata hai. Aapke browser mein dikhne wala tala (lock) aur URL mein https:// ka \'s\' isi ki vajah se hai.'],
                example: 'Objectives (Question 9): Authentication, Data Privacy (Confidentiality), Data Integrity. SSL ka maqsad communication ko fast karna nahi hai.'
            },
            {
                title: 'IPSec (IP Security)',
                content: ['Yeh Network Layer (IP Layer) par security provide karta hai. Iska istemaal aksar VPNs (Virtual Private Networks) banane ke liye hota hai.'],
                example: 'Modes (Question 10): Transport Mode (sirf data ko encrypt karta hai, header original rehta hai) aur Tunnel Mode (poore packet ko encrypt karke naye packet mein daalta hai).'
            }
        ]
    },
    // =========================================
    // LESS IMPORTANT TOPICS
    // =========================================
    {
      title: 'Digital Certificate - Internet ka Identity Card',
      label: 'Less Important',
      description: 'Public-key cryptography mein ek samasya hai: Agar aapko kisi ki public key milti hai, to aap kaise vishwas karoge ki woh key asli mein usi insaan ki hai? Yahan par Digital Certificate kaam aata hai.',
      subSections: [
        {
          title: 'Digital Certificate Kya Hai?',
          content: ['Yeh ek digital "Identity Card" hai jo kisi insaan ya website ki pehchaan aur uski public key ko aapas mein jodta hai. Isse ek trusted third party jaari karti hai jise CA (Certificate Authority) kehte hain (jaise VeriSign, GoDaddy).'],
        },
        {
            title: 'Yeh Kyun Zaroori Hai?',
            content: ['Jab aap https://www.google.com kholte ho, to Google ka server apne browser ko apna Digital Certificate bhejta hai. Aapka browser check karta hai ki kya is certificate par kisi trusted CA ka signature hai. Agar signature valid hai, to browser maan leta hai ki certificate mein di gayi Google ki public key asli hai. Isse Man-in-the-Middle Attack se bachav hota hai.']
        }
      ],
    },
    {
      title: 'SSL/TLS Protocol ki Andruni Kaamkaj',
      label: 'Less Important',
      description: 'Jab aapka browser kisi https website se connect hota hai, to parde ke peeche SSL/TLS Handshake hota hai.',
      subSections: [
        {
          title: 'SSL Handshake Protocol',
          content: ['Yeh sabse pehla aur sabse zaroori step hai. Iska kaam hai "baat-cheet ki shart\'ein tay karna." Client aur Server aapas mein "negotiate" karte hain ki kaun sa encryption algorithm use karenge, kaun sa hash function use karenge. Server apna digital certificate bhejta hai. Fir ek session key (symmetric key) securely exchange ki jaati hai.'],
        },
        {
            title: 'SSL Record Protocol',
            content: ['Jab handshake poora ho jaata hai, to yeh protocol zimmedari le leta hai. Yeh aapke application data ko leta hai, use tukdon mein todta hai, MAC add karta hai, aur fir use session key se encrypt karke aage bhejta hai.']
        },
        {
            title: 'SSL Alert Protocol',
            content: ['Agar communication ke dauran koi error aata hai (jaise galat key), to yeh protocol error messages (alerts) bhejne ka kaam karta hai.']
        }
      ],
    },
    {
        title: 'SHA (Secure Hash Algorithm) Family',
        label: 'Less Important',
        description: 'SHA ek cryptographic hash functions ki family hai jo US National Security Agency (NSA) ne design ki thi.',
        subSections: [
            {
                title: 'SHA-1',
                content: ['Yeh purana version tha jo 160-bit ka hash banata tha. Ismein kamzoriyan dhoondh li gayi hain, isliye ab iska istemaal nahi karna chahiye.']
            },
            {
                title: 'SHA-2 Family',
                content: ['Iske andar kai versions aate hain: SHA-256 (256-bit hash, sabse common) aur SHA-512 (512-bit hash, aur bhi zyada secure).'],
            },
            {
                title: 'Kaise Kaam Karta Hai (Example: SHA-512)?',
                content: ['(Question 6): Yeh bade message ko chote-chote 1024-bit ke blocks mein tod deta hai. Fir yeh har ek block par 80 rounds ka complex mathematical operation (compression function) chalata hai aur pichle round ke output ke saath mix karta jaata hai. Aakhir mein, yeh 512-bit ka final hash value produce karta hai.'],
            }
        ]
    }
  ],
};