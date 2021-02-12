const fs = require('fs')

// Main (read books, map ids, write map)
function main() {
  const map = {}
  const books = JSON.parse(fs.readFileSync('./books.json', 'utf8'))
  for (const [book,{code,chapters}] of Object.entries(books))
    for (const [ch,[a,b]] of Object.entries(chapters))
      for (let i=a; i<=b; i++) {
        const id = `${code} ${ch}:${i}`
        const id2 = stdToAlter(id)
        if (id2 === undefined) continue
        map[id] = id2
      }
  fs.writeFileSync('./map.json', JSON.stringify(map,null,2))
}
main()

// Given a standard verse number, return the corresponding verse number in Alter’s Hebrew Bible.
// (A returned array represents a combination of verses)
function stdToAlter(id) {
  let [ch,n] = id.split(':')
  n = parseInt(n,10)

  if (id == 'Ge 31:55') return 'Ge 32:1'
  if (ch == 'Ge 32') return `Ge 32:${n+1}`
  if (id == 'Ge 47:5') return ['Ge 47:5a', ' ', 'Ge 47:5']
  if (id == 'Ge 47:6') return ['Ge 47:6a', ' ', 'Ge 47:6b']
  if (ch == 'Ex 8') {
    if (n <= 4) return `Ex 7:${25+n}`
    return `Ex 8:${n-4}`
  }
  if (ch == 'Ex 22') {
    if (n == 1) return 'Ex 21:37'
    return `Ex 22:${n-1}`
  }
  if (ch == 'Le 6') {
    if (n <= 7) return `Le 5:${19+n}`
    return `Le 6:${n-7}`
  }
  if (ch == 'Nu 16') {
    if (n >= 36) return `Nu 17:${n-35}`
  }
  if (ch == 'Nu 17') return `Nu 17:${n+15}`
  if (id == 'Nu 26:1') return 'Nu 25:18b'
  if (id == 'Nu 29:40') return 'Nu 30:1'
  if (ch == 'Nu 30') return `Nu 30:${n+1}`
  if (ch == 'De 5') {
    if (n == 17) return 'De 5:17a'
    else if (n == 18) return 'De 5:17b'
    else if (n == 19) return 'De 5:17c'
    else if (n == 20) return 'De 5:17d'
    else if (n > 20) return `De 5:${n-3}`
  }
  if (id == 'De 12:32') return 'De 13:1'
  if (ch == 'De 13') return `De 13:${n+1}`
  if (id == 'De 22:30') return 'De 23:1'
  if (ch == 'De 23') return `De 23:${n+1}`
  if (id == 'De 29:1') return 'De 28:69'
  if (ch == 'De 29') return `De 29:${n-1}`
  if (ch == 'Jos 21') {
    if (n == 36 || n == 37) return null
    if (n > 37) return `Jos 21:${n-2}`
  }
  if (ch == 'Jg 12') {
    if (n == 14) return ['Jg 12:14a', ' ', 'Jg 12:14b']
    else if (n == 15) return 'Jg 12:14c'
  }
  if (ch == '1Sa 4') {
    if (n == 1) return ['1Sa 4:1a', ' ', '1Sa 4:1b']
  }
  if (id == '1Sa 14:23') return ['1Sa 14:23a', ' ', '1Sa 14:23b']
  if (id == '1Sa 20:42') return [id, ' ', '1Sa 21:1']
  if (ch == '1Sa 21') return `1Sa 21:${n+1}`
  if (id == '1Sa 23:29') return '1Sa 24:1'
  if (ch == '1Sa 24') return `1Sa 24:${n+1}`
  if (id == '2Sa 2:4') return ['2Sa 2:4a', ' ', '2Sa 2:4b']
  if (id == '2Sa 18:33') return '2Sa 19:1'
  if (ch == '2Sa 19') return `2Sa 19:${n+1}`
  if (ch == '1Ki 4' && n >= 21) return `1Ki 5:${n-20}`
  if (ch == '1Ki 5') return `1Ki 5:${n+14}`
  if (id == '1Ki 22:43') return ['1Ki 22:43', ' ', '1Ki 22:44']
  if (ch == '1Ki 22' && n>=44) return `1Ki 22:${n+1}`
  if (id == '2Ki 11:21') return '2Ki 12:1'
  if (ch == '2Ki 12') return `2Ki 12:${n+1}`
  if (ch == '1Ch 6') {
    if (n <= 15) return `1Ch 5:${26+n}`
    return `1Ch 6:${n-15}`
  }
  if (id == '1Ch 12:4') return [id, ' ', '1Ch 12:5']
  if (ch == '1Ch 12' && n>=5) return `1Ch 12:${n+1}`
  if (id == '1Ch 16:36') return [id, '\n', '1Ch 16:37']
  if (ch == '1Ch 16' && n>=37) return `1Ch 16:${n+1}`
  if (id == '2Ch 2:1') return '2Ch 2:1a'
  if (id == '2Ch 2:2') return '2Ch 2:1b'
  if (ch == '2Ch 2' && n>=3) return `2Ch 2:${n-1}`
  if (id == '2Ch 14:1') return '2Ch 13:23'
  if (ch == '2Ch 14') return `2Ch 14:${n-1}`
  if (ch == 'Ne 4') {
    if (n<=6) return `Ne 3:${32+n}`
    return `Ne 4:${n-6}`
  }
  if (id == 'Ne 9:38') return 'Ne 10:1'
  if (ch == 'Ne 10') {
    if (n <= 34) return `Ne 10:${n+1}`
    if (n == 35) return null
  }
  if (ch == 'Ne 13') {
    if (n == 19) return [id, ' ', 'Ne 13:20']
    if (n > 19) return `Ne 13:${n+1}`
  }
  if (ch == 'Job 41') {
    if (n <= 8) return `Job 40:${n+24}`
    return `Job 41:${n-8}`
  }
  for (const i of [3,4,5,6,7,8,9,12,19,20,21,22,30,31,34,36,38,39,40,41,42,44,45,46,47,48,49,53,55,56,57,58,59,61,62,63,64,65,67,68,69,75,76,77,80,81,83,84,85,88,89,92,102,108,140,142]) {
    if (ch == `Ps ${i}`) return `Ps ${i}:${n+1}`
  }
  for (const i of [11,14,15,16,17,23,24,25,26,27,28,29,32,35,37,50,66,72,73,74,78,79,82,86,87,90,98,100,101,103,109,110,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,138,139,141,143,144,145]) {
    if (ch == `Ps ${i}`) {
      if (n == 0) return `Ps ${i}:1a`
      if (n == 1) return `Ps ${i}:1b`
    }
  }
  for (const i of [51,52,54,60]) {
    if (ch == `Ps ${i}`) {
      if (n == 0) return [`Ps ${i}:1`, ' ', `Ps ${i}:2`]
      return `Ps ${i}:${n+2}`
    }
  }
  if (ch == 'Ps 13') {
    if (n < 5) return `Ps 13:${n+1}`
    if (n == 5) return 'Ps 13:6a'
    if (n == 6) return 'Ps 13:6b'
  }
  if (ch == 'Ps 18') {
    if (n == 0) return ['Ps 18:1', '\n', 'Ps 18:2a']
    if (n == 1) return 'Ps 18:2b'
    return `Ps 18:${n+1}`
  }
  if (ch == 'Ps 70') {
    if (n < 5) return `Ps 70:${n+1}`
    if (n == 5) return ['Ps 70:6', '\n', 'Ps 70:7']
  }
  if (id == 'Ps 96:13') return [id, '\n', 'Ps 96:14']
  if (id == 'Ps 98:9') return [id, '\n', 'Ps 98:10']
  if (id == 'Ps 133:3') return [id, '\n', 'Ps 133:4']
  if (ch == 'Pr 12') {
    if (n == 8) return 'Pr 12:8a'
    if (n == 9) return 'Pr 12:8b'
    if (n == 10) return `Pr 12:9`
    if (n == 11) return `Pr 12:10`
  }
  if (id == 'Pr 28:16') return [id+'a', '\n', id+'b']
  if (id == 'Pr 30:15') return [id+'a', '\n', id+'b']
  if (ch == 'Ec 5') {
    if (n == 1) return 'Ec 4:17'
    return `Ec 5:${n-1}`
  }
  if (ch == 'Ca 3') {
    if (n == 9) return 'Ca 3:9a'
    if (n == 10) return 'Ca 3:9b'
    if (n == 11) return 'Ca 3:10'
  }
  if (id == 'Ca 6:13') return 'Ca 7:1'
  if (ch == 'Ca 7') return `Ca 7:${n+1}`
  if (ch == 'Isa 9') {
    if (n == 1) return 'Isa 8:23'
    return `Isa 9:${n-1}`
  }
  if (ch == 'Isa 41') {
    if (n == 28) return 'Isa 41:28a'
    if (n == 29) return 'Isa 41:28b'
  }
  if (ch == 'Isa 48') {
    if (n == 21) return 'Isa 48:21a'
    if (n == 22) return 'Isa 48:21b'
  }
  if (id == 'Isa 63:19') return 'Isa 63:19a'
  if (ch == 'Isa 64') {
    if (n == 1) return 'Isa 63:19b'
    return `Isa 64:${n-1}`
  }
  if (ch == 'Jer 3') {
    if (n == 22) return 'Jer 3:22a'
    if (n == 23) return 'Jer 3:22b'
    if (n == 24) return 'Jer 3:23'
    if (n == 25) return 'Jer 3:24'
  }
  if (ch == 'Jer 9') {
    if (n == 1) return 'Jer 8:23'
    return `Jer 9:${n-1}`
  }
  if (ch == 'Jer 30') {
    if (n == 23) return 'Jer 30:23a'
    if (n == 24) return 'Jer 30:23b'
  }
  if (ch == 'Jer 31') {
    if (n == 1) return 'Jer 30:24'
    return `Jer 31:${n-1}`
  }
  if (ch == 'Jer 36') {
    if (n == 27) return 'Jer 36:27a'
    if (n == 28) return 'Jer 36:27b'
    if (n > 28) return `Jer 36:${n-1}`
  }
  if (ch == 'Eze 9') {
    if (n == 6) return [id, ' ', 'Eze 9:7']
    if (n > 6) return `Eze 9:${n+1}`
  }
  if (ch == 'Eze 20' && n > 44) return `Eze 21:${n-44}`
  if (ch == 'Eze 21') {
    if (n < 20) return `Eze 21:${n+5}`
    if (n == 20) return 'Eze 21:25a'
    if (n == 21) return 'Eze 21:25b'
    if (n > 21) return `Eze 21:${n+4}`
  }
  if (ch == 'Da 4') {
    if (n <= 3) return `Da 3:${30+n}`
    return `Da 4:${n-3}`
  }
  if (id == 'Da 5:31') return 'Da 6:1'
  if (ch == 'Da 6') return `Da 6:${n+1}`
  if (ch == 'Da 9') {
    if (n == 26) return [id, ' ', 'Da 9:27']
    if (n == 27) return 'Da 9:28'
  }
  if (id == 'Da 11:2') return [id+'a', '\n', id+'b']
  if (ch == 'Ho 1') {
    if (n == 10) return 'Ho 2:1'
    if (n == 11) return 'Ho 2:2'
  }
  if (ch == 'Ho 2') return `Ho 2:${n+2}`
  if (id == 'Ho 7:1') return ['Ho 6:11b', '\n', id]
  if (id == 'Ho 11:12') return 'Ho 12:1'
  if (ch == 'Ho 12') return `Ho 12:${n+1}`
  if (id == 'Ho 13:16') return 'Ho 14:1'
  if (ch == 'Ho 14') return `Ho 14:${n+1}`
  if (ch == 'Joe 2' && n>27) return `Joe 3:${n-27}`
  if (ch == 'Joe 3') return `Joe 4:${n}`
  if (ch == 'Am 8') {
    if (n == 9) return 'Am 8:9a'
    if (n == 10) return 'Am 8:9b'
    if (n > 10) return `Am 8:${n-1}`
  }
  if (id == 'Jon 1:17') return 'Jon 2:1'
  if (ch == 'Jon 2') return `Jon 2:${n+1}`
  if (ch == 'Mic 5') {
    if (n == 1) return 'Mic 4:14'
    return `Mic 5:${n-1}`
  }
  if (id == 'Na 1:15') return 'Na 2:1'
  if (ch == 'Na 2') return `Na 2:${n+1}`
  if (ch == 'Zep 3') {
    if (n == 16) return 'Zep 3:16a'
    if (n == 17) return 'Zep 3:16b'
    if (n > 17) return `Zep 3:${n-1}`
  }
  if (id == 'Hag 1:15') return [id+'a', ' ', id+'b']
  if (ch == 'Zec 1' && n > 17) return `Zec 2:${n-17}`
  if (ch == 'Zec 2') return `Zec 2:${n+4}`
  if (ch == 'Zec 6') {
    if (n == 14) return 'Zec 6:14a'
    if (n == 15) return 'Zec 6:14b'
  }
  if (ch == 'Zec 8') {
    if (n == 7) return 'Zec 8:7a'
    if (n == 8) return 'Zec 8:7b'
    if (8 < n && n < 20) return `Zec 8:${n-1}`
    if (n == 20) return 'Zec 8:19a'
    if (n == 21) return 'Zec 8:19b'
    if (n > 21) return `Zec 8:${n-2}`
  }
  if (ch == 'Mal 4') return `Mal 3:${n+18}`
  return undefined
}



