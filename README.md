# Bible Alter Map

Standard verse numbers for [Robert Alter’s Hebrew Bible][1]

<img src="alter.jpg">

Robert Alter’s translation of the Hebrew Bible uses many non-canonical verse
numbers, making it difficult to compare across translations.  Here we provide
a means to lookup the 

## Files

* [`map.json`][map.json]: map from standard Bible verses to Alter Bible verses
    * if verse is not present, then no remapping is needed (same)
    * if verse maps to `null`, then no verse was supplied (empty)
* [`code.js`][code.js]: code that creates `map.json`
* [`books.json`][books.json]: standard books/chapters/verses of the Bible used by `code.js`

## Method

I checked the size of each chapter in the Alter Bible, and accounted for
each size difference, mainly:

* when Alter moved chapter boundaries to contain more or less verses from previous or subsequent chapters
* when Alter merged or split verses
* when Alter reordered verses
* when Alter treated Psalm superscriptions as verse one

[1]:https://wwnorton.com/books/9780393292497
