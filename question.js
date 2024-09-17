const quiz = [
    {
        q: /*'1'*/'What event led to the establishment of the Fifth Republic of the Philippines?',
        option:['a) EDSA II Revolution','b) People Power Revolution', 'c) Martial Law', 'd) Korean War'],
        answer:1
    },
    {
        q:/*'2'*/'Who was the first president of the Fifth Republic of the Philippines?',
        option:['a) Ferdinand Marcos','b) Gloria Macapagal Arroyo', 'c) Corazon Aquino', 'd) Fidel V. Ramos'],
        answer:2
    },
    {
        q:/*'3'*/'What was the foundational document of the Fifth Republic of the Philippines? ',
        option:['a) 1973 Constitution','b) 1987 Constitution', 'c) 1946 Constitution', 'd) 1965 Constitution'],
        answer:1
    },
    {
        q:/*'4. '*/'Who was the 12th President of the Philippines?',
        option:['a) Joseph Estrada','b) Corazon Aquino', 'c) Martial Law', 'd) Fidel V. Ramos'],
        answer:3
    },
    {
        q:/*'5. '*/'Fidel V. Ramos was formerly the Chief of Staff of which institution?',
        option:['a) Philippine National Police','b) Bureau of Customs', 'c) Armed Forces', 'd) Department of Education'],
        answer:2
    },
    {
        q:/*'6. '*/'Which group did Ramos negotiate a peace agreement with in 1996?',
        option:['a) New People’s Army','b) Communist Party of the Philippines', 'c) Moro National Liberation Front (MNLF)', 'd) Abu Sayyaf'],
        answer:2
    },
    {
        q:/*'7. '*/'Which financial crisis impacted the Philippines during Ramos presidency?',
        option:['a) Great Depression','b) Dot-com Bubble', 'c) Asian Financial Crisis', 'd) Global Recession'],
        answer:2
    },
    {
        q:/*'8. '*/'What was one of the major challenges Ramos faced early in his term?',
        option:['a) Land Reform Issues','b) Power Shortages', 'c) Territorial Disputes', 'd) Trade Embargoes'],
        answer:1
    },
    {
        q:/*'9. '*/'What did Ramos do to address the electric power crisis?',
        option:['a) Nationalized the energy sector','b) Increased government funding for power plants', 'c) Promoted private sector investment in the energy sector', 'd) Reduced energy consumption by citizens'],
        answer:2
    },
    {
        q:/*'10. '*/'Who succeeded Fidel V. Ramos as president?',
        option:['a) Joseph Estrada','b) Gloria Macapagal Arroyo', 'c) Corazon Aquino', 'd) Rodrigo Duterte'],
        answer:0
    },
    {
        q:/*'11. '*/'Joseph Estrada`s presidential campaign was notably marked by his image as a:',
        option:['a) Businessman','b) Military Leader', 'c) Man of the Masses', 'd) Academic Scholar'],
        answer:2
    },
    {
        q:/*'12. '*/'What was one of Joseph Estrada`s key campaign promises?',
        option:['a) Economic Liberalization','b) Poverty Alleviation', 'c) Peace Agreements', 'd) Infrastructure Development'],
        answer:1
    },
    {
        q:/*'13. '*/'What major issue plagued Joseph Estrada’s administration?',
        option:['a) Natural Disasters','b) Corruption Allegations', 'c) International Conflicts', 'd) Educational Reforms'],
        answer:1
    },
    {
        q:/*'14. '*/'What was the nature of the corruption allegations against Estrada?',
        option:['a) Mismanagement of Foreign Aid','b) Illegal Gambling Operations and Misuse of Government Funds', 'c) Human Rights Violations', 'd) Environmental Damage'],
        answer:1
    },
    {
        q:/*'15. '*/'In what year was Joseph Estrada impeached by the House of Representatives?',
        option:['a) 1998','b) 1999', 'c) 2000', 'd) 2001'],
        answer:2
    },
    {
        q:/*'16. '*/'What event led to Joseph Estrada’s resignation?',
        option:['a) EDSA I Revolution','b) EDSA II Revolution', 'c) EDSA III Revolution', 'd) People Power II'],
        answer:1
    },
    {
        q:/*'17. '*/'Who assumed the presidency after Joseph Estrada?',
        option:['a) Ferdinand Marcos','b) Gloria Macapagal Arroyo', 'c) Benigno Aquino III', 'd) Rodrigo Duterte'],
        answer:1
    },
    {
        q:/*'18. '*/'Which sector did Ramos focus on liberalizing during his presidency?',
        option:['a) Agriculture','b) Tourism', 'c) Telecommunications', 'd) Healthcare'],
        answer:2
    },
    {
        q:/*'19. '*/'What was one of the economic achievements of Ramos’ administration?',
        option:['a) Reduction in national debt','b) High unemployment rates', 'c) Increased foreign investment', 'd) Expansion of government enterprises'],
        answer:2
    },
    {
        q:/*'20.'*/' What was a major consequence of the 1997 Asian Financial Crisis on Ramos’ presidency?',
        option:['a) Increased national debt','b) Accelerated economic growth', 'c) EDSA III RevolutiSlowdown in economic growth', 'd) Military coup'],
        answer:2
    },
    {
        q:/*'21.'*/'What role did Fidel V. Ramos have before becoming president?',
        option:['a) Governor','b) Secretary of Education', 'c) Secretary of National Defense', 'd) Mayor'],
        answer:2
    },
    {
        q:/*'22. '*/'What was a key aspect of Estrada’s anti-corruption campaign?',
        option:['a) Formation of a new anti-corruption agency','b) Public hearings on corruption', 'c) Personal integrity pledges by government officials', 'd) Initial commitment that later became overshadowed by scandals'],
        answer:3
    },
    {
        q:/*'23. '*/'What was one of the notable infrastructure projects during Ramos` term?',
        option:['a) Manila Light Rail Transit System','b) Subic Bay Freeport Zone', 'c) NAIA Terminal 3', 'd) Skyway Project'],
        answer:1
    },
    {
        q:/*'24. '*/'What was a major issue that the Estrada administration faced in managing the economy?',
        option:['a) Trade Imbalances','b) Budget Surpluses', 'c) Economic Reforms Implementation', 'd) High inflation rates'],
        answer:0
    },
    {
        q:/*'25. '*/'What major public sentiment led to the EDSA II Revolution?',
        option:['a) Economic Inequality','b) Desire for Democratic Reforms', 'c) Discontent with Estrada’s corruption and inefficiency', 'd) Unfulfilled Economic Promises'],
        answer:2
    },
    {
        q:/*'26. '*/'Philippine Heart Center?',
        option:['Maros', 'Aquino', 'Ramos', 'Estrada'],
        answer:0
    },
    {
        q:/*'27. '*/'Makiling Center Of Arts',
        option:['Maros', 'Aquino', 'Ramos', 'Estrada'],
        answer:0
    },
    {
        q:/*'28. '*/'Nayong Pilipino',
        option:['Maros', 'Aquino', 'Ramos', 'Estrada'],
        answer:0
    },
    {
        q:/*'29. '*/'People Power Revolution',
        option:['Maros', 'Aquino', 'Ramos', 'Estrada'],
        answer:1
    },
    {
        q:/*'30. '*/'Science Technology Master Plan(MSP)',
        option:['Maros', 'Aquino', 'Ramos', 'Estrada'],
        answer:1
    },
    {
        q:/*'31. '*/'Philippines Convention Center',
        option:['Maros', 'Aquino', 'Ramos', 'Estrada'],
        answer:0
    },
    {
        q:/*'32. '*/'Fre Public Secondary Education Act 1988',
        option:['Maros', 'Aquino', 'Ramos', 'Estrada'],
        answer:1
    },
    {
        q:/*'33. '*/'Power Plants',
        option:['Maros', 'Aquino', 'Ramos', 'Estrada'],
        answer:0
    },
    {
        q:/*'34. '*/'Presidential Task Force of the Philippines',
        option:['Maros', 'Aquino', 'Ramos', 'Estrada'],
        answer:1
    },
    {
        q:/*'35. '*/'Magna Carta for Science Technology & Personel',
        option:['Maros', 'Aquino', 'Ramos', 'Estrada'],
        answer:2
    },
    {
        q:/*'36. '*/'The Intellectual Property Code of the Philippines',
        option:['Maros', 'Aquino', 'Ramos', 'Estrada'],
        answer:2
    },
    {
        q:/*'37. '*/'ANG PASADA NG PANGULO',
        option:['Maros', 'Aquino', 'Ramos', 'Estrada'],
        answer:3
    },
    {
        q:/*'38. '*/'Philippine Clean Air Act 1999',
        option:['Maros', 'Aquino', 'Ramos', 'Estrada'],
        answer:3
    },
    {
        q:/*'39. '*/'Coconut Industry Development',
        option:['Maros', 'Aquino', 'Ramos', 'Estrada'],
        answer:3
    },
    {
        q:/*'40. '*/'Launching Of Mobile Technology',
        option:['Maros', 'Aquino', 'Ramos', 'Estrada'],
        answer:3
    },
    {
        q:/*'41. '*/'Science for the Masses Program',
        option:['Maros', 'Aquino', 'Ramos', 'Estrada'],
        answer:2
    },
    {
        q:/*'42'*/'Electronic Commerece Act Of 2000',
        option:['Maros', 'Aquino', 'Ramos', 'Estrada'],
        answer:3
    },
    
    
    
    
]
// {
//     q:'?',
//     option:['GENERATION ISSUES','ECONOMY','GLOBAL ECONOMIC INTEGRATION','FINANCIAL'],
//     answer:2
// },
