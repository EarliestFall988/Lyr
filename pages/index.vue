<template>
  <div class="text-white">
    <!-- <PageHeader title="Welcome" desc="Find lyrics to your music below" /> -->
    <div v-for="mus in music" :key="mus.id">
      <LyricMenuButton :title="mus.title" :credits="mus.credits" :lyrics="mus.lyrics" />
    </div>
  </div>
</template>

<script>
import PageHeader from "../components/PageHeader.vue";
import LyricMenuButtonVue from "~~/components/LyricMenuButton.vue";
export default {
  components: [PageHeader, LyricMenuButtonVue],
  data() {
    return {
      music: [
        {
          id: 0,
          title: "Away in a Manger",
          credits: "Track 17 on Canterbury Organ and Chimes of Christmas",
          lyrics:
            "[Verse 1]\nAway in a manger, no crib for a bed\nThe little Lord Jesus laid down his sweet head;\nThe stars in the sky looked down where he lay\nThe little Lord Jesus asleep in the hay\n\n[Verse 2]\nThe cattle are lowing, the baby awakes\nBut little Lord Jesus, no crying he makes\nI love Thee, Lord Jesus, look down from the\nsky\nAnd stay by my cradle 'til morning is nigh\n\n\n[Verse 3]\nBe near me, Lord Jesus, I ask Thee to stay\nClose by me forever, and love me, I pray\nBless all the \ndear children in Thy tender care\nAnd take us to Heaven to live with Thee there",
        },
        {
          id: 1,
          title: "Jingle Bells",
          credits: "White Christmas Singers",
          lyrics:
            "[Verse 1]\nDashing through the snow\nIn a one- horse open sleigh\nO'er the fields we go\nLaughing all the way\nBells on bobtails ring\nMaking spirits bright\nWhat fun it is to ride and sing\nA sleighing song tonight\n\n[Chorus]\nJingle bells, jingle bells\nJingle all the way\nOh, what fun it is to ride\nIn a one - horse open sleigh, hey\nJingle bells, jingle bells\nJingle all the way\nOh, what fun it is to ride\nIn a one - horse open sleigh\n\n[Verse 2]\nA day or two ago\nI thought I'd take a ride\nAnd soon, Miss Fanny Bright\nWas seated by my side\nThe horse was lean and lank\nMisfortune seemed his lot\nHe got into a drifted bank\nAnd then we got upsot\n\n[Chorus]\nJingle bells, jingle bells\nJingle all the way\nOh, what fun it is to ride\nIn a one- horse open sleigh, hey\nJingle bells, jingle bells\nJingle all the way\nOh, what fun it is to ride\nIn a one - horse open sleigh\n\n[Verse 3]\nA day or two ago\nThe story I must tell\nI went out on the snow\nAnd on my back I fell\nA gent was riding by\nIn a one - horse open sleigh\nHe laughed as there I sprawling lie\nBut quickly drove away\n\n[Chorus]\nJingle bells, jingle bells\nJingle all the way\n Oh, what fun it is to ride\nIn a one - horse open sleigh, hey\nJingle bells, jingle bells\nJingle all the way\nOh, what fun it is to ride\nIn a one - horse open sleigh\n\n[Verse 4]\nNow the ground is white\nGo it while you're young\nTake the girls tonight\nAnd sing this sleighing song\nJust get a bobtailed bay\nTwo forty as his speed\nHitch him to an open sleigh\nAnd crack, you'll take the lead\n\n [Chorus]\nJingle bells, jingle bells\nJingle all the way\nOh, what fun it is to ride\nIn a one - horse open sleigh, hey\nJingle bells, jingle bells\nJingle all the way\nOh, what fun it is to ride\nIn a one - horse open sleigh",
        },
        {
          id: 2,
          title: "Silent Night",
          credits: "Track 11 on Canterbury Organ and Chimes of Christmas",
          lyrics:
            "[Verse 1]\nSilent night, holy night\nAll is calm, all is bright\nRound yon Virgin, Mother and Child\nHoly Infant so tender and mild\nSleep in heavenly peace\nSleep in heavenly peace\n\n[Verse 2]\nSilent night, holy night\nShepherds quake at the sight\nGlories stream from heaven afar\nHeavenly hosts sing Alleluia\nChrist the Savior is born\nChrist the Savior is born\n\n[Verse 3]\nSilent night, holy night\nSon of God, love's pure light\nRadiant beams from Thy holy face\nWith the dawn of redeeming grace\nJesus Lord, at Thy birth\nJesus Lord, at Thy birth",
        },
        {
          id: 3,
          title: "Joy to the World",
          credits: "Track 18 on Canterbury Organ and Chimes of Christmas",
          lyrics:
            "[Verse 1]\nJoy to the world, the Lord has come\nLet earth receive her King\nLet every heart prepare Him room\nAnd heaven and nature sing, and heaven \nand nature sing\nAnd heaven, and heaven and nature sing\n\n[Verse 2]\nJoy to the earth, the Savior reigns\nLet men their songs employ\nWhile fields and floods, rocks, hills, and \nplains\nRepeat the sounding joy, \nrepeat the sounding joy\nRepeat, repeat the sounding joy\n\n[Verse 3]\nNo more let sins and sorrows grow\nNor thorns infest the ground\nHe comes to make His blessings flow\nFar as the curse is found, \nfar as the curse is found\nFar as, far as the curse is found\n\n[Verse 4]\nHe rules the world with truth and grace\nAnd makes the nations prove\nThe glories of His righteousness\nAnd wonders of His love, \nand wonders of His love\nAnd wonders, wonders of His love",
        },
        {
          id: 4,
          title: "Oh Holy Night",
          credits: "Track 14 on Canterbury Organ and Chimes of Christmas",
          lyrics:
            "[Verse 1]\nO Holy night! The stars are brightly shining\nIt is the night of our dear Savior's birth\nLong lay the world in sin and error pining\n'Til He appears and the soul felt its worth\nA thrill of hope the weary world rejoices\nFor yonder breaks a new and glorious morn\nFall on your knees; O hear the Angel voices!\nO night divine, O night when Christ was born\nO night, O Holy night, O night divine!\n[Verse 2]\nLed by the light of Faith serenely beaming\nWith glowing hearts by His cradle we stand\nSo led by light of a star sweetly gleaming\nHere come the Wise Men from Orient land\nThe King of kings lay thus in lowly manger\nIn all our trials born to be our friend\nHe knows our need, to our weakness is no \nstranger\nBehold your King; before Him lowly bend\nBehold your King; before Him lowly bend\n[Verse 3]\nTruly He taught us to love one another;\nHis law is love and His Gospel is Peace\nChains shall He break, for the slave is our \nbrother\nAnd in His name, all oppression shall cease\nSweet hymns of joy in grateful chorus raise we\nLet all within us Praise His Holy name\nChrist is the Lord; O praise His name forever!\nHis power and glory evermore proclaim\nHis power and glory evermore proclaim",
        },
        {
          id: 5,
          title: "O Come, O Come, Emmanuel",
          credits: "Christmas Songs",
          lyrics:
            "[Verse 1]\nO come, O come, Emmanuel\nAnd ransom captive Israel\nThat mourns in lonely exile here\nUntil the Son of God appear\n[Refrain]\nRejoice! Rejoice! Emmanuel\nShall come to thee, O Israel\n\n[Verse 2]\nO come, O come, Thou Lord of might\nWho to Thy tribes, on Sinai's height\nIn ancient times didst give the law\nIn cloud, and majesty and awe\n\n[Refrain]\nRejoice! Rejoice! Emmanuel\nShall come to thee, O Israel\n\n[Verse 3]\nO come, Thou Rod of Jesse, free\nThine own from Satan's tyranny\nFrom depths of hell Thy people save\nAnd give them victory o'er the grave\n\n[Refrain]\nRejoice! Rejoice! Emmanuel\nShall come to thee, O Israel\n\n[Verse 4]\nO come, Thou Dayspring, come and cheer\nOur spirits by Thine advent here\nDisperse the gloomy clouds of night\nAnd death's dark shadows put to flight\n\n[Refrain]\nRejoice! Rejoice! Emmanuel\nShall come to thee, O Israel\n\n[Verse 5]\nO come, Thou Key of David, come\nAnd open wide our heavenly home\nMake safe the way that leads on high\nAnd close the path to misery",
        },
        {
          id: 6,
          title: "Rudolph the Red-Nosed Reindeer",
          credits: "Track 2 on A New Age Christmas ",
          lyrics:
            "You know Dasher and Dancer\nAnd Prancer and Vixen\nComet and Cupid\nAnd Donner and Blitzen\nBut do you recall\nThe most famous reindeer of all?\nRudolph the red- nosed reindeer\n          (reindeer)\nHad a very shiny nose\n          (like a light bulb)\nAnd if you ever saw it\n        (saw it)\nYou would even say it glows\n        (like a flashlight)\nAll of the other reindeer\n        (reindeer)\nUsed to laugh and call him names\n        (like Pinocchio)\nThey never let poor Rudolph\n        (Rudolph)\nPlay in any reindeer games\n        (like Monopoly)\nThen one foggy Christmas Eve\nSanta came to say\n        (Ho Ho Ho)\nRudolph with your nose so bright\nWon't you guide my sleigh tonight?\nThen how the reindeer loved him\n        (loved him)\nAs they shouted out with glee\n        (yippee)\n\"Rudolph the red-nosed reindeer\n        (reindeer)\nYou'll go down in history!\"\n        (like Columbus) ",
        },
        {
          id: 7,
          title: "Hark! The Herald Angels Sing",
          credits: "Track 13 Canterbury Organ and Chimes of Christmas",
          lyrics:
            '[Verse 1]\nHark! the herald angels sing:\n"Glory to the newborn King!\nPeace on earth and mercy mild\nGod and sinners reconciled"\nJoyful, all ye nations rise\nJoin the triumph of the skies\nWith angelic hosts proclaim:\n"Christ is born in Bethlehem"\nHark! the herald angels sing:\n"Glory to the newborn King!"\n\n[Verse 2]\nChrist by highest Heav\'n adored\nChrist the everlasting Lord!\nLate in time behold Him come\nOffspring of a Virgin\'s womb\nVeiled in flesh the Godhead see;\nHail the incarnate Deity\nPleased as man with man to dwell\nJesus, our Emmanuel\nHark! the herald angels sing:\n"Glory to the newborn King!"\n\n[Verse 3]\nHail the Heav\'n-born Prince of Peace!\nHail the Son of Righteousness!\nLight and life to all He brings\nRis\'n with healing in His wings\nMild He lays His glory by\nBorn that man no more may die\nBorn to raise the sons of earth\nBorn to give them second birth\nHark! the herald angels sing:\n"Glory to the newborn King!"',
        },
        {
          id: 8,
          title: "The Twelve Days of Christmas",
          credits: "Track 11 on A New Age Christmas ",
          lyrics:
            "[Verse 1]\nOn the first day of Christmas, \nmy true love sent to me\nA partridge in a pear tree\n[Verse 2]\nOn the second day of Christmas, \nmy true love sent to me\nTwo turtle doves, and\nA partridge in a pear tree\n[Verse 3]\nOn the third day of Christmas, \nmy true love sent to me\nThree french hens\nTwo turtle doves, and\nA partridge in a pear tree\n[Verse 4]\n On the fourth day of Christmas, \nmy true love sent to me\nFour calling birds\nThree french hens\nTwo turtle doves, and\nA partridge in a pear tree\n[Verse 5]\n On the fifth day of Christmas, \nmy true love sent to me\nFive golden rings\nFour calling birds\nThree french hens\nTwo turtle doves, and\nA partridge in a pear tree\n[Verse 6]\n On the sixth day of Christmas, \nmy true love sent to me\nSix geese a- laying\nFive golden rings\nFour calling birds\nThree french hens\nTwo turtle doves, and\nA partridge in a pear tree\n[Verse 7]\nOn the seventh day of Christmas,\nmy true love sent to me\nSeven swans a - swimming\nSix geese a - laying\nFive golden rings\nFour calling birds\nThree french hens\nTwo turtle doves, and\nA partridge in a pear tree\n [Verse 8]\nOn the eighth day of Christmas,\nmy true love sent to me\nEight maids a - milking\nSeven swans a - swimming\nSix geese a - laying\nFive golden rings\nFour calling birds\nThree french hens\nTwo turtle doves, and\nA partridge in a pear tree\n[Verse 9]\nOn the ninth day of Christmas, \nmy true love sent to me\nNine ladies dancing\nEight maids a - milking\nSeven swans a - swimming\nSix geese a - laying\nFive golden rings\nFour calling birds\nThree french hens\nTwo turtle doves, and\nA partridge in a pear tree\n[Verse 10]\nOn the tenth day of Christmas, \nmy true love sent to me\nTen lords a - leaping\nNine ladies dancing\nEight maids a - milking\nSeven swans a - swimming\nSix geese a - laying\nFive golden rings\nFour calling birds\nThree french hens\nTwo turtle doves, and\nA partridge in a pear tree",
        },
        {
          id: 9,
          title: "What Child Is This?",
          credits: "Track 8 on Rocky Mountain Christmas lyrics",
          lyrics:
            "[Verse 1]\nWhat child is this, who, laid to rest\nOn Mary's lap is sleeping?\nWhom angels greet with anthems sweet\nWhile shepherds watch are keeping?\n\n[Chorus]\nThis, this is Christ the King\nWhom shepherds guard and angels sing\nHaste, haste to bring him laud\nThe babe, the son of Mary\n[Verse 2]\nWhy lies he in such mean estate\nWhere ox and ass are feeding?\nGood Christian, fear: for sinners here\nThe silent Word is pleading\n\n[Chorus]\nThis, this is Christ the King\nWhom shepherds guard and angels sing\nHaste, haste to bring him laud\nThe babe, the son of Mary\n\n[Verse 3]\n      So bring him incense, gold, and myrrh\nCome, peasant, king, to own him\nThe King of Kings salvation brings\nLet loving hearts enthrone him\n\n[Chorus]\nThis, this is Christ the King\nWhom shepherds guard and angels sing\nHaste, haste to bring him laud\nThe babe, the son of Mary",
        },
        {
          id: 10,
          title: "The First Noel",
          credits: "The Tabernacle Choir at Temple Square",
          lyrics:
            "The First Noel, the angels did say\nWas to certain poor shepherds in fields as they lay\nIn fields where they lay keeping their sheep\nOn a cold winter's night that was so deep\nNoel, Noel, Noel, Noel, born is the King of Israel\nThey looked up and saw a star\nShining in the east beyond them far\nAnd to the earth it gave great light\nAnd so it continued both day and night\nNoel, Noel, Noel, Noel, born is the King of Israel\nThen let us all with one accord\nSing praises to our heavenly Lord\n[Incomprehensible]\nAnd with His blood mankind has bought\nNoel, Noel, Noel, Noel, born is the King of Israel\nNoel, Noel, Noel, Noel, born is the King of Israel\nNoel, Noel, Noel, Noel, born is the King of Israel",
        },
        {
          id: 11,
          title: "O Come All Ye Faithful",
          credits: 'Nat "King" Cole',
          lyrics:
            "Oh, come all ye faithful\nJoyful and triumphant\nO come ye\nO come ye to Bethlehem\nCome and behold Him\nBorn the King of angels\nO come, let us adore Him\nO come, let us adore Him\nO come, let us adore Him\nChrist the Lord\nSing, choirs of angels\nSing in exaltation\nSing, all ye citizens\nOf Heaven above\nGlory to God\nGlory in the highest",
        },
        {
          id: 12,
          title: "O Little Town Of Bethlehem",
          credits: "Track 12 on Canterbury Organ and Chimes of Christmas",
          lyrics:
            "[Verse 1]\nO little town of Bethlehem\nHow still we see thee lie!\nAbove thy deep and dreamless sleep\nThe silent stars go by\nYet in the dark street shineth\nThe everlasting Light\nThe hopes and fears of all the years\nAre met in thee tonight\n\n[Verse 2]\nFor Christ is born of Mary\nAnd gathered all above\nWhile mortals sleep, the angels keep\nTheir watch of wondering love\nO morning stars, together\nProclaim the holy birth\nAnd praises sing to God, the King\nAnd peace to men on earth\n\n[Verse 3]\nHow silently, how silently\nThe wondrous Gift is given!\nSo God imparts to human hearts\nThe blessings of His heaven\nNo ear may hear His coming\nBut in this world of sin\nWhere meek souls will receive Him still\nThe dear Christ enters in\n\n[Verse 4]\nO holy Child of Bethlehem\nDescend to us, we pray\nCast out our sin and enter in\nBe born in us today\nWe hear the Christmas angels\nThe great glad tidings tell\nOh, come to us, abide with us\nOur Lord Immanuel!",
        },
        {
          id: 13,
          title: "Go Tell It On The Mountain",
          credits: "Track 4 on The Heart of Christmas: Jazz Piano ",
          lyrics:
            "Go, tell it on the mountain\nOver the hills and everywhere\nGo, tell it on the mountain\nThat Jesus Christ is born!\n\nWhile shepherds kept their watching\nO'er silent flocks by night\nBehold throughout the heavens\nThere shone a holy light\n\nGo, tell it on the mountain\nOver the hills and everywhere\nGo, tell it on the mountain\nThat Jesus Christ is born!\nThe shepherds feared and trembled\nWhen lo! Above the Earth\nRang out the angel chorus\nThat hailed our Savior's birth\n\nGo, tell it on the mountain\nOver the hills and everywhere\nGo, tell it on the mountain\nThat Jesus Christ is born!\n\nDown in a lowly manger\nOur humble Christ was born\nAnd God sent us salvation\nThat blessed Christmas morn\n\nGo, tell it on the mountain\nOver the hills and everywhere\nGo, tell it on the mountain\nThat Jesus Christ is born!",
        },
        {
          id: 14,
          title: "Angels We Have Heard On High",
          credits: "Track 7 on Canterbury Organ and Chimes of Christmas: Classic",
          lyrics:
            "[Verse 1]\nAngels we have heard on high\nSweetly singing o'er the plains\nAnd the mountains in reply\nEchoing their joyous strains\n\n[Chorus]\nGloria In Excelsis Deo\nGloria In Excelsis Deo\n\n[Verse 2]\nShepherds why this jubilee ?\nWhy your joyous strains prolong?\nSay what may the tidings be\nWhich inspire your heavenly song?\n[Chorus]\nGloria In Excelsis Deo\nGloria In Excelsis Deo\n\n[Verse 3]\nCome to Bethlehem and see\nHim Whose birth the angels sing;\nCome, adore on bended knee\nChrist the Lord, the newborn King\n\n[Chorus]\nGloria In Excelsis Deo\nGloria In Excelsis Deo\n\n[Verse 4]\nSee within in a manger laid\nJesus Lord of heav'n and earth\nMary, Joseph lend your aid\nWith us sing our Savior's birth",
        },
      ],
    };
  },
};
</script>