// NOTE: this relies on data which cannot be legally published
// Determine how to split Alter verses.
// `verses` is a map from verse id to verse text
function splitVerses(verses) {
  function splitAt(str,sep) {
    const toks = str.split(sep)
    for (let i=0; i<toks.length-1; i++) toks[i] += sep
    return toks.map(t => t.trim())
  }
  function splitVerse(id, sep, _sids) {
    const toks = splitAt(verses[id], sep)
    let sids = _sids
    if (typeof sids == 'number') {
      sids = []
      for (let i=0; i<_sids; i++) {
        sids.push(id + ['a','b','c','d'][i])
      }
    }
    for (let i=0; i<sids.length; i++) {
      const sid = sids[i]
      const tok = toks[i]
      verses[sid] = tok
    }
  }
  splitVerse('Ge 47:5a-6b', '.”', [
    'Ge 47:5a',
    'Ge 47:6b',
  ])
  splitVerse('De 5:17', '.', 4)
  splitVerse('Jg 12:14', '.', 3)
  splitVerse('2Ch 2:1', '.', 2)
  function splitPsalmSuper(sep, chs) {
    for (const i of chs) {
      splitVerse(`Ps ${i}:1`, sep, 2)
    }
  }
  splitPsalmSuper('.', [15,16,23,24,72,73,74,87,90,100,109,120,121,123,124,125,126,128,129,130,132,133,134,138,139,144,145])
  splitPsalmSuper('_.', [32,78])
  splitPsalmSuper('David.', [11,14,25,26,27,28,35,37,103,122,131])
  splitPsalmSuper('psalm.', [29,50,66,79,82,98,101,110,141,143])
  splitPsalmSuper('Solomon.', [127])
  splitPsalmSuper('David prayer.', [17,86])
  splitVerse('Ps 13:6', '.', 2)
  splitVerse('Ps 18:2', ':', 2)
  splitVerse('Pr 12:8', 'despised.', 2)
  splitVerse('Ca 3:9', 'wood.', 2)
  splitVerse('Isa 41:28', 'answer.', 2)
  splitVerse('Isa 48:21', 'for them.', 2)
  splitVerse('Isa 63:19', 'called.', 2)
  splitVerse('Jer 3:22', 'God.', 2)
  splitVerse('Jer 30:23', 'wicked,', 2)
  splitVerse('Jer 36:27', 'saying,', 2)
  splitVerse('Eze 21:25', 'Judah.', 2)
  splitVerse('Am 8:9', 'light.', 2)
  splitVerse('Zep 3:16', 'slack.', 2)
  splitVerse('Zec 6:14', 'Zephaniah.', 2)
  splitVerse('Zec 8:7', 'sunset,', 2)
  splitVerse('Zec 8:19', 'come,', 2)
}
