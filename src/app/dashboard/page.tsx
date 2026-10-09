export default function DashboardOverviewPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-slate-900">Dashboard Overview</h1>
        <p className="text-slate-600 mt-1">مرحباً بك في منصة StudyAI</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <p className="text-sm font-medium text-slate-500">عدد المواد</p>
          <p className="text-2xl font-bold text-slate-900 mt-2">0</p>
        </div>
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <p className="text-sm font-medium text-slate-500">ساعات الدراسة</p>
          <p className="text-2xl font-bold text-slate-900 mt-2">0 hrs</p>
        </div>
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <p className="text-sm font-medium text-slate-500">نسبة التقدم</p>
          <p className="text-2xl font-bold text-slate-900 mt-2">0%</p>
        </div>
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <p className="text-sm font-medium text-slate-500">الاختبارات</p>
          <p className="text-2xl font-bold text-slate-900 mt-2">0</p>
        </div>
      </div>
    </div>
  );
}