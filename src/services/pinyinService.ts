import { pinyin } from 'pinyin-pro'

export type PinyinResult = {
  text: string
  pinyinText: string
  syllables: string[]
}

export function getPinyin(text: string): PinyinResult {
  const syllables = pinyin(text, {
    toneType: 'symbol',
    type: 'array'
  }) as string[]

  return {
    text,
    pinyinText: syllables.join(' '),
    syllables
  }
}

export function getPinyinWithoutTone(text: string) {
  return pinyin(text, {
    toneType: 'none',
    type: 'array'
  }) as string[]
}

export function getInitialFinalHint(syllable: string) {
  const initials = [
    'zh', 'ch', 'sh',
    'b', 'p', 'm', 'f',
    'd', 't', 'n', 'l',
    'g', 'k', 'h',
    'j', 'q', 'x',
    'r', 'z', 'c', 's',
    'y', 'w'
  ]

  const normalized = syllable
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace('ü', 'v')

  const initial = initials.find((item) => normalized.startsWith(item)) ?? ''
  const finalPart = initial ? normalized.slice(initial.length) : normalized

  return {
    initial,
    final: finalPart || normalized,
    normalized
  }
}
