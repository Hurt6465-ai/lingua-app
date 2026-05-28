import { useState } from 'preact/hooks'
import PageHeader from '../../components/common/PageHeader'
import StrokeWriter from '../../components/learning/StrokeWriter'

const commonCharacters = ['你', '好', '中', '文', '学', '老', '师', '谢']

export default function StrokesPage() {
  const [character, setCharacter] = useState('你')

  return (
    <main>
      <PageHeader
        eyebrow="Stroke"
        title="汉字笔顺库"
        subtitle="先做笔顺动画和描写练习框架，后面按课程接入汉字列表。"
      />

      <StrokeWriter character={character} />

      <section className="mt-6">
        <h2 className="mb-3 px-1 text-sm font-black uppercase tracking-[0.22em] text-slate-400">Common Characters</h2>
        <div className="grid grid-cols-4 gap-3">
          {commonCharacters.map((item) => (
            <button
              key={item}
              onClick={() => setCharacter(item)}
              className={`rounded-[22px] py-5 text-3xl font-black shadow active:scale-95 ${
                item === character ? 'bg-slate-950 text-white' : 'bg-white/82 text-slate-900'
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </section>
    </main>
  )
}
