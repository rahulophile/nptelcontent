// src/data/week4.js

// This file contains the complete study material for Week 4.

export const week4Content = {
  id: 4,
  mainTitle: 'Week 4: Reconnaissance & Lab Setup',
  topics: [
    // =========================================
    // IMPORTANT TOPICS (PRIORITY 1, 2, 3, 4)
    // =========================================
    {
        title: 'Hacking Lab Setup - Virtualization',
        label: 'Important',
        description: 'Hacking practice karne ke liye aap kisi ki live website ya network par hamla nahi kar sakte, yeh illegal hai. Isliye hum apne hi computer ke andar ek "nakli" computer banate hain.',
        subSections: [
            {
                title: 'Hypervisor / Virtual Machine Monitor (Ek Jism, Kai Jaan)',
                content: ['Hypervisor ek aisa software hai jo aapko ek hi physical computer par kai alag-alag "Virtual Machines" (VMs) ya nakli computer chalaane ki suvidha deta hai. Har VM ka apna alag Operating System (OS) ho sakta hai, jaise ek par Windows, doosre par Kali Linux.'],
                example: 'Socho aapka computer ek bada sa building hai. Hypervisor us building ka "manager" hai. Yeh manager building ke andar alag-alag logon ko "rent par kamre" (Virtual Machines) de deta hai. Ek kamre mein koi Windows chala raha hai, doosre mein koi Linux, aur yeh sab ek doosre se alag rehte hain.',
                listItems: ['Popular Hypervisors: VirtualBox (free) aur VMware.']
            }
        ]
    },
    {
        title: 'Reconnaissance - Hacking ka Pehla Kadam',
        label: 'Important',
        description: 'Reconnaissance (jasoosi) hacking process ka pehla aur sabse important phase hai. Ismein aap target ke baare mein zyada se zyada jaankari nikalte ho. Iske do prakar hain:',
        subSections: [
            {
                title: '1. Passive Reconnaissance (Door Se Jasoosi)',
                content: ['Ismein aap target se bina direct contact kiye uske baare mein jaankari nikalte ho. Aap aisi information ka istemaal karte ho jo pehle se hi public mein available hai.'],
                example: 'Ek chor ko kisi ghar mein chori karni hai. Woh us ghar ke paas nahi jaata. Balki, woh door baithkar social media par dekhta hai ki ghar ke log kab chutti par jaa rahe hain, Google Maps par ghar ki satellite image dekhta hai.',
                listItems: ['Fayda: Ismein aapke pakde jaane ka chance bilkul nahi hota.']
            },
            {
                title: '2. Active Reconnaissance (Darwaza Khatkhatakar Jasoosi)',
                content: ['Ismein aap target system se direct interact karte ho. Aap uske server ko packets bhejte ho, uske ports ko scan karte ho.'],
                example: 'Ab woh chor ghar ke paas jaata hai aur check karta hai ki kaun sa darwaza lock hai, kaun si khidki kamzor hai, aur doorbell baja kar dekhta hai ki andar koi hai ya nahi.',
                listItems: ['Nuksaan: Ismein aapke pakde jaane ka chance hota hai.']
            }
        ]
    },
    {
        title: 'Passive Reconnaissance ke Auzar (Tools)',
        label: 'Important',
        description: 'Passive jasoosi ke liye yeh kuch popular tareeke hain:',
        subSections: [
            {
                title: 'Google Hacking (Google Dorking)',
                content: ['Google ka istemaal advanced search operators ke saath karke aisi sensitive information dhoondhna jo shayad company public nahi karna chahti thi. Important Operators hain:'],
                isList: true,
                listItems: [
                    '"" (Double Quotes): Exact phrase dhoondhne ke liye. Jaise "Enter your password".',
                    'site:: Sirf ek particular website se result dhoondhne ke liye. Jaise site:example.com admin.',
                    'filetype:: Ek specific file type dhoondhne ke liye. Jaise site:example.com filetype:pdf.'
                ]
            },
            {
                title: 'WHOIS Lookup (Website ka Maalik Kaun?)',
                content: ['Yeh ek public record hai jisse aapko kisi bhi website (domain name) ke maalik ki jaankari milti hai.'],
                example: 'Kya Pata Chalta Hai: Website kiske naam par register hai, unka email ID, phone number, address, aur website kab register hui thi.'
            },
            {
                title: 'Archive.org (The Wayback Machine - Website ki Time Machine)',
                content: ['Yeh ek aisi website hai jo poore internet ki websites ka "screenshot" lekar save karti rehti hai.'],
                example: 'Fayda: Aap iska istemaal karke kisi bhi website ka purana version dekh sakte hain. Ho sakta hai ki purane version mein aisi koi kamzori ya information ho jo ab live website se hata di gayi hai.'
            }
        ]
    },
    {
        title: 'Active Reconnaissance ka Pehla Kaam - Host Discovery',
        label: 'Important',
        description: 'Jab passive jasoosi poori ho jaati hai, to active kaam shuru hota hai. Sabse pehla kaam hai yeh pata lagana ki target "zinda" (live) hai ya nahi.',
        subSections: [
            {
                title: 'Host Discovery / Ping Sweep (Kaun Zinda Hai?)',
                content: ['Ek poori list of IP addresses (e.g., 192.168.1.1 se 192.168.1.254 tak) ko ek-ek karke "ping" karna (ICMP Echo Request bhejna) yeh check karne ke liye ki unmein se kaun se IP address par koi device active hai.'],
                example: 'ICMP Sweep: Hum target ko ek ICMP Echo Request (type 8) packet bhejte hain. Agar target zinda hai, to woh ICMP Echo Reply (type 0) wapas bhejega.',
                listItems: ['NMAP Tool mein Command: NMAP mein sirf host discovery karne ke liye (bina port scan kiye) -sn option ka use hota hai.']
            }
        ]
    },
    // =========================================
    // LESS IMPORTANT TOPICS
    // =========================================
    {
      title: 'NMAP ka Advanced Istemal',
      label: 'Less Important',
      description: 'NMAP (Network Mapper) ek bahut powerful tool hai. Host discovery ke alawa, yeh kai aur zaroori kaam karta hai.',
      subSections: [
        {
          title: 'Port Scanning (Khule Darwaze Dhoondhna)',
          content: ['Host discovery ke baad, NMAP ka sabse bada kaam hai target par "Open Ports" dhoondhna. Har open port par koi na koi service chal rahi hoti hai, jo ki ek potential entry point ho sakti hai.'],
          example: 'Default Scan: Agar aap NMAP ko koi specific port number nahi batate, to woh by default sabse common 1000 TCP ports ko scan karta hai.'
        },
        {
          title: 'Service & Version Detection (Darwaze ke Peeche Kaun Hai?)',
          content: ['Sirf yeh jaanna kaafi nahi ki Port 80 khula hai. Hacker ko yeh bhi jaanna hota hai ki us port par kaun sa web server software (e.g., Apache, Nginx) chal raha hai aur uska version kaun sa hai.'],
          example: 'Kyun Zaroori Hai? Kyunki purane versions mein aksar jaani-maani kamzoriyan (known vulnerabilities) hoti hain. Command: -sV (Version Detection).'
        },
        {
          title: 'OS Detection (Target Kaun sa OS Use Kar Raha Hai?)',
          content: ['NMAP kuch khaas tarah ke packets bhej kar target ke jawab dene ke tareeke ko analyze karta hai. Har OS in packets ka jawab thode alag tareeke se deta hai. Is "fingerprint" ke aadhar par NMAP andaza lagata hai ki target par kaun sa OS chal raha hai.'],
          example: 'Kyun Zaroori Hai? Kyunki har OS ki alag kamzoriyan hoti hain. Command: -O (OS Detection).'
        }
      ],
    },
    {
      title: 'Alag-Alag Tarah ke NMAP Scans',
      label: 'Less Important',
      description: 'NMAP ke paas alag-alag situation ke liye alag-alag scan types hote hain:',
      subSections: [
        {
          title: 'TCP Connect Scan (-sT)',
          content: ['Yeh sabse basic scan hai. NMAP har port se poora "3-Way Handshake" karne ki koshish karta hai. Agar handshake poora ho jaata hai, to port OPEN hai.'],
          example: 'Nuksaan: Yeh scan bahut "noisy" hota hai aur aasani se detect kiya jaa sakta hai.'
        },
        {
          title: 'TCP SYN Scan / Stealth Scan (-sS)',
          content: ['Yeh sabse popular aur default scan hai. Ismein NMAP 3-Way Handshake ko poora nahi karta. NMAP ek SYN packet bhejta hai, agar SYN-ACK wapas aata hai (port OPEN), to turant RST bhej kar connection tod deta hai.'],
          example: 'Fayda: Isse "Stealth Scan" (chupke se scan) kehte hain aur iske detect hone ke chance kam hote hain.'
        },
        {
          title: 'UDP Scan (-sU)',
          content: ['Yeh UDP ports ko scan karne ke liye hota hai. Yeh scan karna mushkil aur slow hota hai. Agar port CLOSED hai, to target ICMP Port Unreachable ka error bhejta hai. Agar koi jawab nahi aata, to port OPEN ya FILTERED ho sakta hai.'],
        }
      ],
    },
    {
      title: 'Hacking Lab Setup ke Components',
      label: 'Less Important',
      description: 'Ek aachi ethical hacking lab banane ke liye aapko 3 cheezon ki zaroorat hoti hai (jo aap Hypervisor ke andar banate ho):',
      subSections: [
        {
            title: '1. Hypervisor Software',
            content: ['VirtualBox ya VMware (humne pehle discuss kiya).']
        },
        {
            title: '2. Attacker Machine',
            content: ['Yeh woh VM hai jisse aap hamla karoge. Iske liye sabse best OS hai Kali Linux, kyunki ismein hacking ke saare tools pehle se hi install hokar aate hain.'],
        },
        {
            title: '3. Victim Machine(s)',
            content: ['Yeh woh VM hai jispar aap hamla karoge. Iske liye, kuch jaankar banayi gayi "kamzor" (vulnerable) machines aati hain, jaise Metasploitable 2/3. Aap purane OS jaise Windows XP ya Windows 7 bhi install kar sakte hain.'],
        }
      ],
    },
    {
      title: 'Reconnaissance se Bachne ke Upay (Countermeasures)',
      label: 'Less Important',
      description: 'Agar aap ek company chala rahe hain, to aap jasoosi se bachne ke liye kya kar sakte hain?',
      subSections: [
        {
          title: '',
          content: [
              'Public Information Kam Karein: Apni website par zaroorat se zyada technical details ya employee details public na karein.',
              'WHOIS Privacy: Domain register karte waqt "WHOIS Privacy Protection" service ka istemaal karein.',
              'Split DNS: Apne internal aur external network ke liye alag-alag DNS server ka istemaal karein.',
              'Firewall Configuration: Apne firewall ko aache se configure karein taaki woh anjaan scan attempts ko detect karke block kar sake.',
              'Employee Training: Apne employees ko Social Engineering attacks ke baare mein train karein.'
          ],
          isList: true
        }
      ],
    },
  ],
};