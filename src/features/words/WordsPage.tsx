import PageHeader from '../../components/common/PageHeader'
import SwipeLearningCard from '../../components/learning/SwipeLearningCard'

export default function WordsPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Words"
        title="单词学习框架"
        subtitle="这一页先只做卡片、手势和学习交互。正式单词数据后面再接。"
      />

      <SwipeLearningCard
        title="你好"
        subtitle="nǐ hǎo"
        answer="缅文：မင်္ဂလာပါ。这里后面会接中文、拼音、缅文、例句、音频。"
      />

      <section className="mt-6 rounded-[26px] bg-white/70 p-5">
        <h2 className="text-lg font-black text-slate-950">手势说明</h2>
        <p className="mt-2 text-sm font-bold leading-7 text-slate-500">
          上滑查看答案，左滑表示不认识，右滑表示认识。按钮也保留，方便不习惯手势的用户。
        </p>
      </section>
    </main>
  )
}
