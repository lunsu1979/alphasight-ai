
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-500 to-indigo-600 text-white text-center p-4">
      <img src="/logo.png" alt="AlphaSight Logo" className="w-28 mb-6" />
      <h1 className="text-4xl font-bold mb-4">AlphaSight AI 智能选股平台</h1>
      <p className="text-white text-opacity-80 mb-6">AI赋能，策略驱动，洞察未来涨跌机会</p>
      <div className="flex space-x-4">
        <Link to="/register" className="bg-white text-blue-600 font-semibold px-6 py-2 rounded-2xl shadow hover:bg-gray-100 transition">立即注册</Link>
        <Link to="/recommendations" className="bg-white text-green-600 font-semibold px-6 py-2 rounded-2xl shadow hover:bg-gray-100 transition">查看推荐</Link>
      </div>
    </div>
  );
}
