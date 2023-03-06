/** All the rodent cards. All rodents are safe in here.

Copy/Paste Rodent object:

'NameOfRodent': {
  'name': 'Full Name of Rodent',
  'image': 'images/cards/url.png', <- image url, image must be in the images folder
  'description': 'desc',
  'artist': 'name'
},

Note if 'NameOfRodent' has a duplicate, it will go to the last duplicate

 */

 var artists = {
   'finch': 'illufinch',
   'qquoe': '_qquoe',
   'jd': 'jdzombi_',
   'julia': 'juliagoodish',
   'silk': 'silkanide',
   'splishyplash': 'SplishyPlash',
   'fia': 'iyfias',
   'cloudtrumpets': 'cloudtrumpets',
   'lesma': 'pixe_lesma',
   'mima': 'pixelmima',
   'tofu': 'tofupixel',
   'emmapixels': 'emmapixels',
   'knight': 'knightsundere',
   'sitaart': 'sitaart'
 };

var RODENT_CARDS = {
  /* -------------------------- COMMON RODENT OBJECT ------------------------ */
  'common': {
    'ratking': {
      'name': 'Rat King',
      'image': 'images/cards/ratking.png',
      'description': 'Lives in the sewer, trades in secrets. -1 secret +1 cod sandwich',
      'artist': artists.qquoe
    },
	
    'pocketmouse': {
      'name': 'Pocket Mouse',
      'image': 'images/cards/pocketmouse.png',
      'description': 'Safely tucked away. +1 friendship +1 nighttime story',
      'artist': artists.qquoe
    },
		
	'mouse': {
	  'name': 'Mouse',
	  'image': 'images/cards/mouse.png',
	  'description': 'A desktop companion. +1 mouse pad +1 tangled cords',
	  'artist': artists.qquoe
	},
		
	'lovers': {
	  'name': 'Lovers',
	  'image': 'images/cards/lovers.png',
	  'description': 'My bones rattle when I\'m with her. +2gether +4ever',
	  'artist': artists.cloudtrumpets
	},
		
	'dotdotdot': {
	  'name': '...',
	  'image': 'images/cards/dotdotdot.png',
	  'description': '.. . . .. ... ..... +... .... . . . . + ... ... ... .',
	  'artist': artists.cloudtrumpets
	},
		
	'bobatea': {
	  'name': 'Boba Tea',
	  'image': 'images/cards/bobatea.png',
	  'description': 'Is it really worth it? +1 boba tea -2 eyeballs',
	  'artist': artists.cloudtrumpets
	},
		
	'innocent': {
	  'name': 'Innocent',
	  'image': 'images/cards/innocent.png',
	  'description': 'P-please... hug me... +100 malice +1 hug?',
	  'artist': artists.cloudtrumpets
	},
		
	'nynrat': {
	  'name': 'New Year New Rat',
	  'image': 'images/cards/nynrat.png',
	  'description': 'Unfortunately, these red envelopes are just full of cheese. +8 dumplings +88',
	  'artist': artists.emmapixels
	},
		
	'fashionguinea': {
	  'name': 'Fashion Guinea',
	  'image': 'images/cards/fashionguinea.png',
	  'description': 'Looking fabulous! +10 fab',
	  'artist': artists.finch
	},
		
	'flowerfriend': {
	  'name': 'Flower Friend',
	  'image': 'images/cards/flowerfriend.png',
	  'description': 'Look in a flower and you may find a friend. +5 petals +1 friend',
	  'artist': artists.finch
	},
		
	'goldenratio': {
	  'name': 'Golden Ratio',
	  'image': 'images/cards/goldenratio.png',
	  'description': 'For he is perfect. +1 perfectly sized rat',
	  'artist': artists.finch
	},
		
	'crumbventure': {
	  'name': 'Crumbventure',
	  'image': 'images/cards/crumbventure.png',
	  'description': 'He walks around like that. +1 anime sword',
	  'artist': artists.finch
	},
		
	'progamer': {
	  'name': 'Pro Gamer',
	  'image': 'images/cards/progamer.png',
	  'description': 'His favorite game is Cheezerun. +10 gamer skills -6 social skills',
	  'artist': artists.mima
	},
		
	'yakuzarat': {
	  'name': 'Yakuza Rat',
	  'image': 'images/cards/yakuzarat.png',
	  'description': 'Ouchie wouchie!! +100 ouchies +100 coolness',
	  'artist': artists.silk
	},
		
	'themilkmaid': {
	  'name': 'The Milkmaid',
	  'image': 'images/cards/themilkmaid.png',
	  'description': 'His wife. +1 hard working mouse +1 humble family woman',
	  'artist': artists.silk
	},
		
	'thefarmer': {
	  'name': 'The Farmer',
	  'image': 'images/cards/thefarmer.png',
	  'description': 'Her husband. +1 hard working mouse +1 humble family man',
	  'artist': artists.silk
	},
		
	'mousestool': {
	  'name': 'Mousestool',
	  'image': 'images/cards/mousestool.png',
	  'description': 'Mouse. Mushroom. It\'s as simple as that. +1 mouse +1 mushroom',
	  'artist': artists.silk
	},
		
	'sakurat': {
	  'name': 'Sakurat',
	  'image': 'images/cards/sakurat.png',
	  'description': 'Perfect weather for a picnic. +10 happiness +100 cherry blossoms +1 fancy kimono',
	  'artist': artists.silk
	},
		
	'ululation': {
	  'name': 'Ululation',
	  'image': 'images/cards/ululation.png',
	  'description': 'She screm. +1 excited +1 panic',
	  'artist': artists.sitaart
	},
		
	'rehamster': {
	  'name': 'Re-Hamster',
	  'image': 'images/cards/rehamster.png',
	  'description': 'He\'s sunflower powered. +1 nyooom +1 zoooooom',
	  'artist': artists.splishyplash
	},
		
	'doormouse': {
	  'name': 'Door-Mouse',
	  'image': 'images/cards/doormouse.png',
	  'description': '"You\'re sure it\'s two o\'s? +1 typo +15 hospitality',
	  'artist': artists.splishyplash
	},
		
	'checkpoint': {
	  'name': 'Checkpoint',
	  'image': 'images/cards/checkpoint.png',
	  'description': 'Rest for a while. +10 heal +1 damp',
	  'artist': artists.tofupixel
	},
		
	'friends': {
	  'name': 'Friends',
	  'image': 'images/cards/friends.png',
	  'description': 'Me and who? +5 collaboration',
	  'artist': artists.tofupixel
	},
		
	'molcar': {
	  'name': 'Molcar',
	  'image': 'images/cards/molcar.png',
	  'description': 'Pui pui! +1 traffic violation',
	  'artist': artists.tofupixel
	},
		
	'grab': {
	  'name': 'Grab',
	  'image': 'images/cards/grab.png',
	  'description': 'You\'re my friend now. +1 pocket rat',
	  'artist': artists.tofu
	}


  },

  /* -------------------------- RARE RODENT OBJECT ------------------------ */
  'uncommon': {
    'labrat': {
      'name': 'Lab Rat',
      'image': 'images/cards/labrat.png',
      'description': 'A professional mess-maker. +1 stained clothes +1 lab flask',
      'artist': artists.qquoe
    },
		
	'naptime': {
	  'name': 'Nap Time',
	  'image': 'images/cards/naptime.png',
	  'description': 'You can worry about work later... +5 more minutes +5 more minutes',
	  'artist': artists.cloudtrumpets
	},
		
	'guilty': {
	  'name': 'Guilty',
	  'image': 'images/cards/guilty.png',
	  'description': 'No remorse. +1 bleed to all enemies',
	  'artist': artists.jd
	},
		
	'ratatoni': {
	  'name': 'Ratatoni',
	  'image': 'images/cards/ratatoni.png',
	  'description': 'Pasta la vista, baby. +10 warfare +5 carbs',
	  'artist': artists.julia
	},
		
	'cheezerun2': {
	  'name': 'Cheeze Run 2',
	  'image': 'images/cards/cheezerun2.png',
	  'description': 'The sequel to Cheeze Run. +5 cheesy -15 vitamin D',
	  'artist': artists.mima
	},
		
	'cheezerun': {
	  'name': 'Cheeze Run',
	  'image': 'images/cards/cheezerun.png',
	  'description': 'The hot new videogame. +1 power up -2 vitamin D',
	  'artist': artists.mima
	},
		
	'kingofrats': {
	  'name': 'King of Rats',
	  'image': 'images/cards/kingofrats.png',
	  'description': 'His name is Ratthew. +1 kingdom +5 rats',
	  'artist': artists.splishyplash
	}

  },

  /* -------------------------- ULTRA RARE RODENT OBJECT ------------------------ */
  'rare': {
    'littlechef': {
      'name': 'Little Chef',
      'image': 'images/cards/littlechef.png',
      'description': 'Sits nicely on your head. +1 soup +1 veggies',
      'artist': artists.qquoe
    },
		
	'littlebrother': {
	  'name': 'Little Brother',
	  'image': 'images/cards/littlebrother.png',
	  'description': 'i love my big bro',
	  'artist': artists.cloudtrumpets
	},
		
	'mus': {
	  'name': 'Mus',
	  'image': 'images/cards/mus.png',
	  'description': 'The [True Mouse] +5 self',
	  'artist': artists.jd
	},
		
	'birthdayrat': {
	  'name': 'Birthday Rat',
	  'image': 'images/cards/birthdayrat.png',
	  'description': 'Surrounded by rat friends and rat family +1 year older',
	  'artist': artists.jd
	},
		
	'rattila': {
	  'name': 'Rattila The Cruel',
	  'image': 'images/cards/rattila.png',
	  'description': 'Was defeated by a mouse with a cool hat. +10 ratbarians -1 civilized rat',
	  'artist': artists.knight
	}



  }
}
