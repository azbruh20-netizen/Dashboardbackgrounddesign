export function DashboardLayout() {
  return (
    <div className="h-full flex flex-col gap-5 p-6">
      {/* Top metric cards holder */}
      <div className="grid grid-cols-4 gap-5">
        <div className="bg-[#1a2942]/60 backdrop-blur-sm border border-white/10 rounded-2xl shadow-xl h-24" />
        <div className="bg-[#1a2942]/60 backdrop-blur-sm border border-white/10 rounded-2xl shadow-xl h-24" />
        <div className="bg-[#1a2942]/60 backdrop-blur-sm border border-white/10 rounded-2xl shadow-xl h-24" />
        <div className="bg-[#1a2942]/60 backdrop-blur-sm border border-white/10 rounded-2xl shadow-xl h-24" />
      </div>

      {/* Main dashboard grid */}
      <div className="grid grid-cols-3 gap-5 flex-1">
        {/* Large left tile with gradient - spans all 3 rows */}
        <div className="row-span-3 bg-gradient-to-br from-[#4a6fa5] via-[#2d4563] to-[#6b4a7d] rounded-3xl shadow-2xl" />

        {/* Top right two tiles */}
        <div className="bg-[#1a2942]/60 backdrop-blur-sm border border-white/10 rounded-3xl shadow-xl" />
        <div className="bg-[#1a2942]/60 backdrop-blur-sm border border-white/10 rounded-3xl shadow-xl" />

        {/* Middle two tiles */}
        <div className="bg-[#1a2942]/60 backdrop-blur-sm border border-white/10 rounded-3xl shadow-xl" />
        <div className="bg-[#1a2942]/60 backdrop-blur-sm border border-white/10 rounded-3xl shadow-xl" />

        {/* Bottom single wide tile */}
        <div className="col-span-2 bg-[#1a2942]/60 backdrop-blur-sm border border-white/10 rounded-3xl shadow-xl" />
      </div>
    </div>
  );
}