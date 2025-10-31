// src/data/week5.js

// This file contains the complete study material for Week 5.

export const week5Content = {
  id: 5,
  mainTitle: 'Week 5: Vulnerability Scanning & System Hacking',
  topics: [
    // =========================================
    // IMPORTANT TOPICS
    // =========================================
    {
        title: 'NMAP ka Jaadu - The NMAP Scripting Engine (NSE)',
        label: 'Important',
        description: 'Socho NMAP ek security guard hai. Basic scan mein woh bas yeh check karta hai ki kaun se darwaze (ports) khule hain. Lekin NSE (NMAP Scripting Engine) us guard ko ek special toolkit deta hai jisse woh har darwaze ki gehri jaanch kar sakta hai.',
        subSections: [
            {
                title: 'NSE Kya Hai?',
                content: [
                    'Yeh NMAP ke andar chote-chote programs (scripts) ka ek collection hai. Har script ek khaas kaam karne ke liye banayi gayi hai, jaise:',
                    '- Kisi service mein koi jaani-maani kamzori (vulnerability) dhoondhna.',
                    '- System se extra information nikalna.',
                    '- Backdoors detect karna.',
                ],
                isList: true
            },
            {
                title: 'Important NSE Commands',
                content: [
                    '--script=default (Question 2): Yeh NMAP ko bolta hai ki "jo standard, safe scripts hain, bas unhe chalao." Yeh scripts zyada aakramak (aggressive) nahi hoti.',
                    '--script <script-name>: Isse aap koi ek specific script chala sakte hain.',
                ],
                example: 'Question 3: --script http-slowloris-check yeh command NMAP ko bolta hai ki "check karo ki target web server Slowloris DoS attack se kamzor hai ya nahi."',
                listItems: ['Scripts Kahan Hoti Hain? (Question 1): Linux system mein NMAP ki saari scripts aam taur par /usr/share/nmap/scripts/ folder mein rakhi hoti hain.']
            }
        ]
    },
    {
        title: 'System Hacking - Tala Todne ki Kala (Password Cracking)',
        label: 'Important',
        description: 'Ek baar aapko pata chal jaaye ki target par kaun si service (e.g., SSH, FTP) chal rahi hai, agla kadam uska password todna hota hai.',
        subSections: [
            {
                title: 'Hydra (The Brute-Forcer)',
                content: ['(Question 6 & 7): Hydra ek bahut hi popular tool hai jo alag-alag network services (jaise SSH, FTP, Telnet) par brute-force attack karta hai.'],
                example: 'Kaise Kaam Karta Hai: Aap Hydra ko ek username (ya usernames ki list) aur ek passwords ki list (wordlist) dete ho. Hydra automatic, bahut tezi se, har password ko try karta hai jab tak usse sahi combination na mil jaaye.'
            },
            {
                title: 'Crunch (The Custom Key-Maker)',
                content: ['(Question 5): Hydra jaise tools ko passwords try karne ke liye ek list chahiye hoti hai. Crunch woh tool hai jo aapke liye custom password lists (wordlists) banata hai. Yeh khud attack nahi karta, bas attack ke liye "hathiyaar" (wordlist) taiyar karta hai.'],
                example: 'Iski Khaasiyat: Agar aapko pata hai ki target ka password 8 characters ka hai, jismein \'abc\' aayega aur aakhir mein 123 aayega, to aap Crunch ko bol sakte ho ki inhi rules ke aadhar par ek list banao.'
            }
        ]
    },
    {
        title: 'User Enumeration aur Keyloggers',
        label: 'Important',
        description: '',
        subSections: [
            {
                title: 'User Enumeration (Sahi Logon ke Naam Pata Karna)',
                content: ['(Question 8): Yeh woh process hai jismein ek attacker kisi system ya service par valid usernames ki list nikalne ki koshish karta hai.'],
                example: 'Kyun Zaroori Hai? Kyunki agar aapko ek valid username (e.g., \'admin\', \'rohit\') mil jaaye, to aapka kaam aadha ho jaata hai. Ab aapko sirf password guess karna hai, username nahi.'
            },
            {
                title: 'Keylogger (Har Harkat par Nazar)',
                content: ['(Question 9): Keylogger ek tarah ka malware hai jo computer mein chhup kar install ho jaata hai aur user keyboard par jo kuch bhi type karta hai—har ek \'keystroke\'—use record karta hai.'],
                example: 'Sabse Bada Khatra: Yeh aapke usernames, passwords, credit card details, personal chats, sab kuch record karke hacker ko bhej sakta hai, aur aapko pata bhi nahi chalega.'
            }
        ]
    },
    // =========================================
    // LESS IMPORTANT TOPICS
    // =========================================
    {
      title: 'Malware ki Duniya (Virus, Worms, Trojans)',
      label: 'Less Important',
      description: '"Malware" (Malicious Software) ek umbrella term hai jiske andar har tarah ke harmful programs aate hain.',
      subSections: [
        {
          title: 'Trojan Horse (Dost ke Bhes Mein Dushman)',
          content: ['Trojan ek aisa program hai jo dikhne mein aacha aur kaam ka lagta hai (jaise koi game), lekin uske andar malicious code chhupa hota hai. Jab aap us software ko chalate hain, to peeche se malicious code bhi activate ho jaata hai aur hacker ko aapke system ka control de deta hai.'],
          example: 'Yeh us kahani jaisa hai jismein Greek sainik ek lakdi ka ghoda (Trojan Horse) उपहार ke taur par Troy sheher ke andar bhejte hain. Raat ko us ghode mein se sainik nikal kar poore sheher par kabza kar lete hain.'
        },
        {
          title: 'Virus (Chipkoo Bimari)',
          content: ['Virus ek malicious code ka tukda hota hai jo apne aap ko doosri "saaf" files ke saath chipka leta hai. Virus ko failne ke liye insani madad (human action) ki zaroorat hoti hai. Jab aap us infected file ko run karte hain, tabhi virus activate hota hai.'],
          example: 'Yeh flu (zukam) jaisa hai. Yeh apne aap hawa mein ud kar nahi jaata. Jab koi chheenkta hai (human action) tabhi doosre ko lagta hai.'
        },
        {
          title: 'Worm (Aatmanirbhar Keeda)',
          content: ['Worm bhi virus ki tarah apni copies banata hai, lekin isko failne ke liye insani madad ki zaroorat nahi hoti. Yeh network ki kamzoriyon ka fayda uthakar apne aap ek computer se doosre computer mein travel karta hai.'],
          example: 'Yeh ek keede jaisa hai jo zameen ke neeche-neeche surang banakar ek ghar se doosre ghar tak apne aap pahunch jaata hai.'
        }
      ],
    },
    {
      title: 'Network Sniffing (Traffic Chupke se Sunna)',
      label: 'Less Important',
      description: 'Packet Sniffing network par travel kar rahe data packets ko "pakadne" (capture) aur "padhne" (analyze) ka process hai. Iske liye Wireshark jaise tools ka istemaal hota hai.',
      subSections: [
        {
            title: 'Khatra',
            content: ['Agar data encrypt nahi hai (clear text mein hai), to sniffer aapke usernames, passwords, aur messages ko aasani se padh sakta hai.']
        },
        {
          title: 'Promiscuous Mode (Sabki Baatein Sunna)',
          content: ['Aam taur par, computer ka Network Card (NIC) sirf unhi packets ko receive karta hai jo uske liye bheje gaye hain. Lekin, jab ek sniffer "Promiscuous Mode" on karta hai, to NIC network par jaa rahe sabhi packets ko pakadta hai, chahe woh uske liye ho ya na ho.'],
        },
        {
          title: 'Passive vs. Active Sniffing',
          content: [
              'Passive Sniffing: Yeh purane Hub wale networks par kaam karta tha. Hub har packet ko sabhi computers ko bhej deta tha, isliye sniffer ko bas chupchap sunna hota tha.',
              'Active Sniffing: Aajkal ke Switches "samajhdar" hote hain aur packet sirf asli receiver ko bhejte hain. Isliye, switch wale network par sunne ke liye, hacker ko ARP Spoofing jaisi takneekein use karni padti hain taaki traffic apni taraf divert karwa sake.'
          ],
          isList: true
        },
      ],
    },
    {
      title: 'ARP Protocol aur Uski Kamzori',
      label: 'Less Important',
      description: '',
      subSections: [
        {
          title: 'ARP (Address Resolution Protocol) ka Kaam Kya Hai?',
          content: ['(Question 10): Local network (LAN) par communication karne ke liye IP Address aur MAC Address dono ki zaroorat hoti hai. ARP woh protocol hai jo IP address ko uske corresponding MAC address mein "translate" karta hai.'],
          example: 'Computer A poore network mein chillakar poochta hai, "Hey! Jiska bhi IP address 192.168.1.5 hai, woh apna MAC address batao?" Computer B jawab deta hai, "Mera MAC address hai [...]".'
        },
        {
          title: 'ARP Spoofing / Poisoning (Dhokhe se Traffic Apni Taraf Modna)',
          content: ['ARP ki Kamzori: ARP protocol mein koi security nahi hoti. Woh yeh check nahi karta ki jo jawab de raha hai, woh sahi hai ya galat.'],
          example: 'Attack: Hacker, Router ko bolta hai: "A ka MAC address [Hacker ka MAC] hai." Aur A ko bolta hai: "Router ka MAC address [Hacker ka MAC] hai." Natija: Ab A aur Router ke beech ka saara traffic pehle hacker ke computer se hokar guzarta hai. Isse Man-in-the-Middle (MITM) attack kehte hain.'
        }
      ],
    },
  ],
};