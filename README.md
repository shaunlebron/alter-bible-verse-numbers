# Alter Bible verse numbers

Standard verse numbers for [Robert Alter’s Hebrew Bible][1]

This is a lookup table for each Standard verse number that appears differently in Alter’s.

* **Why**: Robert Alter’s translation of the Hebrew Bible uses some non-canonical verse
numbers, making it difficult at times to compare across translations.
* **How many**: 2,296 verse numbers out of 31,218 are changed. (7.35%)
* **Who this is for**: publishers, researchers, or students wanting a canonical mapping between Standard and Alter verses.

> <img src="alter.jpg" alt="Detail of Ayin Samekh Nun from The Creation, ca. 1978-1980, a series of ten tapestries designed by Mordecai Ardon (1896-1922)">
>
> Cover Art for Volume 3: *The Creation by Mordecai Adon, 1980*

## Files

* [`map.json`](map.json): map from standard Bible verses to Alter Bible verses
    * **same**: if verse is not present, then no remapping is needed
    * **empty**: if verse maps to `null`, then Alter provided no respective verse
    * **split**: if verse maps to `[...]`, then Alter separated it into multiple verses
* [`code.js`](code.js): code that creates `map.json`
    * see `stdToAlter` for how verses are mapped
    * see `splitVerses` for how verses are split
* [`books.json`](books.json): standard books/chapters/verses of the Bible used by `code.js`

If you wish to generate the map yourself, install [Node](https://nodejs.org/en/) and run:

```
node code.js
```

## Method

I checked the size of each chapter in the Alter Bible, and accounted for each
size difference, mainly:

* when Alter moved chapter boundaries to contain more or less verses from previous or subsequent chapters
* when Alter merged or split verses
* when Alter reordered verses
* when Alter treated Psalm superscriptions as verse one

I used this to collate Alter’s verses with other translations, which I cannot legally publish here.

[1]:https://wwnorton.com/books/9780393292497
