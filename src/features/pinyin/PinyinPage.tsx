import { useMemo, useState } from 'preact/hooks'
import PageHeader from '../../components/common/PageHeader'
import Icon from '../../components/common/Icon'
import { getInitialFinalHint, getPinyin } from '../../services/pinyinService'
import { speakChinese } from '../../services/speechService'

const samples = ['你好', '中文', '老师', '学生', '谢谢', '再见']

export default function PinyinPage() {
  const [text, setText] = useState('你好')
  const result = useMemo(() => getPinyin(text || '你好'), [text])

  return (
    <main>
      <PageHeader
        eyebrow="Pinyin"
        title="拼音学习库"
        subtitle="这里先接拼音能力：自动转拼音、声母韵母拆分、声调展示。后续再加正式课程。"
      />

      <section className="glass-panel rounded-[30px] p-6">
        <label className="text-sm font-black text-slate-500">输入中文</label>
        <input
          value={text}
          onInput={(event) => setText(event.currentTarget.value)}
          className="mt-3 w-full rounded-[22px] border border-white bg-white/86 px-5 py-4 text-2xl font-black outline-none focus:ring-4 focus:ring-blue-100"
          placeholder="例如：你好"
        />

        <div className="mt-5 rounded-[26px] bg-white/86 p-5 text-center">
          <h2 className="text-[44px] font-black text-slate-950">{result.text}</h2>
          <p className="mt-3 text-2xl font-black text-blue-600">{result.pinyinText}</p>
          <button
            onClick={() => speakChinese(result.text)}
            className="mx-auto mt-4 flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-sm font-black text-blue-700 active:scale-95"
          >
            <Icon name="volume" className="h-5 w-5" />
            播放
          </button>
        </div>
      </section>

      <section className="mt-5 grid gap-3">
        {result.syllables.map((syllable, index) => {
          const hint = getInitialFinalHint(syllable)
          return (
            <div key={`${syllable}-${index}`} className="soft-card rounded-[24px] p-5">
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-black text-slate-950">{syllable}</h3>
                <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-black text-blue-700">音节 {index + 1}</span>
              </div>
              <div className="mt-4 grid grid-cols-2 gap-3">
                <div className="rounded-[18px] bg-slate-50 p-4">
                  <p className="text-xs font-black text-slate-400">声母</p>
                  <p className="mt-1 text-xl font-black text-slate-900">{hint.initial || '零声母'}</p>
                </div>
                <div className="rounded-[18px] bg-slate-50 p-4">
                  <p className="text-xs font-black text-slate-400">韵母</p>
                  <p className="mt-1 text-xl font-black text-slate-900">{hint.final}</p>
                </div>
              </div>
            </div>
          )
        })}
      </section>

      <section className="mt-6">
        <h2 className="mb-3 px-1 text-sm font-black uppercase tracking-[0.22em] text-slate-400">Quick Samples</h2>
        <div className="grid grid-cols-3 gap-3">
          {samples.map((sample) => (
            <button
              key={sample}
              onClick={() => setText(sample)}
              className="rounded-[20px] bg-white/80 py-4 text-lg font-black text-slate-800 shadow active:scale-95"
            >
              {sample}
            </button>
          ))}
        </div>
      </section>
    </main>
  )
}
