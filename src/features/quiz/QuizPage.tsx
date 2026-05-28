import PageHeader from '../../components/common/PageHeader'
import ChoiceQuestion from '../../components/learning/ChoiceQuestion'
import FillBlankQuestion from '../../components/learning/FillBlankQuestion'

export default function QuizPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Quiz"
        title="题型系统"
        subtitle="先搭选择题和填空题组件。后面听力题、连线题、排序题都放在这个模块。"
      />

      <div className="space-y-5">
        <ChoiceQuestion
          prompt="“你好”的缅文意思是？"
          options={['မင်္ဂလာပါ', 'ကျေးဇူးတင်ပါတယ်', 'နောက်မှတွေ့မယ်', 'တရုတ်စာ']}
          answer="မင်္ဂလာပါ"
        />

        <FillBlankQuestion
          prompt="请输入 “中文” 的拼音"
          answer="zhong wen"
          placeholder="zhong wen"
        />
      </div>
    </main>
  )
}
