# Meet Frogpon [ W I P ] 
*Project Owned by [ NAME ].*

![Frog Machine](frogs/images/machine.png?raw=true "Title")

A frog gacha game, in which you collect frog cards. You can acquire three types of cards: common ones, rare ones, and ultra rare ones. This project is coded solely through the frontend, using HTML/CSS and Vanilla JS. Thus, it does not have a database.

![Common Frog](frogs/images/cards/common-frogband.png?raw=true "Title") ![Rare Frog](frogs/images/cards/rare-capyfamily.png?raw=true "Title")  ![Ultra Rare Frog](frogs/images/cards/ultrarare-rainday.png?raw=true "Title")


### For Developers:
- To add a new frog card: 
  - First add the frog card in the image folder
  - Enter cards.js and add the following JSON to `FROG_CARDS`:
  ```
  'NameOfFrog': {
      'name': 'Full Name of Frog'
      'image': 'images/url.png', <- image url, image must be in the images folder
      'description': 'desc',
      'acquired': false <- must remain false
    },
    ```

### Bug Log:
- Change "Uncommon" to "Rare" in the code
