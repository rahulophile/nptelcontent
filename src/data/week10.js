// src/data/week10.js

// This file contains the complete study material for Week 10.

export const week10Content = {
  id: 10,
  mainTitle: 'Week 10: Hardware Security & Side-Channel Attacks',
  topics: [
    // =========================================
    // IMPORTANT TOPICS
    // =========================================
    {
        title: 'Side-Channel Attacks (SCA) - Jasoosi se Hacking',
        label: 'Important',
        description: 'Ismein aap algorithm ki math ko nahi todte, balki us "hardware" ki kamzoriyon ka fayda uthate ho jispar woh algorithm chal raha hai.',
        subSections: [
            {
                title: 'Normal Attack vs. Side-Channel Attack',
                content: [
                    'Normal Attack: Tijori ke darwaze ko todne ki koshish karna.',
                    'Side-Channel Attack: Tijori ko todte nahi, bas us insaan ko dekhte ho jo use khol raha hai. Aap note karte ho:',
                    '- Timing Attack: Har number ghumane mein kitna time laga.',
                    '- Power Analysis Attack: Har number par tijori kitni bijli use kar rahi hai.',
                    '- Electromagnetic (EM) Attack: Usse nikalne wali EM waves ko study karna.'
                ],
                isList: true
            },
            {
                title: 'Power Analysis Attack (Bijli ke Bill se Chori)',
                content: ['(Question 2, 6): Yeh SCA ka sabse common type hai. Ismein attacker device (jaise Smart Card) ke power consumption ko operation ke dauran monitor karta hai. Ek computer chip mein jab \'1\' process hota hai to thodi alag power lagti hai aur jab \'0\' process hota hai to thodi alag. In mamuli se fark ko hazaron baar measure karke, attacker dheere-dheere secret key ke bits (0s and 1s) ka andaza laga sakta hai.'],
                example: 'Differential Power Analysis (DPA): (Question 6) Yeh Simple Power Analysis (SPA) se zyada advanced hai. Ismein attacker multiple measurements (power traces) leta hai aur un par statistical analysis karke noise ko hatata hai, jisse key se juda signal saaf-saaf dikhne lagta hai.'
            }
        ]
    },
    {
        title: 'Hardware Trojan (Chip ke Andar ka Dushman)',
        label: 'Important',
        description: '',
        subSections: [
            {
                title: 'Hardware Trojan Kya Hai?',
                content: ['(Question 5): Yeh chip ke original circuit design mein kiya gaya ek malicious (galat niyat se) badlav hai. Yeh ek extra, anchaaha circuit hota hai jise chip banate waqt hi uske andar daal diya jaata hai. Yeh software Trojan se alag hai, kyunki yeh hardware ka hissa hota hai.'],
            },
            {
                title: 'Kaise Kaam Karta Hai?',
                content: [
                    'Ek Hardware Trojan ke do hisse hote hain: Trigger (kab activate hona hai) aur Payload (activate hokar kya karna hai).',
                    'Trigger: Yeh koi specific condition ho sakti hai, jaise "jab 1 saal poora ho jaaye".',
                    'Payload: Trigger hone par, Trojan apna kaam karta hai, jaise: secret key leak kar dena, device ko kaam karne se rok dena, ya data corrupt kar dena.'
                ],
                isList: true
            },
            {
                title: 'Detect Karna Mushkil Kyun Hai?',
                content: ['(Question 7):',
                    '- Stealthy: Yeh Trojan bahut chhote hote hain aur 99.9% time soye rehte hain. Isliye normal testing mein inka pata nahi chalta.',
                    '- Supply Chain Attack: Chip designing se lekar manufacturing tak kai alag-alag companies aur log involved hote hain. Koi bhi is process mein Trojan daal sakta hai.'
                ],
                isList: true
            }
        ]
    },
    {
        title: 'Physical Unclonable Function (PUF) - Chip ka Digital Fingerprint',
        label: 'Important',
        description: '',
        subSections: [
            {
                title: 'PUF Kya Hai?',
                content: ['(Question 9): Yeh ek aisa hardware circuit hai jo har chip ke andar maujood manufacturing ke dauran aayi anokhi, aniyamit (random) kamiyon ka fayda uthata hai. Jaise do insano ke fingerprint kabhi same nahi hote, waise hi do "identical" chips bhi microscopic level par 100% same nahi hoti. PUF in kamiyon ko ek unique "Digital Fingerprint" mein badal deta hai.'],
            },
            {
                title: 'Challenge-Response System',
                content: ['Aap PUF ko ek input (Challenge) dete ho. PUF apne unique physical structure ke aadhar par ek output (Response) deta hai. Ek hi chip ko same challenge dene par hamesha same response aayega, lekin doosri chip se alag aayega.'],
            },
            {
                title: 'Mukhya Uddeshya',
                content: ['(Question 9): Device-Unique Authentication. PUF ka sabse bada kaam har device ko ek aisi unique identity dena hai jise na to copy (clone) kiya ja sakta hai aur na hi churaya ja sakta hai.']
            },
            {
                title: 'Evaluability Property',
                content: ['(Question 10): PUF ki ek zaroori property hai ki agar aapke paas PUF (chip) hai aur aap usse ek sawal (challenge \'x\') puchte hain, to uske liye jawab (response \'y\') dena aasaan (easy to evaluate) hona chahiye.']
            }
        ]
    },
    // =========================================
    // LESS IMPORTANT TOPICS
    // =========================================
    {
      title: 'Hardware Attacks ke Prakar',
      label: 'Less Important',
      description: 'Hardware par hamla karne ke do mukhya tareeke hote hain:',
      subSections: [
        {
          title: '1. Non-Invasive Attacks (Bina Cheed-Fhaad)',
          content: ['Ismein attacker device ki "body" (chip package) ko kholta ya kaat\'ta nahi hai. Woh bahar se hi jasoosi karke information nikalne ki koshish karta hai.'],
          example: 'Side-Channel Attacks (SCA) (Question 2) non-invasive hote hain.'
        },
        {
          title: '2. Invasive Attacks (Cheed-Fhaad karke)',
          content: ['(Question 3): Ismein attacker device ko physically kholta hai aur seedha chip ke circuit par hamla karta hai. Iske liye bahut mehenge equipment ki zaroorat padti hai.'],
          example: 'Physical Probing: Attacker chip ke upar ek bahut hi baareek "probe" (sui) lagakar seedha taaron se data padhne ki koshish karta hai.'
        },
        {
            title: '',
            content: ['Note: SQL Injection aur Denial of Service (Question 1) software/network level ke attacks hain, hardware-based nahi.']
        }
      ],
    },
    {
      title: 'Hardware Attacks se Bachne ke Upay (Countermeasures)',
      label: 'Less Important',
      description: 'Agar aap ek secure chip bana rahe hain, to in attacks se bachne ke liye aap kya kar sakte hain?',
      subSections: [
        {
            title: 'Invasive Attacks se Bachav',
            content: [
                '- Metal Shield Layer: Chip ke upar metal ki ek jaali (mesh) laga dena. Agar attacker probe karne ki koshish karega, to short circuit hoga aur data delete ho jayega.',
                '- Obfuscate the IC layout: Chip ke layout ko jaan-boojh kar "uljha hua" (confusing) banana.'
            ],
            isList: true
        },
        {
          title: 'Side-Channel Attacks (SCA) se Bachav',
          content: [
              '(Question 4):',
              '- Timing Attack se Bachav: Code ko is tarah likhna ki har operation hamesha barabar time le.',
              '- Power Analysis Attack se Bachav:',
              '  - Add Noise: Chip mein ek "noise generator" circuit daal dena jo random power fluctuations paida karta rahe.',
              '  - Add Dummy Circuit: (Question 4b) Bekar ke circuit daalna jo random operations karte rahein, jisse power consumption ka pattern predictable na rahe.'
          ],
          isList: true,
        },
      ],
    },
    {
        title: 'Modular Exponentiation ki Speed',
        label: 'Less Important',
        description: 'Yeh topic Side-Channel Attack (specifically Timing Attack) se juda hua hai. RSA jaise algorithms mein x^e mod n jaisi calculation bahut baar hoti hai.',
        subSections: [
            {
                title: 'Square-and-Multiply Algorithm (Fast Tareeka)',
                content: ['(Question 8): Yeh ek shortcut hai. Hum exponent (power) ko binary mein convert karte hain. 25 ka binary hota hai 11001. Har bit ke liye ek "squaring" operation hota hai, aur jahan-jahan \'1\' hota hai, wahan ek extra "multiplication" operation hota hai.'],
                example: 'Calculation for x^25: 25 = 11001 (5 bits). Total 4 squaring operations lagenge (bits-1). Ismein 3 \'1\' hain, to 2 extra multiplication operations lagenge. Total Operations: 4 Squaring aur 2 Multiplication.'
            },
            {
                title: 'Timing Attack kaise hota hai?',
                content: ['Agar \'multiplication\' operation \'squaring\' se thoda zyada time leta hai, to attacker time ko measure karke andaza laga sakta hai ki key ke binary mein kitne \'1\' hain.']
            }
        ]
    }
  ],
};