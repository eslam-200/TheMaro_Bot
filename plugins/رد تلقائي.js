let handler = m => m; 
 handler.all = async function (m) { 

   let chat = global.db.data.chats[m.chat]; 
   let responses; 
   if (/^هلا$/i.test(m.text)) { 
     responses = [ 
 '*هلا بيك يعمري 😩❤‍🔥*'  
     ]; 
     }else if (/^اوكك|اوككك|اوكي|اوكيي|اوكييي$/i.test(m.text)) { 
     responses = [ 
'*اوك 🌚🦦*'
     ]; 
} else if (/^السلام عليكم|سلام عليكم ورحمه الله وبركاته|سلام عليكم|السلام عليكم ورحمه الله وبركاته$/i.test(m.text)) { 
     responses = [ 
       '*♥🐥وعليكم السلام*',  
     ]; 
     }else if (/^بوت ابن متناكه$/i.test(m.text)) { 
     responses = [ 
'*مفيش متناكه من بعد امك متشتمش البوت يخول🫵🏻*',
     ]; 
     }else if (/^ميتين البوت$/i.test(m.text)) { 
     responses = [ 
'*علي ميتين امك يعرص متشتمش البوت🫵🏻*',
     ]; 
     }else if (/^بوت عرص$/i.test(m.text)) { 
     responses = [ 
'*مفيش عرص غيرك هنا يخول متشتمش البوت🫵🏻*',
     ]; 
     }else if (/^بوت خول$/i.test(m.text)) { 
     responses = [ 
'*مفيش خول من بعدك يعرص متشتمش البوت🫵🏻*',
     ]; 
   }else if (/^بخير|بخير الحمد لله $/i.test(m.text)) { 
     responses = [ 
'*دايما يارب 💎🩵*',
     ]; 
     }else if (/^كسم البوت|كسم بوت|كسمك يابوت$/i.test(m.text)) { 
     responses = [ 
'*كسمين امك يخول متشتمش البوت يعرص🫵🏻*',
     ]; 
     }else if (/^يجوزي|جوزي|جوزيي$/i.test(m.text)) { 
     responses = [ 
'*قلب جوزك🦦🫶🏻*',
     ]; 
     }else if (/^بعشقك|بعشقكك|بعشقككك$/i.test(m.text)) { 
     responses = [ 
'*بـمـوت فـيـك😍🫵🏻*',
     ]; 
     }else if (/^قلبي|يقلبي|يقلبيي$/i.test(m.text)) { 
     responses = [ 
'*قلب قلبك🌚✨*',
     ]; 
 }else if (/^بوت علق$/i.test(m.text)) { 
     responses = [ 
'*مفيش علق من بعد ابوك يخول متشتمش البوت🫵🏻*',
     ]; 
 }else if (/^خخخخخ$/i.test(m.text)) { 
     responses = [ 
'*خوخ ومنجا وسوق العبور كلو🧏🏻‍♂️🦦*',
      '*حـاسـب لـتـشـرق😂*', 
      '*هـشـرق يـسـطـا😅*', 
     ]; 
 }else if (/^بوت عاق$/i.test(m.text)) { 
     responses = [ 
'*كسمك اللي عاق متشتمش البوت يمعرص🫵🏻*',
     ]; 
 }else if (/^كداب|شرير$/i.test(m.text)) { 
     responses = [ 
'*مظلوم اككيد😩❤‍🔥*',
     ]; 
   }else if (/^مرتبط$/i.test(m.text)) { 
     responses = [ 
'*هتشقطينى يبت 😂😁*',
   ]; 
   }else if (/^بوت بتحبني؟|بوت بتحبنى$/i.test(m.text)) { 
     responses = [ 
'*اموت فيك 🌚💔*',
'*اكرهك🙂💔*',
'*احبك نص حب 🙃💔*',
]; 
   }else if (/^بوت بتكرهني؟$/i.test(m.text)) { 
     responses = [ 
'*ماعاش من يكرهكك حبي 🙁*',
'*لا بس لا تتعب نفسك لحبك🫥*',
'*ااه اكرهك🙄*',   ]; 
     
     }else if (/^هاي$/i.test(m.text)) { 
     responses = [ 
       '*هالو🌚♥*',  

     ]; 
}else if (/^بحبك/i.test(m.text)) { 
     responses = [ 
       '*بحبك اكتر🌚❤*',
      '*هـفـكـر فـالـمـوضـع😑✨*',
      '*يـاقـلـيـل الادب🫵🏻*',
      '*الاحـسـن خـلـيـنـا صـحـاب🙃*',
      '*وانـا كـمـان بـحـبـنـي🌚*',
      '*عـارف🦦*'

     ]; 
   }else if (/^بموتفيك|بموت فيك|بموت فيكك|بموت فيككك$/i.test(m.text)) { 
     responses = [ 
'*بـدمـنـكككك💋*',
     ]; 
   } else if (/^عيب|عيبب|عيببب|عيبببب$/i.test(m.text)) { 
     responses = [ 
'*بـرحـتـي🌚✨*',
      '*مـفـيـش عـيـب بـيـنـا🙃*',
      '*الـعـيـب فـالـجـيـب*',
     ]; 
     }else if (/^🌚|😉|🥹$/i.test(m.text)) { 
     responses = [ 
       '😘',  

     ];
     }else if (/^تحبني$/i.test(m.text)) { 
     responses = [ 
       '🌚♥اكيد',  

     ];
     }else if (/^بتحبني|بتحبني؟|بتحبنيي$/i.test(m.text)) { 
     responses = [ 
       '*بـعـشقـككك💋✨*',  

     ];
     }else if (/^احا|احاا|احااا|احاااا$/i.test(m.text)) { 
     responses = [ 
       '*احتين علي احتك🦦✨*',  

     ];
     }else if (/^مارو$/i.test(m.text)) { 
     responses = [ 
       '*قـلـب مـارو💋✨*',
      '*ارغـي يـعـم🙄*',
      '*عـاوز اي مـن مـارو😐*',
      '*اسـتـر يـارب*',
      '*قـول عـاوز ايـة عـلـطـول🐥*',
      '*مـارو هـيـجـب اخـرو مـنـكـم🥲*',
      '*يـعـم ارغـي واخـلـص😒*', 
      '*هـات مـن الاخـر🙄*', 
      '*بـصـراحـه بـقـا مـارو اتـبـضـن🥲*', 

     ]; 
     }else if (/^هات بوسه|هات بوسة|بوسه|بوسة$/i.test(m.text)) { 
     responses = [ 
       '*مححح💋*',  

     ];
     }else if (/^انت عسل|انت عسلل|انت عسللل$/ .test(m.text)) { 
     responses = [ 
       '*وانتي قمر🦦🫶🏻*',  
     ];
       }else if (/^اوامر$/i.test(m.text)) { 
     responses = [ 
       '*لا تنسى ال .*',  
     ];
            }else if (/^بوت$/i.test(m.text)) { 
     responses = [ 
       '*اسـمـي مـارو يـحـب🙂*',  
     ];
    }else if (/^تست$/i.test(m.text)) { 
     responses = [ 
       '*شـغـال يـحـب*',
      '*يـعـم وربـنـا شـغـال*',
     ];
            }else if (/^اسكت$/i.test(m.text)) { 
     responses = [ 
       '*انـت مـيـن عـشـان تـسـكـتـنـي😠*',
      '*مـش هـسـكـت😝*',
      '*اسـكـت انـت🙄*',
     ];
   }
   if (responses) { 
     let randomIndex = Math.floor(Math.random() * responses.length); 
     conn.reply(m.chat, responses[randomIndex], m); 
   } 
   return !0 
 }; 

 export default handler;
