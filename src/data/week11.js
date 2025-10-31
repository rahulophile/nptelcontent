// src/data/week11.js

// This file contains the complete study material for Week 11.

export const week11Content = {
  id: 11,
  mainTitle: 'Week 11: Exploitation with Metasploit & Web App Attacks',
  topics: [
    // =========================================
    // IMPORTANT TOPICS
    // =========================================
    {
        title: 'Metasploit Framework - Hacking ka Swiss Army Knife',
        label: 'Important',
        description: 'Metasploit ek platform hai jo ethical hackers ko ek hi jagah par hacking ke liye zaroori saare tools aur options deta hai. Iske alag-alag compartments ko Modules kehte hain.',
        subSections: [
            {
                title: '1. Exploit Module (Tala Todne ka Auzar)',
                content: ['(Question 1): Yeh ek code ka tukda hota hai jo target system ki kisi specific kamzori (vulnerability) ka fayda uthakar usmein ghusne ka kaam karta hai.'],
            },
            {
                title: '2. Payload Module (Ghusne ke Baad Kya Karna Hai?)',
                content: ['(Question 7): Ek baar exploit kaamyaab ho gaya aur aap system ke andar ghus gaye, to uske baad aap kya karna chahte ho? Yeh "kya karna hai" wala code Payload kehlata hai.'],
                example: 'Types of Payloads: Command Shell (simple command line), Meterpreter (Question 2 - advanced payload jisse aap file upload/download, screenshot le sakte ho, etc.).'
            },
            {
                title: '3. Encoder Module (Bhes Badalna)',
                content: ['(Question 4): Payloads ko Antivirus software aksar pakad lete hain. Encoder module in payloads ka "bhes badal" deta hai, unhe encode karke unka signature badal deta hai, taaki woh Antivirus ki pakad mein na aayein.'],
            },
            {
                title: '4. Auxiliary Module (Jasoosi aur Doosre Kaam)',
                content: ['Ismein woh saare tools aate hain jo direct hacking nahi karte, balki uski taiyari mein madad karte hain. Jaise port scanning, vulnerability scanning, DoS attack karna, etc.'],
            }
        ]
    },
    {
        title: 'SQL Injection (SQLi) - Database se Khelna',
        label: 'Important',
        description: 'Yeh ek web application attack hai. Jab ek website user se input leti hai aur us input ko bina aache se check (validate) kiye seedha apne database ki query mein daal deti hai, to hacker us input field mein SQL command daal kar database ko control kar sakta hai.',
        subSections: [
            {
                title: 'Real-life Example',
                content: ['Librarian se aap kehte hain, "Mujhe \'Harry Potter\' naam ki kitaab chahiye." Query: SELECT * FROM books WHERE name = \'Harry Potter\'; Hacker kehta hai, "Mujhe \'\' OR \'1\'=\'1\' naam ki kitaab chahiye." Query: SELECT * FROM books WHERE name = \'\' OR \'1\'=\'1\'; Kyunki \'1\'=\'1\' hamesha TRUE hota hai, database iska matlab samjhega "Saari kitabein de do."'],
            },
            {
                title: 'Types of SQLi',
                content: [
                    '(Question 6):',
                    '- Error-based: Jaan-boojh kar aisi query daalna jisse database error de. Error message se jaankari mil jaati hai.',
                    '- Blind SQLi: (Question 8) Ismein website koi error nahi dikhati. Hacker "sach/jhooth" wale sawaal pooch kar (boolean-based) ya server ke response time ko dekh kar (time-based) dheere-dheere data nikalta hai.'
                ],
                isList: true
            },
            {
                title: 'SQLMAP - SQLi ka Automatic Hathiyaar',
                content: ['(Question 5, 9): SQLMAP ek tool hai jo SQL Injection process ko automate kar deta hai. Aap bas usse target URL dete ho, aur woh khud hi kamzori dhoondhta hai aur data nikalta hai. Jaise --dbs command se saare database names nikalta hai.'],
            }
        ]
    },
    {
        title: 'Cross-Site Scripting (XSS) - User ke Browser ko Hijack Karna',
        label: 'Important',
        description: 'Yeh bhi ek injection attack hai, lekin iska target database nahi, balki website ke doosre users hote hain. Ismein hacker ek kamzor website ke zariye victim ke browser mein malicious JavaScript code chalwata hai.',
        subSections: [
            {
                title: 'Types of XSS',
                content: [
                    '(Question 10):',
                    '1. Stored (Persistent) XSS: Hacker apna malicious script (jaise <script>alert(\'Hacked\')</script>) website ke comment section jaisi jagah par save kar deta hai. Ab jo bhi us comment ko dekhega, script uske browser mein chal jaayegi.',
                    '2. Reflected (Non-Persistent) XSS: Hacker ek special link banata hai jiske URL mein malicious script hota hai. Jab victim us link par click karta hai, to website us script ko page mein "reflect" karti hai aur script victim ke browser mein chal jaati hai.',
                    '3. DOM-based XSS: Yeh ek advanced type hai jahan attack poori tarah se victim ke browser ke andar hi hota hai.'
                ],
                isList: true
            }
        ]
    },
    // =========================================
    // LESS IMPORTANT TOPICS
    // =========================================
    {
      title: 'Metasploit ki Bhaasha - Options aur Commands',
      label: 'Less Important',
      description: 'Jab aap Metasploit ka istemaal karte hain, to aapko exploit ko "configure" karna padta hai.',
      subSections: [
        {
          title: 'LHOST vs. RHOST (Local vs. Remote)',
          content: [
              'LHOST: Iska matlab hai "mera" ya "attacker ka" IP address. Yeh woh IP hai jahan aap reverse connection ka intezar kar rahe ho.',
              'RHOST: Iska matlab hai "uska" ya "victim ka" IP address jispar aap hamla kar rahe ho.'
          ],
          isList: true
        },
        {
            title: 'LPORT vs. RPORT (Local vs. Remote Port)',
            content: [
                '(Question 3):',
                'LPORT (Local Port): Yeh attacker ki machine ka woh port number hai jispar woh incoming connection ka intezar kar raha hai.',
                'RPORT (Remote Port): Yeh target machine ka woh port number hai jispar kamzor (vulnerable) service chal rahi hai.'
            ],
            isList: true
        }
      ],
    },
    {
      title: 'File Upload Vulnerabilities',
      label: 'Less Important',
      description: 'Kai websites users ko files upload karne ki suvidha deti hain. Yeh vulnerability tab hoti hai jab website is baat ko aache se check nahi karti ki user kis tarah ki file upload kar raha hai.',
      subSections: [
        {
          title: 'Attack Kaise Hota Hai?',
          content: ['Website umeed kar rahi hai ki user ek image file (.jpg) upload karega. Lekin hacker ek malicious script file (.php) ko .jpg jaisa naam dekar upload kar deta hai. Agar website ne file ke content ko check nahi kiya, to hacker us file ko URL se khol kar server par execute kar sakta hai. Isse hacker ko server par ek "web shell" mil jaata hai, jisse woh server ko control kar sakta hai.'],
        }
      ],
    },
  ],
};