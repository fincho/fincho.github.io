/** All the frog cardes. All frogs are safe in here.

Copy/Paste Frog object:

'NameOfFrog': {
  'name': 'Full Name of Frog'
  'image': 'images/url.png', <- image url, image must be in the images folder
  'description': 'desc',
  'artist': 'name'
},

Note if 'NameOfFrog' has a duplicate, it will go to the last duplicate

 */

 var artists = {
   'finch': 'illufinch',
   'matt': 'mattFdraws',
   'slide': 'came2slide',
   'elena': 'ElenaNazaire',
   'frogapples': 'frogapples_',
   'funnyunfunny': 'funnily_unfunny',
   'imaginarymon': 'imaginarymon',
   'instantonion': 'instant_onion',
   'jd': 'jdzombi_',
   'julia': 'juliagoodish',
   'kiana': 'kianamosser',
   'lampy': 'lampysprites',
   'monstrabot': 'monstrabot',
   'pixel': 'pixelgroover',
   'silk': 'silkanide',
   'splishyplash': 'SplishyPlash',
   'windowkitties': 'window_kitties',
   'iyfrr': 'iyfias',
   'saltbunny': 'saltiestbunny'
 };

var FROG_CARDS = {
  /* -------------------------- COMMON FROG OBJECT ------------------------ */
  'common': {
    'frogband-trumpet': {
      'name': 'Frog Band',
      'image': 'images/cards/frogband-trumpet.png',
      'description': 'he doot the floot. +40 music, +70 hat',
      'artist': artists.finch,
    },
    'frogband-drums': {
      'name': 'Frog Band',
      'image': 'images/cards/frogband-drums.png',
      'description': 'tapataptap. +40 music +6 drum solos',
      'artist': artists.finch,
    },
    'frogband-sax': {
      'name': 'Frog Band',
      'image': 'images/cards/frogband-sax.png',
      'description': 'ran out of breath fast. +40 music, +2 toot toot',
      'artist': artists.finch,
    },
    'frogtoast': {
      'name': 'Frog Toast',
      'image': 'images/cards/frogtoast.png',
      'description': 'sells well on ebay. + $500',
      'artist': artists.finch,
    },
    'candyfrog': {
      'name': 'Candy Frog',
      'image': 'images/cards/candy.png',
      'description': 'mystery flavor. +1 candy',
      'artist': artists.finch,
    },
    'thecroak': {
      'name': 'The Croak',
      'image': 'images/cards/croak.png',
      'description': 'pog flyin. +20 poggies',
      'artist': artists.slide
    },
    'longfrog': {
      'name': 'Frooooog',
      'image': 'images/cards/longfrog.png',
      'description': 'long frog. +3 length',
      'artist': artists.frogapples
    },
    'homelessfrog': {
      'name': 'Homeless Frog',
      'image': 'images/cards/homeless.png',
      'description': 'home is where the frog is. -1 home',
      'artist': artists.frogapples
    },
    'frogprince': {
      'name': 'Frog Prince',
      'image': 'images/cards/frogprince.png',
      'description': 'a little sleepy. +1 crown +3 hour nap',
      'artist': artists.finch,
    },
    'frogbrella': {
      'name': 'Frogbrella',
      'image': 'images/cards/frogbrella.png',
      'description': 'mystically enchanted to be water proof. +1 enchantment +0 water',
      'artist': artists.finch,
    },
    'skater': {
      'name': 'Sk8r Frog',
      'image': 'images/cards/skater.png',
      'description': 'sick flip bro! +1 flip +3 woha +7 rad',
      'artist': artists.finch,
    },
    'slime': {
      'name': 'Slime Frog',
      'image': 'images/cards/slime.png',
      'description': 'jiggle physics. +3 jiggle +3 wiggle',
      'artist': artists.finch,
    },
    'jam': {
      'name': 'Jam Frog',
      'image': 'images/cards/jamfrog.png',
      'description': 'sticky and sweet. +2 sticky +1 strawberry flavoring',
      'artist': artists.jd,
    },
    'bigbro': {
      'name': 'Big Bro',
      'image': 'images/cards/bigbro.png',
      'description': 'he protec. +1 sibling +1 bully',
      'artist': artists.julia,
    },
    'frogbread': {
      'name': 'Frog Bread',
      'image': 'images/cards/frogbread.png',
      'description': 'delicious carbs. +50 carbs +10 tasty',
      'artist': artists.julia,
    },
    'snacktime': {
      'name': 'Snack Time',
      'image': 'images/cards/snacktime.png',
      'description': 'mmlemm. +1 snack +20 tummy',
      'artist': artists.julia,
    },
    'damedane': {
      'name': 'Dame Da Ne ',
      'image': 'images/cards/damedane.png',
      'description': 'baka mitai. +1 sake +3 yakuza',
      'artist': artists.julia,
    },
    'frogelors': {
      'name': 'Frogelors',
      'image': 'images/cards/frogelors.png',
      'description': 'looking for love. +3 hunks +5 romance',
      'artist': artists.julia,
    },
    'thetads': {
      'name': 'The Tads',
      'image': 'images/cards/tads.png',
      'description': 'not yet frogs. mixed feelings. +2 legs +8 bored',
      'artist': artists.julia,
    },
    'foureyed': {
      'name': '4 Eyed Frog',
      'image': 'images/cards/foureyed.png',
      'description': 'sparkle +1.5 dioptres',
      'artist': artists.lampy,
    },
    'frogsco': {
      'name': 'Frogsco',
      'image': 'images/cards/frogsco.png',
      'description': 'please come again. +1 frog (store brand) +5 reward pts',
      'artist': artists.lampy,
    },
    'ussribbit': {
      'name': 'U.S.S. Ribbit',
      'image': 'images/cards/ussribbit.png',
      'description': 'splash splash +5 splash +5 splash +5 splash',
      'artist': artists.lampy,
    },
    'cupcake': {
      'name': 'Cupcake Frog',
      'image': 'images/cards/cupcake.png',
      'description': 'a tasty treat! +10 sprinkles +1 frosting',
      'artist': artists.matt,
    },
    'soldier': {
      'name': 'Frog Solider',
      'image': 'images/cards/soldier.png',
      'description': 'loyal soldier. +10 range +10 loyalty',
      'artist': artists.matt,
    },
    'bigleaf': {
      'name': 'Big Leaf Frog',
      'image': 'images/cards/bigleaf.png',
      'description': 'big leaf for catching rain. +1 oooh!!',
      'artist': artists.silk,
    },
    'cupofrog': {
      'name': 'Cup o\' Frog',
      'image': 'images/cards/cupofrog.png',
      'description': 'do not drink!! for decoration only. +10 wake up juice',
      'artist': artists.silk,
    },
    'f800': {
      'name': 'F-800',
      'image': 'images/cards/f800.png',
      'description': 'retro, old, but not obsolete. +10 help',
      'artist': artists.silk,
    },
    'f1000': {
      'name': 'F-1000',
      'image': 'images/cards/f1000.png',
      'description': 'brand new, descendent of the F-800. +10 help +10 efficiency',
      'artist': artists.silk,
    },
    'plush': {
      'name': 'Frog Plush',
      'image': 'images/cards/plush.png',
      'description': 'for frog lovers of all ages. +10 softness +50 :)',
      'artist': artists.silk,
    },
    'lover': {
      'name': 'Froggy Lover',
      'image': 'images/cards/lover.png',
      'description': 'ah, l\'amour ... +10 romance',
      'artist': artists.silk,
    },
    'waiter': {
      'name': 'Froggy Waiter',
      'image': 'images/cards/waiter.png',
      'description': 'he work hard!! +1 creamy lobster',
      'artist': artists.silk,
    },
    'froggyhat': {
      'name': 'Froggyhat',
      'image': 'images/cards/froggyhat.png',
      'description': 'classic, timeless. +1 walk walk fashion baby',
      'artist': artists.silk,
    },
    'thehopper': {
      'name': 'The Hopper',
      'image': 'images/cards/thehopper.png',
      'description': 'veggie burger. $5. +1 spinach +1 cheese +$4 (with coupon)',
      'artist': artists.saltbunny,
    },

  },

  /* -------------------------- RARE FROG OBJECT ------------------------ */
  'uncommon': {
    'capyfam': {
      'name': 'Capy Family',
      'image': 'images/cards/capyfamily.png',
      'description': 'as advertised. +4 frog, +1 capybara',
      'artist': artists.finch,
    },
    'chomper': {
      'name': 'Chomper',
      'image': 'images/cards/chomper.png',
      'description': 'he never stops. +20 horror, +50 suffering',
      'artist': artists.slide
    },
    'sleepingfrog': {
      'name': 'Sleeping Frog',
      'image': 'images/cards/sleepingfrog.png',
      'description': 'just kiss her. +50 nobility +12 caprice +10 sleep',
      'artist': artists.elena
    },
    'froggod': {
      'name': 'Frog God',
      'image': 'images/cards/froggod.png',
      'description': 'big ol space hug. +30 luve, +5 space tech',
      'artist': artists.funnyunfunny
    },
    'alienfrog': {
      'name': 'Alien Frog',
      'image': 'images/cards/alienfrog.png',
      'description': 'he costs $15.72 at home depot. +15.72 unholy energy',
      'artist': artists.finch,
    },
    'frogdoll': {
      'name': 'Frog Doll',
      'image': 'images/cards/frogdoll.png',
      'description': 'press it for a random phrase. +5 accurately predicts deaths +2 *squeak*',
      'artist': artists.finch,
    },
    'luckyfrog': {
      'name': 'Lucky Frog',
      'image': 'images/cards/luckyfrog.png',
      'description': 'brings fortune and slime. +$50 +32 slimes',
      'artist': artists.finch,
    },
    'bardbaby': {
      'name': 'Bard Baby',
      'image': 'images/cards/bardbaby.png',
      'description': 'only knows twinkle twinkle. +10 harmony +6 happy',
      'artist': artists.julia,
    },
    'cutiepie': {
      'name': 'Cutie Pie',
      'image': 'images/cards/cutiepie.png',
      'description': 'AKA sweetie pie. +10 sugar +8 berry',
      'artist': artists.julia,
    },
    'frattle': {
      'name': 'Frattle',
      'image': 'images/cards/frattle.png',
      'description': 'fun for all ages. +5 shake +3 joy',
      'artist': artists.julia,
    },
    'magical': {
      'name': 'Magical Frog',
      'image': 'images/cards/magicalfrog.png',
      'description': 'shooting star swish! +100 magic +100 sparkles',
      'artist': artists.julia,
    },
    'apprentice': {
      'name': 'Frog Apprentice',
      'image': 'images/cards/apprentice.png',
      'description': '"musca mandatum!" +2 flies -10 mana',
      'artist': artists.kiana,
    },
    'cherub': {
      'name': 'Kerub',
      'image': 'images/cards/cherub.png',
      'description': 'croak, mortal. +1 blessing',
      'artist': artists.lampy,
    },
    'noodles': {
      'name': 'Noodles',
      'image': 'images/cards/noodles.png',
      'description': 'delicious. +9 slurp +99 nutrition',
      'artist': artists.lampy,
    },
    'frogtech': {
      'name': 'Frog Tech',
      'image': 'images/cards/frogtech.png',
      'description': 'the latest in frogchip technology. +25 intelligence +10 hardware',
      'artist': artists.matt,
    },
    'frogpocalypse': {
      'name': 'Frogpocalypse',
      'image': 'images/cards/frogpocalypse.png',
      'description': 'frog dad. +5 joy +5 doom',
      'artist': artists.monstrabot,
    },
    'crossover': {
      'name': 'Froggy Crossover',
      'image': 'images/cards/crossover.png',
      'description': 'an unlikely friendship. +1 friend',
      'artist': artists.silk,
    },
    'retro': {
      'name': 'Retro Froggy',
      'image': 'images/cards/retro.png',
      'description': 'video game go beep boop. +1 beep +1 boop',
      'artist': artists.silk,
    },
    'business': {
      'name': 'Business Frog',
      'image': 'images/cards/business.png',
      'description': 'his briefcase is full of swamp water. +1 moustache',
      'artist': artists.splishyplash,
    },
    'idol': {
      'name': 'Frog Idol',
      'image': 'images/cards/idol.png',
      'description': 'worth at least like $3. +like $3 +50 curses',
      'artist': artists.splishyplash,
    },
    'mirror': {
      'name': 'Froggy Mirror',
      'image': 'images/cards/mirror.png',
      'description': 'the reflection is always a frog. +2 beauty +7 charm',
      'artist': artists.splishyplash,
    },
    'froglodyte': {
      'name': 'Froglodyte',
      'image': 'images/cards/froglodyte.png',
      'description': 'a prehistoric pal. +1 club -5 hygiene',
      'artist': artists.splishyplash,
    },
    'cookie': {
      'name': 'Frog Cookie',
      'image': 'images/cards/cookie.png',
      'description': 'chomp!! +50 sugar rush',
      'artist': artists.windowkitties,
    },
    'gorf': {
      'name': 'Gorf',
      'image': 'images/cards/gorf.png',
      'description': 'happy to be here. +13 confusion',
      'artist': artists.windowkitties,
    },
    'hungrygang': {
      'name': 'Hungry Gang',
      'image': 'images/cards/hunger.png',
      'description': 'you gonna finish that? +30 hunger +30 tasty',
      'artist': artists.instantonion,
    },
    'angry': {
      'name': 'Angry BBC Frog',
      'image': 'images/cards/anger.png',
      'description': 'watch out, Attenborough. +10 cute +10 rage +7 squeak',
      'artist': artists.julia,
    },
    'pretzel': {
      'name': 'Pretzel Frog',
      'image': 'images/cards/pretzel.png',
      'description': 'salty or sweet depending on your preference. +55 carbs',
      'artist': artists.windowkitties,
    },
    'frogarons-gray': {
      'name': 'Frogarons',
      'image': 'images/cards/frogarons-gray.png',
      'description': 'crispy, chewy, melty. #OrIsIt? +50 happiness',
      'artist': artists.iyfrr,
    },
    'frogarons-green': {
      'name': 'Frogarons',
      'image': 'images/cards/frogarons-green.png',
      'description': 'crispy, chewy, melty. #OrIsIt? +50 happiness',
      'artist': artists.iyfrr,
    },
    'froggoneit': {
      'name': 'Froggone It!',
      'image': 'images/cards/froggoneit.png',
      'description': 'hop along, lil\' froggie',
      'artist': artists.saltbunny,
    },
    'drawfrog': {
      'name': 'How to Draw Frog',
      'image': 'images/cards/drawfrog.png',
      'description': 'the sacred text. +5 drawing skill (for beginners)',
      'artist': artists.saltbunny,
    },
    'dressupfrog': {
      'name': 'Dress-Up Frog',
      'image': 'images/cards/dressupfrog.png',
      'description': 'big ol\' dress, little bitty frog. +20 fancy points',
      'artist': artists.saltbunny,
    },
  },

  /* -------------------------- ULTRA RARE FROG OBJECT ------------------------ */
  'rare': {
    'galaxyfrog': {
      'name': 'Galaxy Frog',
      'image': 'images/cards/galaxyfrog.png',
      'description': 'spiraling through time and space... +100 star, +50 void',
      'artist': artists.matt,
    },
    'cutefrogstack': {
      'name': 'Ultimate Frogstack',
      'image': 'images/cards/cutefrogstack.png',
      'description': 'kinda big, kinda cute. +999 domination',
      'artist': artists.elena
    },
    'ultimatefrogstack': {
      'name': 'Ultimate Frogstack',
      'image': 'images/cards/frogstack.png',
      'description': 'no joke. +999 domination',
      'artist': artists.elena
    },
    'dreaming': {
      'name': 'Dreaming Frog',
      'image': 'images/cards/dreaming.png',
      'description': 'he dream of the beyond. +1 aspiration',
      'artist': artists.frogapples
    },
    'froget': {
      'name': 'Froget Me Not',
      'image': 'images/cards/frogetmenot.png',
      'description': 'always remember. +100 memories',
      'artist': artists.frogapples
    },
    'frogchurch': {
      'name': 'Church of The Frog',
      'image': 'images/cards/frogchurch.png',
      'description': 'join now with a one time membership fee. +10% secret tithe',
      'artist': artists.finch,
    },
    'piouswindow': {
      'name': 'Pious Window',
      'image': 'images/cards/piouswindow.png',
      'description': 'the good word is ribbit. +1 ribbit +6 piety',
      'artist': artists.finch,
    },
    'divineretribution': {
      'name': 'Divine Retribution',
      'image': 'images/cards/divineretribution.png',
      'description': 'bad children get sent to frog hell. +80 punishment',
      'artist': artists.finch,
    },
    'frogbarian': {
      'name': 'Frogbarian',
      'image': 'images/cards/frogbarian.png',
      'description': 'feel the sweet, moist taste of victory. +50 moist +1 victory',
      'artist': artists.imaginarymon,
    },
    'lofifrog': {
      'name': 'Lofi Frog',
      'image': 'images/cards/lofifrog.png',
      'description': 'he study to some jams. +20 intelligence +10 relaxation +100 vibe',
      'artist': artists.instantonion,
    },
    'hidenseek': {
      'name': 'Hide n Seek',
      'image': 'images/cards/hidenseek.png',
      'description': 'ready or not. +100 sneaky +1 lilypad',
      'artist': artists.julia,
    },
    'megahop': {
      'name': 'Mega Hop',
      'image': 'images/cards/megahop.png',
      'description': 'brb ;) +7 hop +50 stars',
      'artist': artists.julia,
    },
    'rainbowkids': {
      'name': 'Rainbow Kids',
      'image': 'images/cards/rainbowkids.png',
      'description': 'secret club gathering. +6 friends +15 colorful',
      'artist': artists.julia,
    },
    'streamfrog': {
      'name': 'Stream Frog',
      'image': 'images/cards/streamfrog.png',
      'description': 'let\'s play frog souls! +100 viewers, +20 fame',
      'artist': artists.julia,
    },
    'frogglanee': {
      'name': 'Frogglanee',
      'image': 'images/cards/frogglanee.png',
      'description': 'oh-la-nee, the frogs! the frogs?',
      'artist': artists.pixel,
    },
    'astro': {
      'name': 'Astro Froggy',
      'image': 'images/cards/astro.png',
      'description': 'floating ... +100000000000000000 stars',
      'artist': artists.silk,
    },
    'submarine': {
      'name': 'Froggy Submarine',
      'image': 'images/cards/submarine.png',
      'description': 'they all live in a yellow submarine. +1 song reference',
      'artist': artists.silk,
    },
    'pond': {
      'name': 'Pond Froggy',
      'image': 'images/cards/pond.png',
      'description': 'cannot swim, hence the boat. +10 friendship',
      'artist': artists.silk,
    },
    'sword': {
      'name': 'Sword Froggy',
      'image': 'images/cards/sword.png',
      'description': 'wahh!! +10 attack.',
      'artist': artists.silk,
    },
    'frogslove': {
      'name': 'Frogs in Love',
      'image': 'images/cards/froglove.png',
      'description': 'frog wedding!! +1 wife (frog)',
      'artist': artists.saltbunny,
    },
    'hoppily': {
      'name': 'Hoppily Ever After',
      'image': 'images/cards/hoppily.png',
      'description': 'u may now kiss the frog! +1 slice of cake +100 smiles a day',
      'artist': artists.saltbunny,
    },




  }
}
