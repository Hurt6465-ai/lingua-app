import { useEffect, useState } from 'preact/hooks'
import PageHeader from '../../components/common/PageHeader'
import { db } from '../../db/appDb'

export default function StatsPage() {
  const [answerCount, setAnswerCount] = useState(0)
  const [progressCount, setProgressCount] = useState(0)

  async function load() {
    setAnswerCount(await db.answers.count())
    setProgressCount(await db.progress.count())
  }

  useEffect(() => {
    load()
  }, [])

  const cards = [
    { label: '学习记录', value: answerCount, sub: '本机答题日志' },
    { label: '进度项目', value: progressCount, sub: '本机进度表' },
    { label: '拼音模块', value: 1, sub: '已接入库' },
    { label: '笔顺模块', value: 1, sub: '已接入库' }
  ]

  return (
    <main>
      <PageHeader
        eyebrow="Stats"
        title="学习进度"
        subtitle="先用 Dexie 本地保存，后面接账号后再同步到云端。"
      />

      <section className="grid grid-cols-2 gap-3">
        {cards.map((card) => (
          <div key={card.label} className="glass-panel rounded-[26px] p-5">
            <p className="text-sm font-black text-slate-500">{card.label}</p>
            <p className="mt-3 text-[38px] font-black text-slate-950">{card.value}</p>
            <p className="mt-1 text-xs font-bold text-slate-400">{card.sub}</p>
          </div>
        ))}
      </section>

      <section className="glass-panel mt-5 rounded-[30px] p-6">
        <h2 className="text-xl font-black">当前框架原则</h2>
        <p className="mt-3 text-sm font-semibold leading-7 text-slate-600">
          手机优先、轻量、模块化、内容后置。先把交互和系统骨架打稳，再批量导入真实课程数据。
        </p>
      </section>
    </main>
  )
}
