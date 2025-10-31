// src/data/week3.js

// This file contains the complete study material for Week 3.

export const week3Content = {
  id: 3,
  mainTitle: 'Week 3: Routing Concepts & Protocols',
  topics: [
    // =========================================
    // IMPORTANT TOPICS (PRIORITY 1, 2, 3)
    // =========================================
    {
        title: 'Routing ke Concepts (Router ka Dimag)',
        label: 'Important',
        description: 'Router ka kaam ek postman jaisa hai. Uske paas jab koi packet (chitthi) aati hai, to woh address dekh kar decide karta hai ki isse aage kis raaste par bhejna hai. Yeh decision lene ke do tareeke hain:',
        subSections: [
            {
                title: '1. Static Routing (Manual Entry)',
                content: ['Ismein network administrator har router ko haath se (manually) batata hai ki "kis address par jaane ke liye packet kis darwaze (interface) se bahar bhejna hai." Router khud se kuch nahi seekhta.'],
                example: 'Aapne apne ghar ke guard ko ek fixed list de di hai: "Agar Amazon ka delivery boy aaye, to usse Gate A se bhejna. Agar Zomato wala aaye, to usse Gate B se bhejna." Guard is list ke alawa apna dimag nahi lagayega. Agar kal ko Gate A band ho jaaye, to guard Amazon wale ko wapas bhej dega.',
                listItems: ['Fayde: Simple aur secure.', 'Nuksaan: Bade network mein bahut mehnati kaam hai.']
            },
            {
                title: '2. Dynamic Routing (Automatic Learning)',
                content: ['Ismein routers aapas mein baat karke ek doosre ko apne padosi raaston ke baare mein batate hain. Is tarah woh automatically network ka poora "map" seekh jaate hain aur packet bhejne ke liye sabse aacha raasta (best path) khud chunte hain.'],
                example: 'Yeh Google Maps ki tarah hai. Aap bas destination daalte ho, aur Maps khud traffic, sadak bandi, aur shortcuts dekh kar aapko best route bata deta hai. Agar raaste mein aage jaakar traffic jam milta hai, to woh aapko automatically doosre raaste par divert kar deta hai.',
                listItems: ['Fayde: Bade networks ke liye best hai, automatic hai, aur alternate raasta dhoondh leta hai.', 'Nuksaan: Thoda complex hai aur network ki speed ka istemaal karta hai.']
            },
            {
                title: 'Default Route (Jab Koi Raasta Samajh Na Aaye)',
                content: ['Har router ki routing table mein ek "last option" hota hai jise Default Route kehte hain. Jab router ke paas ek aisa packet aata hai jiska destination address uski routing table mein kahin bhi nahi milta, to woh us packet ko Default Route par bhej deta hai. Iska address hamesha 0.0.0.0 hota hai.'],
                example: 'Ek office building ka reception. Agar receptionist ke paas ek aisi chitthi aati hai jispar likha naam woh nahi jaanti, to woh use "Admin Office" mein bhej deti hai. Yahan par Admin Office Default Route hai.'
            }
        ]
    },
    {
        title: 'Routing Protocols ki Duniya (RIP, OSPF, BGP)',
        label: 'Important',
        description: 'Dynamic routing karne ke liye alag-alag protocols hote hain. Inhe do groups mein baanta jaata hai:',
        subSections: [
            {
                title: 'IGP vs. EGP',
                content: [
                    'IGP (Interior Gateway Protocol): Ek hi company ya organization ke andar use hone wale protocol (e.g., ek university campus ke andar). Examples: RIP aur OSPF.',
                    'EGP (Exterior Gateway Protocol): Do alag-alag organizations ke beech use hone wala protocol (e.g., Jio aur Airtel ke network aapas mein). Example: BGP.'
                ]
            },
            {
                title: 'RIP (Routing Information Protocol) - Padosi par Bharosa',
                content: ['Yeh ek "Distance Vector" protocol hai. Yeh sirf "hops" (kitne router paar karne hain) ginta hai, speed nahi dekhta.'],
                example: 'Sabse Badi Samasya: Count-to-Infinity Problem. Agar network mein koi raasta down ho jaata hai, to yeh galat information bahut dheere-dheere aage badhti hai aur routers ek doosre ko galat raasta batate rehte hain.'
            },
            {
                title: 'OSPF (Open Shortest Path First) - Sabke Paas Poora Naksha',
                content: ['Yeh ek "Link State" protocol hai. Ismein har router ke paas apne network ka poora naksha (map) hota hai. Jab koi packet aata hai, to woh naksha dekh kar khud se sabse chota aur tez raasta (shortest path) calculate karta hai.'],
                example: 'OSPF routers har 10 second mein padosiyon ko "Hello" packet bhejte rehte hain. Agar 40 second tak jawab nahi aata, to router samajh jaata hai ki padosi down ho gaya hai.'
            },
            {
                title: 'BGP (Border Gateway Protocol) - Internet ka Protocol',
                content: ['Yeh Internet ki reedh ki haddi hai. Yeh ek EGP hai jo alag-alag Autonomous Systems (AS) ko jodta hai (AS matlab ek bada network jaise Jio, Airtel).'],
                example: 'BGP do deshon ke beech ka "diplomatic protocol" hai. Yeh sirf raaste hi nahi batata, balki policies (niyam) bhi dekhta hai. Jaise, "Jio ke network se America jaane ke liye Airtel ka raasta istemaal karna hai, lekin Pakistan ke network se nahi jaana hai."'
            }
        ]
    },
    {
        title: 'Internet ka Future - IPv6 ke Basics',
        label: 'Important',
        description: 'IPv4 addresses (jo 32-bit ke the) ab khatam ho rahe hain. Isliye naya version, IPv6, banaya gaya.',
        subSections: [
            {
                title: 'Sabse Bada Badlav - Address Size',
                content: ['IPv6 ka address 128-bit lamba hota hai. Isse itne zyada addresses milte hain ki hum dharti ke har ret ke kan ko bhi ek IP address de sakte hain.'],
            },
            {
                title: 'Koi Address Class Nahi',
                content: ['IPv6 mein Class A, B, C jaisa koi concept nahi hota. CIDR ki tarah, ismein prefix length ka use hota hai.'],
            },
            {
                title: 'Header Simpler, but Bigger',
                content: ['IPv6 ka base header 40 bytes ka hota hai (IPv4 ka 20 bytes tha). Ismein se faltu fields hata di gayi hain taaki routers isse jaldi process kar sakein.'],
            }
        ]
    },
    // =========================================
    // LESS IMPORTANT TOPICS
    // =========================================
    {
      title: 'Packet Delivery ke Prakar',
      label: 'Less Important',
      description: 'Computer (host) khud check karta hai ki destination kahan hai. Iske do tareeke hain:',
      subSections: [
        {
          title: '1. Direct Delivery (Padosi ko Chitthi Dena)',
          content: ['Jab bhejne wale computer (source) aur paane wale computer (destination) ek hi local network (LAN) par hote hain. Computer ko packet router ke paas bhejne ki zaroorat nahi padti.'],
          example: 'Aapko apne padosi ko ek chitthi deni hai. Aap post office nahi jaoge. Aap seedha unke ghar jaakar chitthi de doge.'
        },
        {
          title: '2. Indirect Delivery (Doosre Sheher Mein Chitthi Bhejna)',
          content: ['Jab source aur destination computer alag-alag networks par hote hain. Source computer packet ko apne Default Gateway (router) ko de deta hai, jo aage packet ko manzil tak pahunchata hai.'],
          example: 'Aapko Delhi se Mumbai chitthi bhejni hai. Aap chitthi ko apne local post office (Default Gateway) mein daalte ho.'
        },
      ],
    },
    {
      title: 'Routing Table ki Andar ki Baatein',
      label: 'Less Important',
      description: 'Routing table ek "address book" jaisi hai jise router istemaal karta hai. Ismein kuch khaas columns aur flags hote hain.',
      subSections: [
        {
          title: 'Mukhya Columns',
          content: ['Destination, Subnet Mask, Next Hop / Gateway, Interface'],
        },
        {
          title: 'Routing Table ke Flags (Chhote-Chhote Ishāre)',
          content: ['Routing table mein har raaste ke aage kuch letters (flags) likhe hote hain jo us raaste ke baare mein extra jaankari dete hain.'],
          isList: true,
          listItems: [
              'U (Up): Raasta chalu (active) hai.',
              'H (Host): Raasta ek single computer (host) ke liye hai.',
              'G (Gateway): Yeh sabse important hai. Packet ko ek Gateway (doosre router) se hokar jaana padega. Yeh Indirect Delivery ka ishara hai.'
          ]
        },
      ],
    },
    {
      title: 'Routing Protocols ki Message Types',
      label: 'Less Important',
      description: 'Dynamic routing protocols aapas mein baat karne ke liye alag-alag tarah ke messages bhejte hain.',
      subSections: [
        {
          title: 'OSPF ke Khaas Messages',
          content: [
              'Hello Packet: "Hi Padosi, sab theek hai?" - Padosi router ko check karne ke liye.',
              'LSA (Link-State Advertisement): "Breaking News! Mere network ka ek raasta badal gaya hai." - Network mein badlav update karne ke liye.'
          ],
          isList: true
        },
        {
          title: 'BGP ke Khaas Messages',
          content: [
              'Open: "Hello, main Jio ka router hoon. Main aapse routing information exchange karna chahta hoon."',
              'Update: "FYI, mere paas Google ke server tak jaane ka ek naya raasta hai."',
              'Keepalive: "Sab theek chal raha hai na?" - Connection zinda rakhne ke liye.',
              'Notification: "Oops! Kuch gadbad ho gayi hai." - Error batane ke liye.'
          ],
          isList: true
        },
      ],
    },
    {
      title: 'IPv6 ki Advanced Details',
      label: 'Less Important',
      description: '',
      subSections: [
        {
          title: 'IPv6 Address Likhne ka Tareeka (Colon Hexadecimal)',
          content: ['Kyunki IPv6 address (128-bit) bahut lamba hota hai, use aasaan banane ke liye Hexadecimal mein likha jaata hai. Har 16 bit ke group ke baad ek colon (:) lagaya jaata hai.'],
          example: 'Shortcut Rule: Agar beech mein bahut saare zero (0000) ke group ek saath aa rahe hon, to unhe ek baar double colon (::) se replace kar sakte hain. Jaise: fe80:0000::abcd:1234 ko fe80::abcd:1234 likh sakte hain.'
        },
        {
          title: 'IPv6 Address ke Types',
          content: [],
          isList: true,
          listItems: [
              'Unicast: One-to-One communication. (Ek computer se doosre computer).',
              'Multicast: One-to-Many communication. (Ek computer se ek specific group ke saare computers ko).',
              'Anycast: One-to-Nearest communication. (Packet group ke kisi bhi ek, jo sabse paas ho, member ko bhej diya jaata hai).'
          ]
        },
      ],
    },
  ],
};