// src/data/week1.js

export const week1Content = {
  id: 1,
  mainTitle: 'Week 1: Complete Hacking & Networking Fundamentals',
  topics: [
    // =========================================
    // IMPORTANT TOPICS (PRIORITY 1, 2, 3)
    // =========================================
    {
        title: 'Ethical Hacking aur Penetration Testing',
        label: 'Important',
        description: 'Sabse pehle hum samjhenge ki Ethical Hacking kya hai aur industry mein iska istemaal kaise hota hai.',
        subSections: [
            {
                title: 'What is Ethical Hacking? (Ethical Hacking Kya Hai?)',
                content: ['Ethical Hacking ka matlab hai kisi company ya organization ki permission (ijazat) lekar unke computer system, network ya web application mein kamzoriyan (vulnerabilities) dhundhna. Iska maqsad aane wale asli cyber attacks se system ko bachana hai. Isse "White Hat Hacking" bhi kehte hain.'],
                example: 'Socho aapne ek naya, high-tech tala (lock) banwaya hai apne ghar ke liye. Aap ek expert chor ko bulate ho aur kehte ho, "Main tumhe paise dunga, tum is taale ko todne ki koshish karo. Agar tod diya, toh mujhe batana ki kaise toda, taaki main us kamzori ko theek kar sakun." Yahan aap company ho aur expert chor ek Ethical Hacker hai.'
            },
            {
                title: 'Penetration Testing (Pen Test) ki Methodologies',
                content: ['Penetration Testing (ya Pen Test) woh process hai jismein ethical hacker actual mein hacking karke system ki security test karta hai. Iske 3 mukhya prakar hote hain:'],
            },
            {
                title: '1. White Box Testing',
                content: ['Ismein hacker ko system ki poori jaankari di jaati hai—jaise server ke IP addresses, source code, network diagrams, passwords etc.'],
                example: 'Upar wale example mein, aap chor ko tala todne ke saath-saath us taale ka design (blueprint) bhi de dete ho. Isse wo taale ki har choti-badi kamzori ko aache se check kar paata hai.'
            },
            {
                title: '2. Black Box Testing',
                content: ['Ismein hacker ko system ke baare mein koi jaankari nahi di jaati. Usko bas company ka naam ya website ka address de diya jaata hai. Yeh ek asli hacker ke attack jaisa hota hai.'],
                example: 'Aap chor ko sirf apne ghar ka address dete ho aur kehte ho, "Jao, tala tod kar dikhao." Usko khud hi sab kuch pata lagana padega.'
            },
            {
                title: '3. Grey Box Testing',
                content: ['Yeh White aur Black Box ka mixture hai. Ismein hacker ko thodi bahut jaankari di jaati hai, jaise ek normal user ka login ID aur password.'],
                example: 'Aap chor ko ghar ki ek duplicate chabi dete ho (jo sirf bahar ka darwaza kholti hai) aur kehte ho ki ab dekho kya tum isse main tijori tak pahunch sakte ho.'
            },
        ]
    },
    {
        title: 'Network Switching Techniques',
        label: 'Important',
        description: 'Jab hum internet par data bhejte hain, toh woh data ek jagah se doosri jagah kaise travel karta hai? Iske do mukhya tareeke hain:',
        subSections: [
            {
                title: '1. Circuit Switching',
                content: ['Is technique mein, data bhejne se pehle sender (bhejne wala) aur receiver (paane wala) ke beech ek dedicated, fixed raasta (circuit) banaya jaata hai. Jab tak communication chalta hai, woh raasta sirf un dono ke liye reserved rehta hai, chahe data ja raha ho ya nahi.'],
                example: 'Purane landline phone calls. Jab aap kisi ko call karte the, to ek physical line aap dono ke beech jud jaati thi. Jab tak aap baat kar rahe ho, us line ko koi aur use nahi kar sakta. Agar aap 5 minute tak chup bhi ho, to bhi line connected rehti hai aur bill chalta rehta hai.',
                listItems: [
                    'Kiske Liye Aacha Hai? Voice calls ke liye theek hai, jahan lagatar data (awaaz) jaata hai.',
                    'Kiske Liye Kharab Hai? Internet browsing jaise "bursty traffic" (jahan data ruk-ruk kar jaata hai) ke liye aacha nahi hai kyunki ismein resources (line) waste hote hain.'
                ]
            },
            {
                title: '2. Packet Switching',
                content: ['Yeh internet ki buniyad hai. Ismein, aapke bade se data (jaise ek image ya email) ko chote-chote tukdon (packets) mein tod diya jaata hai. Har packet par address likh kar alag-alag raaston se manzil tak bhej diya jaata hai. Manzil par pahunch kar yeh saare packets fir se jud jaate hain.'],
                example: 'Aapko ek 1000-page ki kitaab apne dost ko bhejni hai. Aap us kitaab ke har panne ko alag-alag lifafe mein daalkar, address likh kar post kar dete ho. Ho sakta hai kuch panne (packets) train se jaayein, kuch plane se. Aapke dost ko jab saare 1000 lifafe mil jaayenge, woh unhe jodkar poori kitaab padh lega.',
                listItems: [
                    'Kiske Liye Aacha Hai? Yeh bursty data traffic ke liye sabse best hai, kyunki jab aap data nahi bhej rahe hote, toh network ka raasta doosre logon ke packets use kar sakte hain. Isse resources ka best use hota hai.'
                ]
            }
        ]
    },
    {
        title: 'TCP/IP Protocols aur IP Header',
        label: 'Important',
        description: 'Jab data packets mein jaata hai, toh Transport Layer par do mukhya protocols use hote hain:',
        subSections: [
            {
                title: 'TCP (Transmission Control Protocol) - The Reliable Postman',
                content: ['Yeh pehle receiver se connection banata hai. Is baat ki guarantee leta hai ki saare packets sahi-salamat, sahi order mein pahunche. Agar koi packet gum ho jaata hai, toh use dobara bhejta hai.'],
                example: 'Registered Post/Courier. Delivery se pehle confirmation, aur delivery ke baad acknowledgement (rasid) milti hai. Thoda slow hota hai par guaranteed delivery.',
                listItems: ['Kahan Use Hota Hai: Web browsing (HTTP), Email (SMTP), File Transfer (FTP).']
            },
            {
                title: 'UDP (User Datagram Protocol) - The Fast Postman',
                content: ['Yeh bina connection banaye seedha packets "phenk" deta hai. Koi guarantee nahi ki packet pahunchega ya nahi, ya sahi order mein pahunchega ya nahi.'],
                example: 'Postcard. Aap daal dete ho, par pakka nahi ki milega ya nahi. Lekin ye bahut fast hota hai kyunki koi confirmation ka jhanjhat nahi hai.',
                listItems: ['Kahan Use Hota Hai: Online Gaming, Video Streaming, DNS. Jahan speed zaroori hai aur 1-2 packets miss ho jaayein toh chalega.']
            },
            {
                title: 'IP Packet ka Anatomy - Header ke Andar Kya Hai?',
                content: ['Har data packet ke aage ek "Header" laga hota hai, jismein packet ki saari jaankari hoti hai (kahan se aaya, kahan jaana hai, etc.). Assignment ke hisaab se yeh fields important hain:'],
                isList: true,
                listItems: [
                    'Source and Destination IP Address (32-bits each): Bhejne wale aur paane wale ka address. Yeh sabse zaroori hai.',
                    'HLEN (Header Length - 4 bits): Yeh batata hai ki header kitna lamba hai. Kyunki yeh 4 bit ka hai, iski maximum decimal value 15 ho sakti hai (1111 in binary).',
                    'Time To Live (TTL - 8 bits): Packet ki "expiry date". Har router par iski value 1 kam ho jaati hai. Jab TTL 0 ho jaata hai, packet ko destroy kar diya jaata hai. Yeh packet ko network mein hamesha ke liye ghumne (infinite loop) se rokta hai.',
                    'Protocol (8 bits): Yeh batata hai ki packet ke andar ka data kis postman ka hai - TCP (value 6) ya UDP (value 17).',
                    'Header Checksum (16 bits): Yeh sirf header ki integrity check karne ke liye hota hai. Isse pata chalta hai ki raaste mein header ke saath koi ched-chaad toh nahi hui.',
                ]
            }
        ]
    },

    // =========================================
    // LESS IMPORTANT TOPICS (ORIGINAL TOPICS 1-5)
    // =========================================
    {
      title: 'Hacking se Judi Kuch Aur Important Terminologies',
      label: 'Less Important',
      description: 'In shabdon ko samajhna zaroori hai kyunki yeh poore course mein baar-baar aayenge.',
      subSections: [
        {
          title: 'Hacking vs. Cracking:',
          content: [
            'Hacking: Computer systems ki gehri jaankari hona aur unhe creative tareeke se istemaal karna. Hacking hamesha galat nahi hoti (jaise ethical hacking).',
            'Cracking: Bina permission ke security todkar system mein ghusna aur galat kaam karna. Inhe "Black Hat Hackers" ya "Crackers" kehte hain.',
          ],
          example: 'Ek taale (lock) ki company mein kaam karne wala expert jo taale ki har bareeki jaanta hai, woh ek Hacker hai. Woh us jaankari se behtar taale bana sakta hai. Lekin jo us jaankari ka istemaal karke logon ke gharon mein chori karta hai, woh ek Cracker hai.',
        },
        {
          title: 'Spoofing (Behrupiya Banna):',
          content: ['Ismein hacker apni asli pehchaan (identity) chhupa kar kisi aur ki pehchaan dikhata hai taaki system ko dhokha de sake. Jaise, apna IP address badal kar kisi aur ka IP address dikhana.'],
          example: 'Yeh bilkul waisa hai jaise koi aapko ek anjaan number se call kare, lekin aapke phone par naam aapke "Boss" ka dikhe (Caller ID Spoofing). Hacker bhi aisi hi takneek istemaal karte hain taaki woh lage ki request kisi trusted source se aa rahi hai.',
        },
        {
          title: 'Denial of Service (DoS) Attack (Kaam Thapp Kar Dena):',
          content: ['Kisi website ya server par itna zyada FAKE traffic (bahut saari requests) ek saath bhej dena ki woh server overload hokar crash ho jaaye ya asli users ke liye kaam karna band kar de.'],
          example: 'Socho ek dukan par 1 hi salesman hai. Ab 500 log dukan ke bahar bheed laga dein jinko kuch khareedna nahi hai, bas salesman se faltu ke sawaal puchne hain. Is chakkar mein, jo asli customer (user) hai, woh dukan ke andar ghus hi nahi paayega. Yahan, woh bheed DoS attack hai.',
        },
        {
          title: 'Port Scanning (Darwaze Check Karna):',
          content: ['Ek computer mein hazaron "ports" hote hain, jo alag-alag services (jaise web browsing, email) ke liye "darwaze" ki tarah kaam karte hain. Port scanning woh process hai jismein hacker yeh check karta hai ki target computer par kaun-kaun se darwaze (ports) khule hain, taaki woh unke zariye andar ghusne ki koshish kar sake.'],
          example: 'Ek chor kisi ghar mein chori karne se pehle, poore ghar ka chakkar lagakar check karta hai ki kaun si khidki khuli hai, kaun sa darwaza kamzor hai, ya kahan se ghusna aasaan hoga. Yahi kaam hacker port scanning ke through digital duniya mein karta hai.',
        },
      ],
    },
    {
      title: 'System Mein Ghusne ke Baad Hacker Kya-Kya Kar Sakta Hai?',
      label: 'Less Important',
      description: 'Ek baar hacker system ke andar aa gaya, toh woh kai khatarnak kaam kar sakta hai:',
      subSections: [
        { title: 'Modify Logs (Saboot Mitana):', content: ['Har system ek "log file" banata hai jismein record hota hai ki kab, kaun, aur kahan se login hua. Hacker sabse pehle is log file mein se apne aane ka record mita deta hai.'], example: 'Chori karne ke baad CCTV camera ki recording delete kar dena, taaki koi pehchaan na sake.' },
        { title: 'Install Backdoors (Chor Darwaza Banana):', content: ['Hacker system mein ek "chor darwaza" (backdoor) install kar deta hai. Yeh ek chhota sa software hota hai jisse woh future mein bina mehnat kiye, aasani se us system mein dobara ghus sakta hai.'] },
        { title: 'Steal or Destroy Files (Data Chori ya Barbaad Karna):', content: ['Woh company ki sensitive information, jaise customer data, financial records, ya secret project files, chura sakta hai ya unhe delete karke company ko nuksaan pahuncha sakta hai.'] },
        { title: 'Attack Other Systems (Padosi ke Ghar Hamla):', content: ['Hacker us compromise hue system ka istemaal karke usi network ke doosre computers par hamla kar sakta hai. Isse pakde jaane ka khatra kam ho jaata hai kyunki attack company ke "apne hi" computer se hota hua dikhta hai.'] },
      ],
    },
    {
      title: 'Script Kiddies vs. Experienced Hackers',
      label: 'Less Important',
      description: '',
      subSections: [
        { title: 'Script Kiddies:', content: ['Yeh woh anubhavi (inexperienced) hackers hote hain jinke paas technical knowledge kam hoti hai. Yeh internet se doosre hackers ke banaye hue tools aur scripts download karke unka istemaal karte hain, bina yeh samjhe ki woh tool kaam kaise karta hai.'], example: 'Ek anari chor jo YouTube par video dekh kar tala todna seekhta hai.' },
        { title: 'Experienced Penetration Testers:', content: ['Yeh highly skilled professionals hote hain jo apne khud ke tools aur scripts likhte hain. Unhe systems ki gehri samajh hoti hai aur woh complex se complex security ko bhi todne ka tareeka dhoondh sakte hain.'] },
      ],
    },
    {
      title: 'Legal Boundaries - Kya Kar Sakte Hain Aur Kya Nahi?',
      label: 'Less Important',
      description: 'Ethical Hacking mein "Ethical" (Naitik) shabd sabse zaroori hai.',
      subSections: [
        { title: 'Sabse Bada Niyam:', content: ['Bina likhit (written) permission ke kisi bhi computer, network, ya website ko access karna illegal (gair-kanooni) hai. Permission hi ek ethical hacker aur ek criminal cracker ke beech ka fark hai.'] },
        { title: 'Aapko Kya Nahi Karna Chahiye (Legally):', content: ['Bina ijazat ke kisi ke system mein ghusna.', 'Virus ya Worms install karna.', 'DoS attack karna.', 'Kisi user ko uske data ya network access karne se rokna.'], isList: true },
      ],
    },
    {
      title: 'Networking ke Basic Concepts',
      label: 'Less Important',
      description: '',
      subSections: [
        { title: 'LAN vs. WAN:', content: ['LAN (Local Area Network): Yeh ek chhota network hota hai jo ek hi building, ghar ya office tak seemit hota hai. Jaise aapke ghar ka Wi-Fi network. Yeh fast aur sasta hota hai.', 'WAN (Wide Area Network): Yeh ek bahut bada network hota hai jo shehron, deshon aur poori duniya ko jodta hai. Internet WAN ka sabse bada example hai. Yeh LAN ke mukabale slow aur mehenga hota hai.'], isList: true },
        {
          title: 'The 7-Layer OSI Model (Data Safar Kaise Karta Hai?):',
          content: ['Yeh ek concept model hai jo batata hai ki data ek computer se doosre computer tak 7 alag-alag stages (layers) se hokar kaise guzarta hai. Har layer ka apna ek khaas kaam hota hai. Socho aap ek letter bhej rahe ho:'],
          isList: false,
          listItems: [
              'Layer 7 (Application): Aap letter likhte ho.',
              'Layer 4 (Transport): Aap check karte ho ki saare panne sahi order mein hain (TCP ka kaam).',
              'Layer 3 (Network): Aap lifafe par receiver ka address (IP Address) likhte ho.',
              'Layer 2 (Data Link): Postman dekhta hai ki is gali mein yeh address wala ghar kaun sa hai (MAC Address).',
              'Layer 1 (Physical): Letter actual mein truck/plane (cables/waves) se travel karta hai.'
          ]
        },
        {
          title: 'Internetworking Devices (Network ke Traffic Police):',
          content: [
            'Hub: Ek "bewakoof" device. Iske paas jo bhi data aata hai, yeh use apne se jude har computer ko bhej deta hai, chahe data uske liye ho ya na ho. Isse network mein faltu ka traffic badhta hai.',
            'Switch (Layer-2 Switch): Ek "samajhdar" device. Yeh MAC address ko padhta hai aur data sirf usi computer ko bhejta hai jiske liye woh data hai. Hub se behtar hai.',
            'Router (Layer-3 Switch): Yeh "sabse samajhdar" device hai. Yeh do alag-alag networks (jaise aapke ghar ka LAN aur Internet WAN) ko aapas mein jodta hai. Yeh IP address ko padhkar data ke liye sabse aacha raasta (best route) tay karta hai.'
          ],
          isList: true
        },
      ],
    },
  ],
};