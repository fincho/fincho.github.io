/** All the rodent cards. All rodents are safe in here.

Copy/Paste Rodent object:

'NameOfRodent': {
  'name': 'Full Name of Rodent'
  'image': 'images/url.png', <- image url, image must be in the images folder
  'description': 'desc',
  'artist': 'name'
},

Note if 'NameOfRodent' has a duplicate, it will go to the last duplicate

 */

 var artists = {
   'finch': 'illufinch',
   'qquoe': '_qquoe',
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
   'kingworrell': 'king_worrell',
   'skullpixl': 'skullpixl',
   'cloudtrumpets': 'cloudtrumpets',
   'ilta': 'iltailtailta',
   'lesma': 'pixe_lesma',
   'mima': 'pixelmima',
   'smug': 'studio_smug',
   'tofu': 'tofupixel'
 };

var RODENT_CARDS = {
  /* -------------------------- COMMON RODENT OBJECT ------------------------ */
  'common': {
    'ratking': {
      'name': 'Rat King',
      'image': 'images/cards/ratking.png',
      'description': 'Lives in the sewer, trades in secrets. -1 secret +1 cod sandwich',
      'artist': artists.qquoe
    }

  },

  /* -------------------------- RARE RODENT OBJECT ------------------------ */
  'uncommon': {
    'labrat': {
      'name': 'Lab Rat',
      'image': 'images/cards/labrat.png',
      'description': 'A professional mess-maker. +1 stained clothes +1 lab flask',
      'artist': artists.qquoe
    }
  },

  /* -------------------------- ULTRA RARE RODENT OBJECT ------------------------ */
  'rare': {
    'littlechef': {
      'name': 'Little Chef',
      'image': 'images/cards/littlechef.png',
      'description': 'Sits nicely on your head. +1 soup +1 veggies',
      'artist': artists.qquoe
    }


  }
}
