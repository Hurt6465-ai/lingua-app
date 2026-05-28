declare module 'hanzi-writer' {
  type HanziWriterOptions = {
    width?: number
    height?: number
    padding?: number
    showOutline?: boolean
    showCharacter?: boolean
    strokeAnimationSpeed?: number
    delayBetweenStrokes?: number
    radicalColor?: string
    outlineColor?: string
    strokeColor?: string
    drawingColor?: string
  }

  type QuizOptions = {
    onMistake?: (strokeData: unknown) => void
    onCorrectStroke?: (strokeData: unknown) => void
    onComplete?: (summaryData: unknown) => void
  }

  type HanziWriterInstance = {
    animateCharacter: () => Promise<void> | void
    quiz: (options?: QuizOptions) => void
    showCharacter: () => void
    hideCharacter: () => void
    showOutline: () => void
    hideOutline: () => void
    setCharacter: (character: string) => Promise<void> | void
    cancelQuiz?: () => void
  }

  const HanziWriter: {
    create: (element: string | HTMLElement, character: string, options?: HanziWriterOptions) => HanziWriterInstance
  }

  export default HanziWriter
}
