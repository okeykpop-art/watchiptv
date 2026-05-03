import { KNOWLEDGE_ARTICLES } from "@/lib/data";

export default function KnowledgeBase() {
  return (
    <section id="knowledge" className="bg-slate-50 py-14 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-medium text-blue-600 mb-4">Knowledge Base</span>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900 mb-4">IPTV Knowledge Base</h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">Everything you need to know about IPTV — from beginner's guides to troubleshooting.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {KNOWLEDGE_ARTICLES.map((article, i) => (
            <a key={i} href={article.href} className="group flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 transition-all duration-300 hover:border-blue-200 hover:bg-slate-50 hover:-translate-y-1">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-xl group-hover:bg-blue-100 transition-colors flex-shrink-0">{article.icon}</div>
              <div>
                <h3 className="text-slate-900 font-medium group-hover:text-blue-600 transition-colors">{article.title}</h3>
                <span className="text-sm text-blue-600">Read more →</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
