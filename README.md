# Alter Bible verse numbers

Standard verse numbers are certainly useful when comparing translations of the
Hebrew Bible.  [Robert Alter’s translation][Alter Bible] renumbers some
of them—presumably for better literary indication. So here we map out which
numbers have changed:

**[Download the Standard→Alter Table](map.json)** (JSON format)
* Standard on the left, Alter on the right.
* Includes only the *changed* verse numbers:
  * 2,296 out of 31,218 verses (7.35%) were renumbered

> <a href="https://soussanart.com/product/mourlot-nun-samekh-ayin"><img src="alter.jpg" alt="Detail of Ayin Samekh Nun from The Creation, ca. 1978-1980, a series of ten tapestries designed by Mordecai Ardon (1896-1992)"></a>
>
> Cover Art for Volume 3: *[Ayin Amekh Nun] from [The Creation], ca. 1978–1980,<br>a series of ten tapestries by [Mordecai Adon] (1896–1992)*

## Legal and Future Use

Anyone may use this (e.g. for verse-collation efforts).  I used them to collate
Alter’s verses with other translations, but I cannot legally publish the verse text here.
I can only publish the verse map, which:

- can be used by vendors like Bible Gateway, Bible Hub, or YouVersion should they license Alter’s translation and need a means to import it
- can be used by Alter’s editor should they want to export standardized verses to simplify vendor import

[Alter Bible]:https://wwnorton.com/books/9780393292497
[Robert Alter]:https://en.wikipedia.org/wiki/Robert_Alter
[Ayin Amekh Nun]:https://soussanart.com/product/mourlot-nun-samekh-ayin/
[The Creation]:https://soussanart.com/product-category/artists/mordecai-ardon/
[Mordecai Adon]:https://en.wikipedia.org/wiki/Mordecai_Ardon

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


