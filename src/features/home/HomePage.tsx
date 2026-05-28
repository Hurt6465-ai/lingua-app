import type { RouteKey } from '../../app/routes'
import { siteConfig, toolEntries, topLearningEntries, type HomeEntry } from '../../conf/siteConfig'
import Icon from '../../components/common/Icon'

function toneClass(tone: HomeEntry['tone']) {
  const map = {
    blue: 'bg-blue-100 text-blue-600',
    green: 'bg-emerald-100 text-emerald-600',
    purple: 'bg-purple-100 text-purple-600',
    orange: 'bg-orange-100 text-orange-600',
    cyan: 'bg-cyan-100 text-cyan-600',
    slate: 'bg-slate-100 text-slate-700',
    pink: 'bg-pink-100 text-pink-600'
  }

  return map[tone]
}

export default function HomePage({ go }: { go: (route: RouteKey) => void }) {
  return (
    <main className="pb-6 pt-8">
      <header className="flex items-start justify-between">
        <button className="rounded-2xl p-2 text-slate-900 active:bg-white/50">
          <Icon name="menu" className="h-9 w-9" />
        </button>

        <div className="flex-1 pl-4">
          <h1 className="text-[26px] font-black leading-tight tracking-tight text-slate-950">{siteConfig.title}</h1>
          <div className="mt-1 text-[13px] font-black uppercase tracking-[0.24em] text-slate-500">🧬 {siteConfig.subtitle}</div>
        </div>

        <button className="rounded-2xl px-3 py-2 text-[17px] font-black text-indigo-600 active:bg-white/60">登录</button>
      </header>

      <section className="mt-8 grid grid-cols-4 gap-3">
        {topLearningEntries.map((entry) => (
          <button
            key={entry.id}
            onClick={() => go(entry.route)}
            className="glass-panel flex min-h-[118px] flex-col items-center justify-center rounded-[22px] px-2 text-center active:scale-[0.98]"
          >
            <div className={`mb-3 flex h-12 w-12 items-center justify-center rounded-full ${toneClass(entry.tone)}`}>
              <Icon name={entry.icon as never} className="h-6 w-6" />
            </div>
            <div className="text-[17px] font-black text-slate-900">{entry.title}</div>
            <div className="mt-1 text-[13px] font-semibold text-slate-500">{entry.subtitle}</div>
          </button>
        ))}
      </section>

      <section className="mt-4 grid grid-cols-2 gap-3">
        {toolEntries.map((entry) => (
          <button
            key={entry.id}
            onClick={() => go(entry.route)}
            className="glass-panel flex items-center rounded-[22px] p-4 text-left active:scale-[0.99]"
          >
            <div className={`mr-4 flex h-12 w-12 shrink-0 items-center justify-center rounded-full ${toneClass(entry.tone)}`}>
              <Icon name={entry.icon as never} className="h-6 w-6" />
            </div>
            <div className="min-w-0">
              <div className="truncate text-[17px] font-black text-slate-900">{entry.title}</div>
              <div className="mt-1 truncate text-[13px] font-semibold text-slate-500">{entry.subtitle}</div>
            </div>
          </button>
        ))}
      </section>

      <button onClick={() => go('quiz')} className="glass-panel mt-4 flex w-full items-center rounded-[24px] p-5 text-left active:scale-[0.99]">
        <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-pink-100 text-pink-600">
          <Icon name="quiz" className="h-6 w-6" />
        </div>
        <div className="min-w-0 flex-1">
          <div className="text-[18px] font-black text-slate-900">题型系统 Demo</div>
          <div className="mt-1 truncate text-[13px] font-semibold text-slate-500">选择题 / 填空题 / 手势卡片</div>
        </div>
        <Icon name="chevron" className="h-6 w-6 text-slate-400" />
      </button>

      <button onClick={() => go('placeholder')} className="relative mt-8 w-full overflow-hidden rounded-[28px] border border-white/70 bg-slate-900 p-6 text-left text-white shadow-[0_18px_50px_rgba(15,23,42,0.22)] active:scale-[0.99]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_10%,rgba(255,255,255,.22),transparent_28%),linear-gradient(135deg,rgba(15,23,42,.72),rgba(15,23,42,.96))]" />
        <div className="absolute -right-4 bottom-0 h-32 w-44 rounded-tl-[80px] bg-gradient-to-tr from-slate-700 via-slate-500 to-slate-300 opacity-40" />
        <div className="relative">
          <div className="mb-5 inline-flex rounded-full bg-pink-500 px-4 py-1 text-xs font-black uppercase tracking-wider">AI Tutor ✨</div>
          <h2 className="text-[27px] font-black leading-tight">AI 真人私教对练</h2>
          <p className="mt-2 text-[16px] font-semibold text-white/82">沉浸式真实口语对话</p>
        </div>
      </button>

      <button onClick={() => go('placeholder')} className="glass-panel relative mt-5 flex w-full items-center overflow-hidden rounded-[26px] p-5 text-left active:scale-[0.99]">
        <div className="absolute left-0 top-0 h-full w-2 bg-emerald-500" />
        <div className="mr-5 flex h-[72px] w-[72px] items-center justify-center rounded-[22px] bg-emerald-500 text-white shadow-[0_14px_30px_rgba(16,185,129,.32)]">
          <Icon name="map" className="h-9 w-9" />
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2">
            <h2 className="text-[21px] font-black text-slate-950">主线闯关地图</h2>
            <span className="rounded-lg bg-emerald-500 px-2 py-1 text-[10px] font-black text-white">NEW</span>
          </div>
          <p className="mt-1 truncate text-[14px] font-bold text-slate-600">စနစ်တကျ လေ့လာရန် လမ်းပြမြေပုံ</p>
          <div className="mt-4 flex items-center gap-3">
            <div className="h-2 w-24 overflow-hidden rounded-full bg-slate-100">
              <div className="h-full w-[46%] rounded-full bg-emerald-500" />
            </div>
            <span className="text-[11px] font-black uppercase text-emerald-600">Continue</span>
          </div>
        </div>
        <Icon name="chevron" className="h-7 w-7 text-slate-400" />
      </button>
    </main>
  )
}
