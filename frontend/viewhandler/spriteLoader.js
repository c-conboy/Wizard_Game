const iconSpriteSheet = new Image();
var icons = [];

const scrollTop = new Image();
var uiSpriteSheet = [];

const scrollSides = new Image();
var scrollSidesSprites = [];

const book = new Image();
var bookSprites = [];

// Wait for the sprite sheet to load
iconSpriteSheet.onload = () => {
    Promise.all([
      createImageBitmap(iconSpriteSheet, 16 * 0, 0, 16, 16),
      createImageBitmap(iconSpriteSheet, 16 * 1 - 1, 0, 16, 16),
      createImageBitmap(iconSpriteSheet, 16 * 2 - 1, 0, 16, 16),
      createImageBitmap(iconSpriteSheet, 16 * 3 - 1, 0, 16, 16),
      createImageBitmap(iconSpriteSheet, 16 * 4 - 1, 0, 16, 16),
      createImageBitmap(iconSpriteSheet, 16 * 5 - 1, 0, 16, 16),
      createImageBitmap(iconSpriteSheet, 16 * 6 - 1, 0, 16, 16),
      createImageBitmap(iconSpriteSheet, 16 * 7 - 1, 0, 16, 16),
      createImageBitmap(iconSpriteSheet, 16 * 8 - 1, 0, 16, 16),
      createImageBitmap(iconSpriteSheet, 16 * 9 - 1, 0, 16, 16),
      createImageBitmap(iconSpriteSheet, 16 * 10 - 1, 0, 16, 16),
      createImageBitmap(iconSpriteSheet, 16 * 11 - 1, 0, 16, 16),
      createImageBitmap(iconSpriteSheet, 16 * 12 - 1, 0, 16, 16)
    ]).then((loadedSprites) => {
        icons = loadedSprites;
    });
};

scrollTop.onload = () => {
    Promise.all([
      createImageBitmap(scrollTop, 0, 0, 80, 12, {resizeHeight: 24, resizeWidth: 160, resizeQuality: "pixelated"}),
      createImageBitmap(scrollTop, 0, 0, 80, 12, {resizeHeight: 24, resizeWidth: 160, resizeQuality: "pixelated", imageOrientation: "flipY" }),
    ]).then((loadedSprites) => {
        uiSpriteSheet = loadedSprites;
    });
};

scrollSides.onload = () => {
  Promise.all([
    createImageBitmap(scrollSides, 0, 0, 8, 46),
    createImageBitmap(scrollSides, 9, 0, 18, 46),
  ]).then((loadedSprites) => {
    scrollSidesSprites = loadedSprites;
  });
};

book.onload = () => {
  Promise.all([
    createImageBitmap(book, 0, 0, 89, 54, {resizeHeight: 325, resizeWidth: 480, resizeQuality: "pixelated"}),
  ]).then((loadedSprites) => {
    bookSprites = loadedSprites;
  });
};


scrollTop.src = 'C:/Users/conbo/Desktop/Files/projects/Wizard_Game/frontend/viewhandler/sprites/scrollTop.png';
scrollSides.src = 'C:/Users/conbo/Desktop/Files/projects/Wizard_Game/frontend/viewhandler/sprites/shortScrollSides.png';
iconSpriteSheet.src = 'C:/Users/conbo/Desktop/Files/projects/Wizard_Game/frontend/viewhandler/sprites/manaIcons.png';
book.src = 'C:/Users/conbo/Desktop/Files/projects/Wizard_Game/frontend/viewhandler/sprites/bookSprite.png';

