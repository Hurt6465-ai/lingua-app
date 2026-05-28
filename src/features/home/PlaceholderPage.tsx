import PageHeader from '../../components/common/PageHeader'

export default function PlaceholderPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Coming Soon"
        title="模块占位"
        subtitle="这个入口先占位，后面按你的真实业务继续接内容。"
      />

      <section className="glass-panel rounded-[32px] p-8 text-center">
        <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-blue-100 text-4xl">🚧</div>
        <h2 className="text-2xl font-black text-slate-950">还没接真实模块</h2>
        <p className="mt-3 font-semibold leading-7 text-slate-500">
          当前重点是基础框架、手机 UI、拼音库、笔顺库、题型组件和手势交互。
        </p>
      </section>
    </main>
  )
}
