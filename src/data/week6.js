// src/data/week6.js

// This file contains the complete study material for Week 6.

export const week6Content = {
  id: 6,
  mainTitle: 'Week 6: Cryptography Fundamentals',
  topics: [
    // =========================================
    // IMPORTANT TOPICS
    // =========================================
    {
        title: 'Symmetric vs. Asymmetric Cryptography',
        label: 'Important',
        description: 'Socho aapko ek secret message ek box mein band karke apne dost ko bhejna hai. Iske do tareeke ho sakte hain:',
        subSections: [
            {
                title: '1. Symmetric (Private-Key) Cryptography - Ek Hi Chabi',
                content: ['Is system mein, message ko lock (encrypt) karne ke liye aur unlock (decrypt) karne ke liye ek hi secret chabi (key) ka istemaal hota hai. Yeh chabi sender aur receiver dono ke paas honi chahiye.'],
                example: 'Aapke ghar ka tala. Jis chabi se aap lock karte ho, usi chabi se aapka dost use kholega. Famous Examples: DES, AES (Question 10).',
                listItems: ['Sabse Badi Samasya (Key Distribution Problem): Aap woh secret chabi apne dost tak surakshit tareeke se pahunchaoge kaise?']
            },
            {
                title: 'Calculation for Symmetric Keys',
                content: ['(Question 5): Agar 20 logon ko aapas mein secretly baat karni hai, to har jodi ke paas ek unique chabi honi chahiye. Iska formula hai n(n-1)/2. Toh, 20 logon ke liye 20 * 19 / 2 = 190 alag-alag chabiyon ki zaroorat padegi.'],
            },
            {
                title: '2. Asymmetric (Public-Key) Cryptography - Do Alag Chabi',
                content: [
                    'Is system mein, har insaan ke paas do chabiyon ka ek joda (pair) hota hai:',
                    '- Public Key (Sabke Liye): Yeh chabi ek "open padlock" ki tarah hai. Koi bhi is chabi ka istemaal karke aapke liye message lock kar sakta hai.',
                    '- Private Key (Sirf Aapke Paas): Yeh us padlock ki "asli chabi" hai. Sirf is chabi se hi woh message khul sakta hai.'
                ],
                isList: true,
                example: 'Aapke ghar ke bahar ek "Mailbox" laga hai jismein letter daalne ke liye ek khula slot (Public Key) hai. Koi bhi usmein chitthi daal sakta hai. Lekin us Mailbox ko kholne ki chabi (Private Key) sirf aapke paas hai. Famous Example: RSA.'
            },
            {
                title: 'How Asymmetric Crypto Works',
                content: ['(Question 8):'],
                isList: true,
                listItems: [
                    'Encryption: Agar B ko A ke liye message encrypt karna hai, to B, A ki Public Key ka istemaal karega.',
                    'Decryption: Jab A us message ko receive karega, to woh apni Private Key se use decrypt karega.'
                ]
            },
            {
                title: 'Key Management in Asymmetric Crypto',
                content: ['(Question 4): Ismein key distribution ki samasya solve ho jaati hai. Agar 100 logon ko aapas mein baat karni hai, to har insaan bas apni ek key-pair banayega. Yani total 100 * 2 = 200 keys ki zaroorat padegi (100 public + 100 private).']
            }
        ]
    },
    {
        title: 'RSA Algorithm ki Security Ka Raaz',
        label: 'Important',
        description: '',
        subSections: [
            {
                title: 'Why is RSA Secure?',
                content: ['(Question 3): RSA algorithm ki poori security ek bahut hi mushkil mathematical problem par tiki hai, jise Prime Factorization Problem kehte hain.'],
                example: 'Aapko agar main 2 prime numbers doon, 7 aur 17, to aap aaram se unhe multiply karke 119 bata doge. Lekin agar main aapko ek bahut bada number doon aur poochun ki "yeh kin do prime numbers ko multiply karke bana hai?", to yeh pata lagane mein duniya ke sabse powerful computers ko bhi saalon lag jaayenge. RSA isi concept par kaam karta hai.'
            }
        ]
    },
    {
        title: 'Modern Symmetric Algorithms (DES & AES)',
        label: 'Important',
        description: '',
        subSections: [
            {
                title: 'DES (Data Encryption Standard)',
                content: ['Yeh purana standard tha. Iski key length sirf 56 bits thi, jo aaj ke computers ke liye todna bahut aasaan hai. Isliye ab yeh secure nahi maana jaata.'],
            },
            {
                title: 'AES (Advanced Encryption Standard)',
                content: ['Yeh DES ko replace karne ke liye banaya gaya tha aur aaj ka sabse popular aur secure symmetric algorithm hai.'],
                example: '(Question 9): AES alag-alag key lengths support karta hai: 128-bit, 192-bit, aur 256-bit. Jitni lambi key, utni zyada security.'
            }
        ]
    },
    {
        title: 'Types of Security Attacks',
        label: 'Important',
        description: '',
        subSections: [
            {
                title: 'Interruption',
                content: ['(Question 1): Yeh "Attack on Availability" hai. Iska matlab hai ki attacker aapko service ya data access karne se rok raha hai.'],
                example: 'Denial-of-Service (DoS) attack iska sabse aacha example hai, jahan server ko itna busy kar diya jaata hai ki woh asli users ke liye available hi na rahe.'
            }
        ]
    },
    // =========================================
    // LESS IMPORTANT TOPICS
    // =========================================
    {
      title: 'Classical Ciphers - Purane Zamane ki Cryptography',
      label: 'Less Important',
      description: 'Computers aane se pehle, cryptography haath se ki jaati thi. Yeh do mukhya prakar ki hoti hain:',
      subSections: [
        {
          title: '1. Substitution Ciphers (Akshar Badlo)',
          content: ['Ismein plaintext ke har akshar (letter) ko kisi doosre akshar se "replace" ya "substitute" kar diya jaata hai, ek fixed rule ke anusaar.'],
        },
        {
            title: 'Example: Caesar Cipher',
            content: ['(Question 6): Yeh sabse simple substitution cipher hai. Rule: Har akshar ko alphabet mein \'k\' sthan aage badha do. Plaintext: CRYPTOGRAPHY, Key (k) = 4. C -> G, R -> V, Y -> C (wrapped around). Result: GVCTXSKVETLC.'],
            example: 'Kamzori: Ismein sirf 25 possible keys hain. Koi bhi computer in saari keys ko kuch seconds mein try karke ise tod sakta hai (Brute-Force Attack).'
        },
        {
            title: 'Example: Mono-alphabetic Cipher',
            content: ['(Question 7): Ismein har akshar ko kisi fixed doosre akshar se replace kiya jaata hai, lekin zaroori nahi ki woh 3 ya 4 sthan aage hi ho. Message: SWAYAM, Key: (A B W X E F S T I J O P M N K L Q R G H U V C D Y Z). S (19th) -> G, W (23rd) -> C, A (1st) -> A, Y (25th) -> Y, A -> A, M (13th) -> M. Result: GCAYAM.'],
            example: 'Kamzori: Ise Frequency Analysis se toda jaa sakta hai. English mein \'E\' sabse zyada use hota hai. To ciphertext mein jo akshar sabse zyada baar aa raha hai, woh shayad \'E\' hai.'
        },
        {
          title: '2. Transposition Ciphers (Akshar Ghumao)',
          content: ['Ismein hum aksharon ko replace nahi karte, balki unki jagah (position) badal dete hain. Plaintext ke saare akshar wahi rehte hain, bas unka order badal jaata hai.'],
          example: 'Message: HELLO WORLD, Key: 312. Message ko 3 columns mein likho, fir key ke order (Col 1, Col 2, Col 3) mein padho. Ciphertext: LWD LOR HELO'
        }
      ],
    },
    {
      title: 'Diffie-Hellman Key Exchange',
      label: 'Less Important',
      description: 'Iska kaam message encrypt karna nahi, balki do logon ke beech ek secret key (Symmetric Key) ko securely banana hai, bhale hi unka communication channel koi sun raha ho.',
      subSections: [
        {
          title: 'Real-life Example (Paint Mixing Analogy)',
          content: [
              '1. Alice aur Bob pehle ek common paint (Yellow) par agree karte hain. Yeh sabko pata hai.',
              '2. Alice apne man mein ek secret color (Red) sochti hai. Bob apne man mein ek secret color (Blue) sochta hai.',
              '3. Alice, Yellow+Red mix karke Orange banati hai aur Bob ko bhejti hai. Bob, Yellow+Blue mix karke Green banata hai aur Alice ko bhejta hai. Hacker raaste mein Orange aur Green dekh sakta hai.',
              '4. Ab Alice, Bob se mile Green mein apna secret Red milati hai. Bob, Alice se mile Orange mein apna secret Blue milata hai.',
              '5. Jaadu: Dono ke paas aakhir mein ek hi final secret color (Brown) ban jaata hai (Yellow+Red+Blue). Yeh unki "Shared Secret Key" hai. Hacker is color ko nahi bana sakta.'
          ],
          isList: true
        }
      ],
    },
  ],
};