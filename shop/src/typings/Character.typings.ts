export interface CharacterTypings {
  name: string
  lvl: number
  cash: number
  bank: number
}

export interface CharacterContextTypings {
  value: CharacterTypings
  update: (character: CharacterTypings) => void
}